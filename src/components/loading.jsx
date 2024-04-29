"use client";
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLoader } from './loadStateContext';

function LoadingScreen({ loadingTime,setState }) {  // Default loading time of 2 seconds

  const {loadState,setloadState}= useLoader();

  useEffect(() => {
    console.log("loadState" + loadState)
    const timer = setTimeout(() => {
      setloadState(false);
      console.log("loadState" + loadState)

    }, loadingTime * 1000);

    return () => clearTimeout(timer);
  }, [loadState]);

  if (!loadState) return null;

  return (
    <div className='bg-white h-screen fixed z-50 w-screen flex justify-center items-center'>
      <motion.div initial={{
        opacity:0,
        y:50}
      }
        animate={{
          opacity: 1,
          scale:[0.8,1],  // Animate to full opacity
          y: 0,        // Animate to y-axis 0 position
          transition: {
            duration: 1,  // Duration for the animation
            ease: "circInOut"  // Easing function for the animation
          }
        }} >
        <h1 className='text-8xl font-Lora'>Stories bind us like strings</h1>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;
