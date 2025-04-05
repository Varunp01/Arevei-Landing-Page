import GradientText from './GradientText'
import SplashCursor from './SplashCursor'
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Services = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
    <GradientText
              colors={["#AF3C52, #4466B0, #56ADAC, #6EBD71"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class text-6xl"
            >
              SERVICES
            </GradientText>
      <div className="serviceSSection flex flex-wrap justify-around items-center w-[100vws]" id='serviceSSection' onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>

        <div class="card m-5">
          <div class="card2 flex justify-center items-center">
            <div class="book">
              <p className='pl-10 pr-2'>
                Boosting your online presence and reaching your ideal customers with data-driven strategies. Let's get your brand seen.
              </p>
              <div class="cover">
                <img src="src\assets\DigitalM.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <div class="card m-5">
          <div class="card2 flex justify-center items-center">
            <div class="book">
              <p className='pl-10 pr-2'>
                Building a e-commerce website that's not just beautiful, but also converts visitors into customers. Your digital storefront is perfected.
              </p>
              <div class="cover">
                <img src="src\assets\WebD.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <div class="card m-5">
          <div class="card2 flex justify-center items-center">
            <div class="book">
              <p className='pl-10 pr-2'>
                Crafting a brand identity that resonates and sets you apart from the competition. Make your mark.
              </p>
              <div class="cover">
                <img src="src\assets\Branding.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>

      </div>
      {isHovering && (
        <SplashCursor />
      )}
    </>
  );
};

export default Services;