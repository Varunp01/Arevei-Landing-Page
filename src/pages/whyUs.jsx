import PixelCard from './PixelCard';
import AnimatedList from './AnimatedList'
import GradientText from './GradientText.jsx'
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const WhyUs = () => {
  const items = ['We keep it simple.', 'No confusing dashboards or complicated tools. Just what you need, when you need it.', 'We focus on what works.', 'No fluff, no gimmicks—just real strategies that drive growth.', 'We grow with you.', 'Whether you’re just starting or scaling big, we adapt to your needs.'];
  return (
    <>
    <PixelCard variant="pink">
      <div className="absolute">
      <GradientText
        colors={["#AF3C52, #4466B0, #56ADAC, #6EBD71"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class text-6xl text-center"
      >
        WHY US
      </GradientText>
      <div className="text-2xl text-center mb-10 bg-[#0F1014]">"Because Marketing Shouldn’t Feel Like a Full-Time Job."</div>
      <AnimatedList
        items={items}
        onItemSelect={(item, index) => console.log(item, index)}
        showGradients={false}
        enableArrowNavigation={false}
        displayScrollbar={false}
      />
      </div>
</PixelCard>
    </>
  );
};

export default WhyUs;