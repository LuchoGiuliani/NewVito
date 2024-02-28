import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { Points, PointMaterial, Preload } from "@react-three/drei";



const Stars = (props) => {
  
  const ref = useRef();
  const generateRandomSpherePositions = (numPoints, radius) => {
    const positions = [];
    for (let i = 0; i < numPoints * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  };

  // Generar las posiciones de las estrellas en una esfera con Math.random()
  const sphere = generateRandomSpherePositions(2000, 1.2);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all:true />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
