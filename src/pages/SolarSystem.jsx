// SolarSystem.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const SolarSystem = ({ centerImage, orbitingWords }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const calculatePositions = () => {
      const numWords = orbitingWords.length;
      const radius = 150;
      const angleIncrement = (2 * Math.PI) / numWords;
      const newPositions = orbitingWords.map((_, index) => {
        const angle = index * angleIncrement;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return { x, y };
      });
      setPositions(newPositions);
    };

    calculatePositions(); // Calculate initial positions on mount

    const animate = () => {
      setPositions((prevPositions) =>
        prevPositions.map(({ x, y }, index) => {
          const angle = Math.atan2(y, x) + 0.005;
          const newX = 150 * Math.cos(angle);
          const newY = 150 * Math.sin(angle);
          return { x: newX, y: newY };
        })
      );
      requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [orbitingWords]);

  // Ensure positions is initialized before mapping
  if (positions.length === 0) {
    return (
      <div className="solar-system-container">
        <div className="center-image-container">
          <img src={centerImage} alt="Center" className="center-image" />
        </div>
      </div>
    );
  }

  return (
    <div className="solar-system-container">
      <div className="center-image-container">
        <img src={centerImage} alt="Center" className="center-image" />
      </div>
      {orbitingWords.map((word, index) => (
        <div
          key={index}
          className="orbiting-word"
          style={{
            transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default SolarSystem;