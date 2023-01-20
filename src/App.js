import "./Reset.css"
import './App.css';

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import BoxThree from "./componentes/BoxThree";

export default function App() {
  return (
    <Canvas>
      <directionalLight intensity={0.5} />
      <BoxThree />
      <Text
        fontSize={1}
        position={[-1 , 2, 0]}
        anchorX="center"
        anchorY="middle"
        textAlign="center"
      >
        Todas as flores
      </Text>
    </Canvas>
  );
}
