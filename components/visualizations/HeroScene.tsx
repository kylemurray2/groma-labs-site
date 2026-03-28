"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { TerrainChunk } from "./TerrainChunk";

export function HeroScene() {
    return (
        <div className="relative w-full h-full bg-black">
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
                <PerspectiveCamera makeDefault position={[0, 10, 20]} fov={50} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2 - 0.1}
                    autoRotate={false}
                />

                {/* Environment - Dark, Moody */}
                <color attach="background" args={["#050505"]} />
                <fog attach="fog" args={["#050505", 10, 50]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

                {/* The Main Content */}
                <SceneContent />

                {/* Post Processing or Overlays could go here */}
            </Canvas>

            {/* UI Overlay for the Lidar Sweep Control (Simulated for simpler dev) */}
            <div className="absolute bottom-10 left-10 text-white pointer-events-none">
                <p className="text-xs font-mono text-cyan-400">VISUALIZATION_MODE: HYBRID_LIDAR</p>
            </div>
        </div>
    );
}

function SceneContent() {
    const [sweepPos, setSweepPos] = useState(0);

    // Animate the sweep line back and forth or continuous
    useFrame((state) => {
        // Oscillation between -10 and 10
        const t = state.clock.getElapsedTime();
        setSweepPos(Math.sin(t * 0.5) * 15);
    });

    return (
        <>
            <gridHelper args={[100, 100, 0x333333, 0x111111]} position={[0, -0.01, 0]} />
            <TerrainChunk sweepPos={sweepPos} position={[0, 0, 0]} />
        </>
    );
}
