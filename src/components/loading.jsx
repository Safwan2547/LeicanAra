import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function LoadingScreen(props) {
  // Split the sentence into words
  const words = "Stories bind us like strings".split(" ");
  const loadingTime=props.loadingTime
  useEffect(() => {
    console.log("loadingTime=" + loadingTime);
  }, [loadingTime]); // Added loadingTime as a dependency

  // Animation variants for each word
  const variants = {
    hidden: { clipPath:"circle(0% at 0% 0%)",scale:0.9 },
    visible: i => ({
      clipPath:"circle(150% at 00% 0%)",
     scale:1,
      y:0,

      transition: {
        clipPath: {
         
          duration: loadingTime/2, // Customize duration for opacity
          ease: "anticipate", // Customize easing for opacity
        },
        scale: {
          
          duration: loadingTime*0.7, // Customize duration for y movement
          ease: "circInOut", // Customize easing for y movement
        }
      },
    }),
  };

  return (
    <motion.div 
    initial={
        {clipPath:"circle(120% at 50% 50%)",}
    }
    animate={
        {clipPath:"circle(0% at 50% 50%)",transition:{duration:loadingTime/3,delay:(loadingTime)-loadingTime/3,ease:"anticipate"}}
    }
    className="flex bg-NightFall w-screen justify-center items-center h-screen">
      <motion.h1 variants={variants}
            initial="hidden"
            animate="visible" className="text-center text-8xl font-satoshi-light text-MainBeige">
        {words.map((word, index) => (
          // Animate each word individually
          <motion.span
            key={index}
            
            custom={index} // Pass the index as the custom prop to use in the animation variants
            className=" mr-4" // Add some space between words
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}

export default LoadingScreen;
