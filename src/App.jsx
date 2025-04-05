// import React from 'react';
import { useState } from 'react'
// import AreveiLogo from './assets/arevei favicon.png'
import './App.css'
import SolarSystem from './pages/SolarSystem';
import Hero from './pages/HeroSection';
import About from './pages/about';
import Services from './pages/services';
import HowWeWork from './pages/howWeWork';
import WhyUs from './pages/whyUs';
import ClientAndProject from './pages/ClientAndProject';
import OurBlog from './pages/OurBlog';
import Testimonial from './pages/Testimonial';
import CtaForm from './pages/CtaForm';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';

function App() {
  const words = ['WEB DEV', 'DIGITAL MARKETING', 'LOGO CREATION', 'WORDPRESS DEV', 'BRANDING'];
  let AreveiLogo="https://i.ibb.co/fzFYYLby/arevei-favicon.png";
  return (
    <>
      <div className="Navbar fixed w-full !z-[999] h-[115px] bg-black justify-between flex items-center sm:px-10 px-5">
      <img src="https://i.ibb.co/k44bRCt/Arevei.png" alt="LOGO"  className='!h-[90px] px-5'/>
        <Navbar></Navbar>
      </div>
      <div className="md:flex items-center overflow-hidden min-h-[100vh] pt-[20px]" id='navHome'>
        <Hero></Hero>
        <SolarSystem centerImage={AreveiLogo} orbitingWords={words} />
      </div>
      <div className="aboutus pt-[105px]" id='navAbout'>
        <About></About>
      </div>
      <div className="Services my-20 pt-[105px]" id='navService'>
        <Services></Services>
      </div>
      <div className="HowWeWork mt-16 pt-[105px]">
        <HowWeWork></HowWeWork>
      </div>
      <div className="WhyUs mt-16 mb-16">
        <WhyUs></WhyUs>
      </div>
      <div className="ClientAndProject mt-16 pt-[105px]">
        <ClientAndProject></ClientAndProject>
      </div>
      <div className="OurBlog mt-16 mb-20 pt-[105px]">
        <OurBlog></OurBlog>
      </div>
      <div className="Testimonial mt-16 mb-20 pt-[105px]">
        <Testimonial></Testimonial>
      </div>
      <div className="CtaForm mt-16 mb-20 pt-[105px]" id='navContact'>
        <CtaForm></CtaForm>
      </div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
