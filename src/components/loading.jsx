// LoadingScreen.jsx
"use client";
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoader } from './loadStateContext';
import AnimatedText from './AnimatedText'; // Import the new AnimatedText component

function LoadingScreen({ loadingTime }) {
  const { loadState, setLoadState } = useLoader();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadState(false);
    }, loadingTime * 1000);
    return () => clearTimeout(timer);
  }, [loadingTime, setLoadState]);

  const presenceVariant = {
    initial: { opacity: 0, scale: 0.95 },
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
          <AnimatedText text="Begin the journey" classP="text-8xl text-LunarDawn font-Lora" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;