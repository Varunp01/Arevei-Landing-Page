// Hero.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import GradientText from './GradientText'

const Hero = () => {
  return (
    <>
      <div className="herocontianer flex justify-center w-full items-center">
        <div className="">
          <GradientText
            colors={["#AF3C52, #4466B0, #56ADAC, #6EBD71"]}
            animationSpeed={3}
            showBorder={false}
            className="GradientText custom-class text-6xl text-center font-extrabold"
          >
            Tired of Marketing,
          </GradientText>
          <GradientText
            colors={["#AF3C52, #4466B0, #56ADAC, #6EBD71"]}
            animationSpeed={3}
            showBorder={false}
            className="GradientText custom-class text-6xl text-center font-extrabold"
          >
            That Feels Like a Hustle?
          </GradientText>
          {/* <h1 className='font-extrabold text-4xl md:text-6xl text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mt-5'>Tired of Marketing,</h1>
    <br />
    <h1 className='font-extrabold text-4xl md:text-6xl text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>That Feels Like a Hustle?</h1> */}
          <h3 className='font-semibold text-3xl md:text-3xl text-center mt-10 mb-10'>Arevei: Marketing Simplified. Finally</h3>
          <div className="flex justify-center pt-5 pb-9">
            <button className='btn text-center'>Let's Talk Growth!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;