"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial, Html } from "@react-three/drei";
import { extend } from "@react-three/fiber";

// --- SHADERS ---

// A material that visualizes a "Data Grid" with heatmap coloring
// This replaces the old LidarSweepMaterial
const DeformationGridMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorSafe: new THREE.Color("#00F0FF"), // Cyan (Stable)
        uColorRisk: new THREE.Color("#FF3333"), // Red (Subsidence)
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    varying float vDisplacement;
    uniform float uTime;

    // Psuedo-random 
    float random (in vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
    }

    // Gradient Noise
    float noise (in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        // Four corners in 2D of a tile
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);

        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
    }

    void main() {
      vUv = uv;
      
      // Generate a "Sinkhole" shape in the middle
      // Distance from center (0.5, 0.5)
      float dist = distance(uv, vec2(0.5));
      
      // Displacement: Sinking in the middle
      float sinkhole = smoothstep(0.6, 0.0, dist) * -2.0; 
      
      // Add some noise for terrain realism
      float terrain = noise(uv * 5.0) * 0.5;
     
      vDisplacement = sinkhole + terrain;
      
      vec3 newPos = position;
      newPos.y += vDisplacement; // Apply changes to Y

      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPos, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform vec3 uColorSafe;
    uniform vec3 uColorRisk;
    varying float vDisplacement;
    varying vec2 vUv;

    void main() {
      // Create grid lines
      float gridX = step(0.97, fract(vUv.x * 20.0));
      float gridY = step(0.97, fract(vUv.y * 20.0));
      float isGrid = max(gridX, gridY);

      // Color mapping: 
      // Deep negative displacement (vDisplacement < -1.0) -> Red
      // Near 0 or positive -> Blue
      
      float t = smoothstep(0.0, -1.5, vDisplacement);
      vec3 color = mix(uColorSafe, uColorRisk, t);
      
      // Make non-grid pixels transparent-ish dark
      vec3 finalColor = color;
      float alpha = 0.8;
      
      if (isGrid < 0.5) {
        finalColor = mix(vec3(0.05), color, 0.1); // Faint background
        alpha = 0.6;
      } else {
        finalColor += 0.2; // Bloom boost on grid
      }

      gl_FragColor = vec4(finalColor, alpha);
    }
  `
);

// Register the material so it can be used in JSX
extend({ DeformationGridMaterial });

// Add proper typescript support for the custom material
declare global {
    namespace JSX {
        interface IntrinsicElements {
            deformationGridMaterial: any;
        }
    }
}

// --- COMPONENTS ---

interface TerrainChunkProps {
    sweepPos?: number;
    position: [number, number, number];
}

export function TerrainChunk({ position }: TerrainChunkProps) {
    const meshRef = useRef<any>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.uTime = state.clock.getElapsedTime();
        }
    });

    return (
        <group position={position}>
            {/* The Terrain Map */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <planeGeometry args={[30, 30, 60, 60]} />
                {/* @ts-expect-error - Custom R3F shader material not yet typed */}
                <deformationGridMaterial ref={meshRef} transparentSide={THREE.DoubleSide} />
            </mesh>

            {/* The "Subject Property" - A specific house in the center */}
            <DataPillar position={[0, -2, 0]} />

            {/* Context: Wireframe houses nearby to show scale */}
            <WireframeHouse position={[-4, -0.8, -3]} />
            <WireframeHouse position={[5, -0.5, 2]} />
        </group>
    );
}

function DataPillar({ position }: { position: [number, number, number] }) {
    const barRef = useRef<THREE.Mesh>(null);
    const [stats, setStats] = useState({ flow: "-0.0 mm", color: "#00F0FF" });

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Simulate seasonal breathing: Sine wave
        const breathing = Math.sin(t * 2.0) * 0.5; // Up and down 0.5 units

        if (barRef.current) {
            // Scale Y based on value (visualize the magnitude)
            // We want it to grow from bottom, so standard mesh scaling works if origin is correct.
            // But here we just move it up/down for simplicity
            barRef.current.position.y = position[1] + 1 + breathing;

            // Update Text
            const val = (breathing * 10).toFixed(1);
            const isSinking = breathing < 0;
            setStats({
                flow: `${val} mm`,
                color: isSinking ? "#FF3333" : "#00F0FF"
            });
        }
    });

    return (
        <group>
            {/* The Pillar Object */}
            <mesh ref={barRef} position={[position[0], position[1], position[2]]}>
                <cylinderGeometry args={[0.2, 0.2, 4, 16]} />
                <meshStandardMaterial
                    color={stats.color}
                    emissive={stats.color}
                    emissiveIntensity={2}
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* The Target Ring on the ground */}
            <mesh position={[position[0], position[1] + 0.1, position[2]]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.5, 0.7, 32]} />
                <meshBasicMaterial color={stats.color} transparent opacity={0.5} />
            </mesh>

            {/* Floating UI Label */}
            <Html position={[position[0] + 1, position[1] + 2, position[2]]} center>
                <div className="flex flex-col items-start bg-black/80 backdrop-blur-md border border-white/20 p-3 rounded-lg min-w-[140px] pointer-events-none select-none shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                    <h3 className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-1">Seasonal Motion</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold font-mono transition-colors duration-300" style={{ color: stats.color }}>
                            {stats.flow}
                        </span>
                        <span className="text-[9px] text-gray-500">REAL-TIME</span>
                    </div>

                    {/* Visual Bar */}
                    <div className="w-full h-1 bg-gray-800 mt-2 rounded-full overflow-hidden relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20" /> {/* Zero marker */}
                        <div
                            className="h-full transition-transform duration-75 origin-left"
                            style={{
                                width: '50%',
                                backgroundColor: stats.color,
                                left: '50%',
                                transform: `scaleX(${parseFloat(stats.flow) / 10})`, // Normalize map to bar width
                                transformOrigin: 'left'
                            }}
                        />
                    </div>

                    <p className="text-[9px] text-gray-400 mt-2">
                        Subsidence Risk: <span className="font-bold text-white">{parseFloat(stats.flow) < -2 ? "HIGH" : "LOW"}</span>
                    </p>
                </div>
            </Html>
        </group>
    );
}

function WireframeHouse({ position }: { position: [number, number, number] }) {
    return (
        <group position={position}>
            <edgesGeometry args={[new THREE.BoxGeometry(2, 1.5, 2)]} />
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(2, 1.5, 2)]} />
                <lineBasicMaterial color="#333" />
            </lineSegments>
            {/* Fill slightly */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1.9, 1.4, 1.9]} />
                <meshBasicMaterial color="#050505" transparent opacity={0.9} />
            </mesh>
        </group>
    )
}
