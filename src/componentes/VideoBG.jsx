import React, { Suspense } from "react";
// import { useFrame } from "@react-three/fiber";
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
// import { EffectComposer, Noise } from "@react-three/postprocessing";

import video_bg from "../video/video_bg.mp4"
import frame from "../img/ai.png"

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}


const VideoBG = ({ children }) => {
  const size = useAspect(1800, 1000)

  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url={frame} />}>
        <VideoMaterial url={video_bg} />
      </Suspense>
    </mesh>
  )
}

export default VideoBG