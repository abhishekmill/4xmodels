import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const CameraControls = () => {
  const { camera } = useThree();
  const { scene } = useSelector((slice) => slice.scene);

  useEffect(() => {
    camera.position.z = 0;
    camera.position.x = 0;
    camera.position.y = 280;
  }, []);

  function animateCamera(targetPosition, duration = 1) {
    gsap.to(camera.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: duration,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.updateProjectionMatrix();
      },
    });
  }

  useEffect(() => {
    if (scene === "home") {
      animateCamera({ x: 0, y: 50, z: 155 }, 4);
    }
    if (scene !== "home") {
      animateCamera({ x: 0, y: 20, z: 155 }, 2);
    }
  }, [scene]);

  return null;
};

export default CameraControls;
