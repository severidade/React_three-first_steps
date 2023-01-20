import "./Reset.css"
import './App.css';

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import BoxThree from "./componentes/BoxThree";

export default function App() {
  return (
    <Canvas>
      <directionalLight intensity={0.5} />
      <BoxThree />
    </Canvas>
  );
}
