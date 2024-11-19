import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Bike3DViewer = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={true} />
      <primitive object={scene} scale={1.5} />
    </Canvas>
  );
};

export default Bike3DViewer;
