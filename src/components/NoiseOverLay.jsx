// components/NoiseOverlay.js
"use client";
// components/NoiseOverlay.js
import React, { useEffect, useRef } from 'react';

const NoiseOverlay = () => {
  const noiseRef = useRef(null);
  let flip = 1; // Initial scale direction

  useEffect(() => {
    const interval = setInterval(() => {
        if (noiseRef.current) {
          // Generates random translations within a range of -5px to 5px for both X and Y
          const randomX = Math.random() * 10 - 5;
          const randomY = Math.random() * 10 - 5;
          flip *= -1;

          noiseRef.current.style.transform = `translate(${randomX}px, ${randomY}px) scale(${flip})`;
        }
      }, 100); // Adjusts the interval for how often the noise effect updates
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div ref={noiseRef} className="fixed inset-0 opacity-40 z-10 pointer-events-none bg-noise bg-repeat-round" style={{ backgroundImage: "url('/noise.avif')" }}>
    </div>
  );
};

export default NoiseOverlay;
