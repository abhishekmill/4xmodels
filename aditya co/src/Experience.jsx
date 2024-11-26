import React, { useEffect, useRef, useState } from "react";
import { Content } from "./modeljsx/Content";
import { HumanCapacity } from "./modeljsx/HumanCapacity";
import { Infrastructure } from "./modeljsx/Infrastructure";
import { Schools } from "./modeljsx/Schools";
import * as THREE from "three";
import gsap from "gsap";
import {
  ShowContent,
  ShowHome,
  ShowHumanCapicity,
  ShowInfra,
  ShowSchools,
} from "./store/app.Slice";
import { useDispatch, useSelector } from "react-redux";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
  const dispatch = useDispatch();
  const meshRef = useRef();
  const { scene } = useSelector((slice) => slice.scene);
  const [rotation, setRotation] = useState({
    x: 0,
    y: THREE.MathUtils.degToRad(10),
    z: 0,
  });

  // animation  function
  const animateRotation = (newRotation) => {
    gsap.to(rotation, {
      ...newRotation,
      duration: 4,
      ease: "power3.inOut",
      onUpdate: () => {
        if (meshRef.current) {
          meshRef.current.rotation.x = rotation.x;
          meshRef.current.rotation.y = rotation.y;
          meshRef.current.rotation.z = rotation.z;
        }
      },
    });
  };

  //handle keypress
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "1") {
        dispatch(ShowContent());
      }
      if (event.key === "2") {
        dispatch(ShowSchools());
      }
      if (event.key === "3") {
        dispatch(ShowHumanCapicity());
      }
      if (event.key === "4") {
        dispatch(ShowInfra());
      }
      if (event.key === "Escape") {
        dispatch(ShowHome());
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [rotation]);

  //handle store functions

  useEffect(() => {
    console.log(scene);

    if (scene == "schools") {
      animateRotation({ x: 0, y: THREE.MathUtils.degToRad(53), z: 0 });
    }
    if (scene === "content") {
      animateRotation({ x: 0, y: THREE.MathUtils.degToRad(140), z: 0 });
    }
    if (scene === "human") {
      animateRotation({ x: 0, y: THREE.MathUtils.degToRad(-40), z: 0 });
    }
    if (scene === "infra") {
      animateRotation({ x: 0, y: THREE.MathUtils.degToRad(-130), z: 0 });
    }
    if (scene === "home") {
      animateRotation({ x: 0, y: THREE.MathUtils.degToRad(40), z: 0 });
    }
  }, [scene]);

  useFrame(() => {
    if (scene === "home") {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={meshRef}>
      <group
        name="content"
        onClick={() => {
          dispatch(ShowContent());
        }}
      >
        <Content />
      </group>

      <group
        name="content"
        onClick={() => {
          dispatch(ShowHumanCapicity());
        }}
      >
        <HumanCapacity />
      </group>

      <group
        name="content"
        onClick={() => {
          dispatch(ShowInfra());
        }}
      >
        <Infrastructure />
      </group>
      <group
        name="content"
        onClick={() => {
          dispatch(ShowSchools());
        }}
      >
        <Schools />
      </group>
    </group>
  );
};

export default Experience;
