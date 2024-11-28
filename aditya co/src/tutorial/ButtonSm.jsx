import { div } from "framer-motion/client";
import React, { Children } from "react";

const ButtonSm = ({ Children = "text", onclick }) => {
  return (
    <div
      onClick={onclick}
      className="border group py-1 px-5 border-slate-400  text-white  duration-150 bg-[#5C7470]     hover:bg-[#485255] cursor-pointer    rounded-lg "
    >
      <h1 className="text-center  capitalize ">{Children}</h1>
    </div>
  );
};

export default ButtonSm;
