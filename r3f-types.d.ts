// r3f-types.d.ts (Root of your project)
// Based on image_11.png build logs

import { MeshShaderMaterialProps } from '@react-three/fiber';
import * as THREE from 'three';

// 1. Declare that we are extending the types within the R3F library
declare module '@react-three/fiber' {
  // 2. Extend the JSX.IntrinsicElements interface
  interface IntrinsicElements {
    // 3. Define the custom tag and what props it accepts
    // Based on line 138: accepts ref (meshRef) and THREE.DoubleSide
    deformationGridMaterial: MeshShaderMaterialProps<THREE.ShaderMaterial, typeof THREE.ShaderMaterial>;
  }
}
