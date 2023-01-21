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
import VideoBG from "./componentes/VideoBG";


export default function App() {
  return (
    <Canvas>
      <VideoBG />
      {/* <Scene /> */}
      <EffectComposer>
        <Scanline
          blendFunction={BlendFunction.COLOR_DODGE} // blend mode
          density={0.8} // scanline density
          opacity={0.1}
        />
      {/* <Glitch
          delay={[1.5, 3.5]} // min and max glitch delay
          duration={[0.6, 1.0]} // min and max glitch duration
          strength={[0.3, 1.0]} // min and max glitch strength
          mode={GlitchMode.SPORADIC} // glitch mode
          active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={1} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          dtSize={1}
        /> */}
        <Noise 
          premultiply 
          blendFunction={BlendFunction.OVERLAY}
          opacity={1}
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