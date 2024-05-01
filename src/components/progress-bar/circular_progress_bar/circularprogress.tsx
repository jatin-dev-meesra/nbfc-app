"use client";
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import RadialSeparators from "./radialSeprator";

const CircularProgressBarComponent = ({ percentage }: any) => {
  return (
    <>
      <CircularProgressbarWithChildren
        value={percentage}
        // text={`${percentage}%`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: "16px",
          textColor: "#ff5500",
          pathColor: "#ff5500",
          trailColor: "rgb(255, 85, 0,0.3)",
        })}
      >
        <h1 className=" text-m-orange font-medium">{percentage}%</h1>
        <RadialSeparators
          count={10}
          style={{
            background: "#fff",
            width: "2px",
            // This needs to be equal to props.strokeWidth
            height: `${10}%`,
          }}
        />
      </CircularProgressbarWithChildren>
    </>
  );
};

export default CircularProgressBarComponent;
