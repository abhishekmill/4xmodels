import {
  Cloud,
  Clouds,
  Effects,
  Environment,
  Float,
  OrbitControls,
  Sky,
  Stats,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Experience from "./Experience";
import CameraControls from "./CameraControls";
import gsap from "gsap";
const Scene = () => {
  return (
    <div id="scene">
      <Canvas>
        <Suspense>
          <ambientLight intensity={1} />
          <Environment preset="city" />
          <Float rotationIntensity={0.2} floatIntensity={0.5} speed={0.3}>
            <Experience />
          </Float>
          <Effects />
          <group position={[0, 90, 80]}>
            <Cloud scale={8} position={[3, 95, 80]} />
            <Cloud scale={8} position={[2, 80, 95]} />
            <Cloud scale={18} color={"white"} position={[2, 30, 15]} />
          </group>
          <Sky sunPosition={[5, 2, 0]} />
          <CameraControls />
          <OrbitControls
            zoomSpeed={0.5}
            panSpeed={0.01}
            enablePan={false}
            maxDistance={170}
            minDistance={100}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
          <Stats />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
