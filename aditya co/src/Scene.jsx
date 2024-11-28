import {
  Environment,
  Float,
  OrbitControls,
  Sky,
  Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Sepia } from "@react-three/postprocessing";
import { getProject } from "@theatre/core";
import { Leva, useControls } from "leva";
import React from "react";
import * as THREE from "three";
import CameraControls from "./CameraControls";
import Experience from "./Experience";

import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { Slider } from "./Range";
import { useSelector } from "react-redux";

studio.initialize();
studio.extend(extension);
studio.ui.hide();

const Scene = () => {
  const { scene } = useSelector((slice) => slice.scene);
  // Environment presets from drei
  const environmentPresets = [
    "apartment",
    "city",
    "dawn",
    "forest",
    "lobby",
    "night",
    "park",
    "studio",
    "sunset",
  ];

  const { environmentPreset, showStats, backgroundColor, sepiaIntensity } =
    useControls({
      environmentPreset: {
        value: "city",
        options: environmentPresets,
      },
      sepiaIntensity: {
        value: 0,
        min: 0,
        max: 1,
        step: 0.01,
        label: "Sepia Intensity",
      },
    });

  const mainSheet = getProject("Main Project").sheet("Main Sheet");

  return (
    <div id="scene" style={{ width: "100%", height: "100vh" }}>
      <Leva hidden />

      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 5, 10],
        }}
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(backgroundColor));
        }}
      >
        <Sky sunPosition={[0, 2, 4]} />
        <SheetProvider sheet={mainSheet}>
          {/* <PerspectiveCamera
            fov={75}
            position={[0, 5, 10]}
            theatreKey="Main Camera"
            makeDefault
          /> */}

          {/* <group scale={10} position={[0, 40, 80]}>
            <Slider />
          </group> */}
          <EffectComposer>
            <Sepia intensity={sepiaIntensity} />
          </EffectComposer>

          <Environment preset={environmentPreset} />

          <Float rotationIntensity={0.2} floatIntensity={0.5} speed={0.3}>
            <Experience />
          </Float>

          {/* <Effects /> */}
          <CameraControls />

          {/* {scene !== "home" && (
            <OrbitControls
              enabled
              zoomSpeed={1}
              panSpeed={0.01}
              enablePan={true}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
              maxDistance={180}
            />
          )} */}

          {showStats && <Stats />}
        </SheetProvider>
      </Canvas>
    </div>
  );
};

export default Scene;
