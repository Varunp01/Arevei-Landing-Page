import GooeyNav from './GooeyNav'
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Navbar = () => {
  const items = [
    { label: "Home", href: "#navHome" },
    { label: "About", href: "#navAbout" },
    { label: "Services", href: "#navService" },
    { label: "Contact", href: "#navContact" },
  ];
  return (
    <>
    <div className="flex justify-center flex-wrap">
    <div style={{position: 'relative' }}>
  <GooeyNav
    items={items}
    animationTime={600}
    pCount={15}
    minDistance={20}
    maxDistance={42}
    maxRotate={75}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
    timeVariance={300}
  />
</div>
</div>
    </>
  );
};

export default Navbar;



