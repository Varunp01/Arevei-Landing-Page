import GradientText from './GradientText'
import SplitText from "./SplitText";
import Particles from './particles.jsx';
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const About = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <>
        <GradientText
          colors={["#AF3C52, #4466B0, #56ADAC, #6EBD71"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-6xl"
        >
          ABOUT US
        </GradientText>

      <div className="Aboutcontainer flex justify-center items-center md:px-20 px-10 my-20">

        <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            Particlespread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="">
          <SplitText
            text="You’ve got a business to grow—let’s make sure your marketing keeps up. Arevei takes the guesswork out of digital marketing so you can focus on what matters. No complicated dashboards. No confusing setups. Just results."
            className="text-2xl font-semibold text-center flex justify-center items-center"
            delay={20}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <br></br>
          <div className="flex justify-center my-10">
            <img src="https://i.ibb.co/fzFYYLby/arevei-favicon.png" alt="LOGO" />
          </div>
          <br></br>

          <SplitText
            text="We're a team of passionate marketers who believe growing your business should be exciting, not exhausting. Our intuitive platform puts the power of SEO, influencer marketing, and automation in your hands – no coding skills or complex manuals are required. Think of us as your friendly marketing guides."
            className="text-2xl font-semibold text-center flex justify-center"
            delay={40}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

      </div>
    </>
  );
};

export default About;