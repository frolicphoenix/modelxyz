import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { StrictMode } from "react";

import './App.css'
import Experience from './Experience';


function App() {

  return (
    <StrictMode>
      <Leva collapsed />
      <Canvas shadows>
        <Experience />
      </Canvas>
    </StrictMode>
  )
}

export default App
