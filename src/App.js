import './App.css'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Potato from './Potato'

function App() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold my-3">
          Rotate the Potate
        </h1>
      </div>
      <div id="canvas-container" className="w-full h-screen">
        <Canvas camera={{ position: [0, 0, 6], far: 1000}}>
          <OrbitControls />
          <ambientLight intensity={0.4} />
          <directionalLight color="white" position={[1, 1, 5]} />
          <Potato />
        </Canvas>
      </div>
    </>
  );
}

export default App;
