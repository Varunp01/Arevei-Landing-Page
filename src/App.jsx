// import React from 'react';
import { useState } from 'react'
import AreveiLogo from './assets/arevei favicon.png'
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

function App() {
  const words = ['WEB DEV', 'DIGITAL MARKETING', 'LOGO CREATION', 'WORDPRESS DEV'];
  return (
    <>
      <div className="md:flex items-center overflow-hidden min-h-[100vh]">
        <Hero></Hero>
        <SolarSystem centerImage={AreveiLogo} orbitingWords={words} />
      </div>
      <div className="aboutus">
        <About></About>
      </div>
      <div className="Services">
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
      <div className="CtaForm mt-16 mb-20">
        <CtaForm></CtaForm>
      </div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
