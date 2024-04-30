"use client";
import React, { useEffect } from 'react';
import { motion,spring, stagger,AnimatePresence } from 'framer-motion';
import { useLoader } from './loadStateContext';

function LoadingScreen({ loadingTime }) {
  const { loadState, setLoadState } = useLoader();
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadState(false);
    }, loadingTime * 1000);
    return () => clearTimeout(timer);
  }, [loadingTime, setLoadState]); // Include setLoadState to ensure it's not re-created unexpectedly

  const words = "Begin the journey".split(" ");

  const letterAnimations = (charIndex, wordIndex) => ({
    hidden: { opacity: 0, y: 100,rotateX:"90deg",skewY:-10,scale:0.2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      skewY: 0,
      rotateX:0,
      transition: {
        duration: 0.1, // Duration of the animation
        type: "spring", // Animation type for a smooth effect
        stiffness: 50,
        mass:1,
      
         delay: charIndex * 0.05}
    }
  });

  const wordVariants = (wordIndex) => ({
    hidden: { opacity: 1 },
    visible: {delayChildren:0.5,
              staggerDirection:1,
     
    }
  });
  const presenceVarient = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: {
      opacity: 0, transition: {
       ease:"easeInOut",duration:0.5 } }
  };

  return (
    <AnimatePresence>
      {loadState && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={presenceVarient}
          className=' h-screen fixed z-50 w-screen flex justify-center items-center'
        >
      <motion.div className='inline-block' initial="hidden" animate="visible">
        <h1 className='text-8xl inline-block text-LunarDawn font-Lora'>
          {words.map((word, index) => (
            <motion.span key={index} style={{ whiteSpace: 'nowrap' }}
              variants={wordVariants(index)}
              initial="hidden"
              animate="visible"
            >
              {Array.from(word).map((char, charIndex) => (
                <motion.span key={charIndex}
                className='inline-block'
                  variants={letterAnimations(charIndex, index)}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))} &nbsp;
            </motion.span>
          ))}
        </h1>
      </motion.div>
    </motion.div>)}
    </AnimatePresence>
  );
}

export default LoadingScreen;
