import GradientText from './GradientText'
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const CtaForm = () => {
  return (
    <>
      <div className="">
        <GradientText
          colors={["#AF3C52, #4466B0, #56ADAC, #6EBD71"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-6xl text-center"
        >
          You Run the Business,
        </GradientText>
        <GradientText
          colors={["#AF3C52, #4466B0, #56ADAC, #6EBD71"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-6xl text-center"
        >
          We’ll Handle the Marketing.
        </GradientText>
        <div className="text-2xl text-center mb-10 bg-[#0F1014]">Focus on what you do best, and we’ll make sure the right people find you. Sound like a plan?</div>
      </div>


      <div className="formDiv mx-5 flex justify-center mt-10">
        <div class="form-card1">
          <div class="form-card2">
            <form class="form">
            <GradientText
          colors={["#AF3C52, #4466B0, #56ADAC, #6EBD71"]}
          animationSpeed={3}
          showBorder={false}
          className="form-heading custom-class"
        >
          GET IN TOUCH
        </GradientText>
              <div class="form-field">
                <input required="" placeholder="Name" class="input-field" type="text" />
              </div>

              <div class="form-field">
                <input
                  required=""
                  placeholder="Email"
                  class="input-field"
                  type="email"
                />
              </div>

              <div class="form-field">
                <input
                  required=""
                  placeholder="Subject"
                  class="input-field"
                  type="text"
                />
              </div>

              <div class="form-field">
                <textarea
                  required=""
                  placeholder="Message"
                  cols="30"
                  rows="3"
                  class="input-field"
                ></textarea>
              </div>

              <button class="sendMessage-btn">Let’s Connect</button>
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default CtaForm;