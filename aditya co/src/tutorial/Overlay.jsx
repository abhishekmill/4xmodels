import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { PlayBtn } from "../modeljsx/PlayBtn";
import ButtonSm from "./ButtonSm";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CurvyText from "./CurvyText";
import CameraIntractionControls from "./CameraIntractionControls";
import { useDispatch } from "react-redux";
import { ShowHome, ShowTutorial } from "../store/app.Slice";

const Overlay = () => {
  const data = [
    {
      head: "",
      para: "",
    },
    {
      head: "Hello User ! ...",
      para: "",
    },
    {
      head: "",
      para: "Welcome to an exciting journey through the DRI is a comprehensive tool that provides insights for informed policy decisions, targeted investments, and equitable access to quality digital learning experiences.",
    },
    {
      head: "",
      para: "As you embark on this journey, you'll explore the four pillars and ten indicators that form the foundation of the Digital Readiness Index (DRI). Each pillar has specific indicators that help in understanding the readiness score of that pillar, ultimately contributing to the overall DRI value. ",
    },
    {
      head: "",
      para: "These indicators are essential in assessing and enhancing each pillar, ensuring a comprehensive and actionable approach to achieving digital readiness. By delving into these pillars and indicators, you'll gain insights that inform policy decisions, guide targeted investments, and ensure equitable access to quality digital learning experiences. Let's dive in and see how we can make a difference together! ",
    },
  ];
  const dispatch = useDispatch();
  const [state, setStat] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    // smooth fading-out

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    });

    //timeout function

    if (state === 1) {
      setTimeout(() => {
        setStat(state + 1);
      }, 3000);
    }
  }, [state]);

  const page1Ref = useRef();
  const overlayRef = useRef();

  return (
    <div
      ref={overlayRef}
      className="w-full h-screen bg-[#88F7D4] backdrop-blur-sm absolute z-10 bg-opacity-55 flex flex-col justify-center items-center"
    >
      {/* 1st slide  */}

      <div
        ref={page1Ref}
        className="w-full h-screen top-0 left-0 absolute  flex justify-center items-center  "
      >
        <div className=" flex flex-col  items-center relative">
          <div className="absolute top-7">
            <CurvyText radius={90} text={"DIGITAL READINESS INDEX"} />
          </div>
          <div className="h-[30vh] ">
            <StartBtn
              onclick={() => {
                fadeOutAndDisable(page1Ref, 0.5);
                setTimeout(() => {
                  setStat(state + 1);
                }, 500);
              }}
              className={"w-full h-full"}
            />
          </div>
          <div className="w-[50vw] text-center text-lg ">
            The Digital Readiness Index (DRI), developed by UNESCO MGIEP,
            assesses readiness of a country's education system to deliver
            a digital learning experience to students and allow them to benefit
            from such an intervention.
          </div>
        </div>
      </div>

      {/* Cards */}

      <div
        className={`${
          state === 0
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        } max-w-[50vw] min-w-[30vw] cursor-pointer rounded-lg bg-[#465454]  backdrop-blur-sm flex justify-center items-center`}
      >
        <div ref={textRef} className="p-3 text-center text-white">
          <h1 className="text-2xl font-semibold">{data[state].head}</h1>
          <p>{data[state].para}</p>
        </div>
      </div>

      {/* Buttons */}

      <div
        className={` ${
          state >= 2
            ? "mt-5 opacity-100 "
            : "mt-8 opacity-0 pointer-events-none"
        }  duration-150 flex min-w-[30vw] justify-around w-[40%]`}
      >
        <ButtonSm
          Children="Skip"
          onclick={() => {
            dispatch(ShowHome());
            fadeOutAndDisable(overlayRef, 1);
          }}
        />
        <ButtonSm
          onclick={() => {
            if (state === data.length - 1) {
              dispatch(ShowHome());
              fadeOutAndDisable(overlayRef, 1);
            }
            if (state < data.length - 1) {
              setStat(state + 1);
            }
          }}
          Children="Next"
        />
      </div>
    </div>
  );
};

export default Overlay;

const StartBtn = ({ className, onclick }) => {
  return (
    <>
      <div className={`  ${className} `}>
        <Canvas>
          <ambientLight intensity={2} />
          <group onClick={onclick} scale={2.1} rotation={[Math.PI / 2, 0, 0]}>
            <PlayBtn />
          </group>
          <CameraIntractionControls />
        </Canvas>
      </div>
    </>
  );
};

// fadout animation

const fadeOutAndDisable = (ref, duration = 1) => {
  if (!ref?.current) return;

  // Animate the opacity
  gsap.to(ref.current, {
    opacity: 0,
    top: 10,
    duration: duration,
    onComplete: () => {
      ref.current.style.pointerEvents = "none";
    },
  });
};
