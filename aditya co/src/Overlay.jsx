import React from "react";

const Overlay = () => {
  return (
    <div className="absolute pointer-events-none z-10 w-full h-full flex justify-center  ">
      <div className="mt-[10vh] capitalize text-center ">
        press 'escape' to home <br />
        press 1,2,3,4 for different scenes
      </div>
    </div>
  );
};

export default Overlay;
