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
  const words = ['WEB DEV', 'DIGITAL MARKETING', 'LOGO CREATION', 'WORDPRESS DEV'];
  let AreveiLogo="https://i.ibb.co/fzFYYLby/arevei-favicon.png";
  return (
    <>
      <div className="Navbar fixed w-full">
        <Navbar></Navbar>
      </div>
      <div className="md:flex items-center overflow-hidden min-h-[100vh]" id='navHome'>
        <Hero></Hero>
        <SolarSystem centerImage={AreveiLogo} orbitingWords={words} />
      </div>
      <div className="aboutus" id='navAbout'>
        <About></About>
      </div>
      <div className="Services my-20" id='navService'>
        <Services></Services>
      </div>
      <div className="HowWeWork mt-16">
        <HowWeWork></HowWeWork>
      </div>
      <div className="WhyUs mt-16 mb-16">
        <WhyUs></WhyUs>
      </div>
      <div className="ClientAndProject mt-16">
        <ClientAndProject></ClientAndProject>
      </div>
      <div className="OurBlog mt-16 mb-20">
        <OurBlog></OurBlog>
      </div>
      <div className="Testimonial mt-16 mb-20">
        <Testimonial></Testimonial>
      </div>
      <div className="CtaForm mt-16 mb-20" id='navContact'>
        <CtaForm></CtaForm>
      </div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
