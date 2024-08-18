import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { StrictMode } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Experience from './Experience';

import Content from './Content';


function App() {

  return (
    <StrictMode>

      <Leva collapsed />

      <Canvas shadows>
        <Experience />
      </Canvas>

      <Content />
      
    </StrictMode>
  )
}

export default App
