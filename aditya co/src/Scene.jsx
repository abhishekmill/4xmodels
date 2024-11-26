import {
  Effects,
  Environment,
  Float,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import Experience from "./Experience";
import CameraControls from "./CameraControls";
import { EffectComposer } from "postprocessing";

const Scene = () => {
  return (
    <div id="scene">
      <Canvas>
        <Environment preset="city" />
        <Float rotationIntensity={0.2} floatIntensity={0.5} speed={0.3}>
          <Experience />
        </Float>
        <Effects />
        <CameraControls />
        <fog attach={"fog"} />
        <OrbitControls
          zoomSpeed={1}
          panSpeed={0.01}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />{" "}
        <Stats />
      </Canvas>
    </div>
  );
};

export default Scene;
