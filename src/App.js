import "./Reset.css"
import './App.css';

import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Image } from "@react-three/drei";
import BoxThree from "./componentes/BoxThree";

import img01 from "./img/1.png"
import logo from "./img/ai.png"


const characters = [
  {
    mugshot: img01,
    id: "79c909145b09e54c80f22a83fc94be848f4f899a",
    name: "Grace Arbor",
    class: "Human",
    occupation: "Courier",
    employer: "North Pacific Parcel Corporation",
    bio: `Subject is being monitored for an unusual
pattern of deliveries detected and flagged by MCOM.
At this time no direct action is recommended.
Awaiting results of high temporal granularity analysis.`
  }
]

export default function App() {
  return (
    <Canvas>
      <directionalLight intensity={0.5} />
      <BoxThree />
      <Image 
        url={characters[0].mugshot} 
        scale={[2, 4]}
        position={[3, 0, 0]}
        transparent
        opacity={0.8}
      />
      <Image 
        url={logo}
        scale={[8, 7]}
        position={[0, 0, 0]}
        transparent
        opacity={0.2}
      />
      <Suspense fallback={null}>
        <Text
          fontSize={1}
          position={[0 , 3, 0]}
          anchorX="center"
          anchorY="middle"
          textAlign="center"
        >
          CEDRIC
        </Text>
        <Text
          position={[-2 , 2, 0]}
          fontSize={0.15}
          anchorX="left"
        >
          {characters[0].name}
        </Text>
        <Text
          position={[-2 , 1.7, 0]}
          fontSize={0.11}
          anchorX="left"
        >
          Classification: {characters[0].class}
        </Text>
        <Text
          position={[-2 , 1.5, 0]}
          fontSize={0.11}
          anchorX="left"
        >
          Employer: {characters[0].employer}
        </Text>
        <Text
          position={[-2 , 1.3, 0]}
          fontSize={0.11}
          anchorX="left"
        >
          Occupation: {characters[0].occupation}
        </Text>
        <Text
          position={[-2 , 1.0, 0]}
          fontSize={0.11}
          anchorX="left"
        >
          Central index Key
        </Text>
        <Text
          position={[-2 , 0.8, 0]}
          fontSize={0.1}
          anchorX="left"
          color= "red"
        >
          {characters[0].id}
        </Text>
        <Text
            position={[-2, 0.6, 0]}
            fontSize={0.1}
            anchorX="left"
            anchorY="top"
            color="white"
        >
          {characters[0].bio}
        </Text>
        <Text
            position={[-2, -2, 0]}
            fontSize={0.1}
            anchorX="left"
            anchorY="top"
            color="lime"
        >
          MENU OPTIONS
        </Text>
        <Text
            position={[-1, -2, 0]}
            fontSize={0.1}
            anchorX="left"
            anchorY="top"
            color="lime"
        >
          PREV
        </Text>
        <Text
            position={[-0.5, -2, 0]}
            fontSize={0.1}
            anchorX="left"
            anchorY="top"
            color="lime"
        >
          NEXT
        </Text>
      </Suspense>
    </Canvas>
  );
}
