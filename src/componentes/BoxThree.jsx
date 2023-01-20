import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

const BoxThree = ({ children }) => {
  const scene = useRef();
  useFrame(() => {
    scene.current.rotation.y += 0.04;
    scene.current.rotation.x += 0.04;
    scene.current.rotation.z += 0.04;
  });

  return (
    <group ref={scene}>
      <Box>
        <meshLambertMaterial color="lime" />
      </Box>
    </group>
  )
}

export default BoxThree