import { Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, scale }) => {

  const computer = useGLTF("./headphones/scene.gltf")
  
  return (
    <mesh>
      <hemisphereLight intensity={4.15} groundColor="white" />
      <pointLight intensity={1} />
      <spotLight position={[10,-50,100]}
                angle={2.5}
                penumbra={0}
                intensity={1}
                castShadow 
                // shadow-mapSize={1024}
                />
      <primitive object={computer.scene}
                  scale={[scale, scale, scale]}
                  position={isMobile ? [0,-1,-1.2]: [0, -2.0,-1.5]}
                  rotation={[1.5, 1.6, -1.5]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(0.7);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])

  useEffect(() => {
    if (isMobile) {
      setScale(0.3);
    } else {
      setScale(0.7);
    }
  }, [isMobile]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [30, 4, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />

        <Computers isMobile={isMobile} scale={scale} />
      </Suspense>
      <Preload all/>
    </Canvas>
  );
};

export default ComputersCanvas;
