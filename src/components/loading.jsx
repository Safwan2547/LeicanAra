// LoadingScreen.jsx
"use client";
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoader } from './loadStateContext';
import AnimatedText from './AnimatedText'; // Import the new AnimatedText component
import { useDeviceType } from './deviceProvider';

function LoadingScreen({ loadingTime }) {
  const { loadState, setLoadState } = useLoader();
  const {deviceType} = useDeviceType();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadState(false);
    }, loadingTime * 1000);
    return () => clearTimeout(timer);
  }, [loadingTime, setLoadState]);

  const presenceVariant = {
    initial: { opacity: 1, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: {
      opacity: 0, transition: { ease: "easeInOut", duration: 0.5 }
    }
  };

  return (
    <AnimatePresence>
      {loadState && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={presenceVariant}
          className='h-screen fixed bg-white z-50 w-screen flex justify-center items-center'
        >
          <AnimatedText text="Begin the journey" fullAnimation={true} classP="text-7xl text-center sm:w-screen w-[75vw]  sm:text-8xl text-LunarDawn font-Lora" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;