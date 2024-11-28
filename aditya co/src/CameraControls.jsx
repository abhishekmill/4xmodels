import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const CameraControls = () => {
  const { camera } = useThree();
  const { scene } = useSelector((slice) => slice.scene);
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
    if (scene === "tutorial") {
      camera.position.y = 120;
      camera.position.z = 150;
    }

    if (scene === "home") {
      animateCamera({ x: 0, y: 40, z: 155 }, 3);
    }
    if (scene !== "home" && scene !== "tutorial") {
      animateCamera({ x: 0, y: 35, z: 145 }, 3);
    }
  }, [scene]);

  return null;
};

export default CameraControls;
