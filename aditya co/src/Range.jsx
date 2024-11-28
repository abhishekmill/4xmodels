import React, { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { Html } from "@react-three/drei";

export const Slider = ({ min = 0, max = 100, width = 5 }) => {
  const [position, setPosition] = useState(0);
  const value = Math.round(
    ((position + width / 2) / width) * (max - min) + min
  );

  const bind = useDrag(({ movement: [x] }) => {
    const clampedPosition = Math.max(-width / 2, Math.min(width / 2, x / 100));
    setPosition(clampedPosition);
  });

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[width, 0.1, 0.1]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      <mesh {...bind()} position={[position, 0, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
};
