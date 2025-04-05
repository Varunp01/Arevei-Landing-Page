import RollingGallery from './RollingGallery'
import GradientText from './GradientText'
import SplashCursor from './SplashCursor'
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const ClientAndProject = () => {
  return (
    <>
      <GradientText
        colors={["#AF3C52, #4466B0, #56ADAC, #6EBD71"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class text-6xl text-center"
      >
        OUR CLIENTS & PROJECTS
      </GradientText>

      <RollingGallery autoplay={true} pauseOnHover={true} />

    </>
  );
};

export default ClientAndProject;