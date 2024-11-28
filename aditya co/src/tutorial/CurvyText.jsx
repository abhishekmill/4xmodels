import React from "react";

const CurvyText = ({
  text,
  radius = 100,
  color = "text-indigo-600",
  fontSize = "text-xl",
  fontWeight = "font-medium",
}) => {
  const pathId = "textPath";

  return (
    <div className="flex justify-center items-center">
      <svg
        width={radius * 2 + 50} // Add some padding for the text outside
        height={radius * 2 + 50}
        viewBox={`0 0 ${radius * 2 + 50} ${radius * 2 + 50}`}
        className="overflow-visible"
      >
        {/* Define Circle */}
        <circle
          cx={(radius * 2 + 50) / 2}
          cy={(radius * 2 + 50) / 2}
          r={radius}
          stroke="black"
          strokeWidth="0"
          fill="none"
        />

        {/* Define Text Path */}
        <defs>
          <path
            id={pathId}
            d={`
              M ${(radius * 2 + 50) / 2 - radius},${(radius * 2 + 50) / 2} 
              A ${radius + 0},${radius + 0} 0 1,1 ${
              (radius * 2 + 50) / 2 + radius
            },${(radius * 2 + 50) / 2}
            `}
          />
        </defs>

        {/* Curved Text */}
        <text className={`${color} ${fontSize} ${fontWeight}`}>
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvyText;
