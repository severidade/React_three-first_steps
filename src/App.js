import "./Reset.css"
import './App.css';

import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Image } from "@react-three/drei";
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'

import { EffectComposer, Scanline, Noise, Bloom, Glitch, DotScreen } from "@react-three/postprocessing";

import { BlendFunction } from 'postprocessing'
import { BlurPass, Resizer, KernelSize } from 'postprocessing'
import { GlitchMode } from 'postprocessing'


import BoxThree from "./componentes/BoxThree";

import img01 from "./img/1.png"
import logo from "./img/ai.png"
import videobg from "./video/grafic_video.mp4"


const characters = [
  {
    mugshot: img01,
    id: "79c909145b09e54c80f22a83fc94be848f4f899a",
    name: "Grace Arbor",
    video: videobg,
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
      <Scene />
      <directionalLight intensity={0.5} />
      <BoxThree />
      {/* <Image 
        url={characters[0].mugshot} 
        scale={[2, 4]}
        position={[3, 0, 0]}
        transparent
        opacity={0.8}
      /> */}
      {/* <Image 
        url={logo}
        scale={[8, 7]}
        position={[0, 0, 0]}
        transparent
        opacity={0.2}
      /> */}
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
      <EffectComposer>
        {/* <Scanline
          blendFunction={BlendFunction.DARKEN} // blend mode
          density={0.8} // scanline density
          opacity={0.1}
        /> */}
        {/* <Noise 
          premultiply 
          blendFunction={BlendFunction.ADD}
          opacity={2}
        /> */}
        {/* <Bloom
          intensity={2} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          width={Resizer.AUTO_SIZE} // render width
          height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.5} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.3} // smoothness of the luminance threshold. Range is [0, 1]
        /> */}
        <Glitch
          delay={[1.5, 3.5]} // min and max glitch delay
          duration={[0.6, 1.0]} // min and max glitch duration
          strength={[0.3, 1.0]} // min and max glitch strength
          mode={GlitchMode.SPORADIC} // glitch mode
          active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={1} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          dtSize={1}
        />
        {/* <DotScreen
          blendFunction={BlendFunction.NORMAL} // blend mode
          angle={Math.PI * 0.5} // angle of the dot pattern
          scale={6} // scale of the dot pattern
        /> */}
      </EffectComposer>
    </Canvas>
  );
}

function Scene() {
  const size = useAspect(1800, 1000)
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="10.jpg" />}>
        <VideoMaterial url={videobg} />
      </Suspense>
    </mesh>
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}