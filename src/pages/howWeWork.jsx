import BlurText from "./BlurText.jsx";
import GradientText from './GradientText.jsx'
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const HowWeWork = () => {
  return (
    <>
      <GradientText
        colors={["#AF3C52, #4466B0, #56ADAC, #6EBD71"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class text-6xl text-center"
      >
        HOW WE WORK
      </GradientText>


      <div className="h-[100vh] w-[90vw] flex items-center ml-5 overflow-x-hidden overflow-y-hidden">
        <div className="h-[100vh] overflow-x-hidden overflow-y-hidden  flex items-center absolute">
          <div className="w-[50px] h-[50px] bg-white rounded-full"></div>
        </div>
        <div className="min-w-[10px] ml-[20px] mr-[30px] bg-green-200 h-[100vh] overflow-x-hidden overflow-y-hidden "> </div>
        <div className=" text-7xl mr-5">1- </div>
        <BlurText
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}>
          We Listen – No cookie-cutter solutions. We get to know your brand, your goals, and what makes you tick.
        </BlurText>
      </div>

      <div className="h-[100vh] w-[90vw] flex items-center ml-5 overflow-x-hidden overflow-y-hidden">
        <div className="h-[100vh] overflow-x-hidden overflow-y-hidden  flex items-center absolute">
          <div className="w-[50px] h-[50px] bg-white rounded-full"></div>
        </div>
        <div className="min-w-[10px] ml-[20px] mr-[30px] bg-green-200 h-[100vh] overflow-x-hidden overflow-y-hidden "> </div>
        <div className=" text-7xl mr-5">2- </div>
        <BlurText
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}>
          We Create – From strategy to execution, we craft marketing that feels effortless but works hard.
        </BlurText>
      </div>

      <div className="h-[100vh] w-[90vw] flex items-center ml-5 overflow-x-hidden overflow-y-hidden">
        <div className="h-[100vh] overflow-x-hidden overflow-y-hidden  flex items-center absolute">
          <div className="w-[50px] h-[50px] bg-white rounded-full"></div>
        </div>
        <div className="min-w-[10px] ml-[20px] mr-[30px] bg-green-200 h-[100vh] overflow-x-hidden overflow-y-hidden "> </div>
        <div className=" text-7xl mr-5">3- </div>
        <BlurText
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}>
          We Scale – More reach, more engagement, more growth—without the burnout.
        </BlurText>
      </div>

    </>
  );
};

export default HowWeWork;