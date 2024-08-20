import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { StrictMode } from "react";
import { OrbitControls, useGLTF} from "@react-three/drei";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Experience from './Experience';


export default function CanvasThree () {

  return (
    <StrictMode>

      <Leva collapsed />

      <Canvas shadows>
        <Experience />
      </Canvas>
      
    </StrictMode>
  )
}

