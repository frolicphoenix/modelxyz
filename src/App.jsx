import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { StrictMode } from "react";

import './App.css'
import Experience from './Experience';
import Header from './Header';

function App() {

  return (
    <StrictMode>
      
      {/* <Leva collapsed /> */}
      <Canvas shadows>
        <Experience />
      </Canvas>
      <Header />
    </StrictMode>
  )
}

export default App
