"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function LoadingScreen(props) {
  const [show, setShow] = useState(true);
  

  const words = "Stories bind us like strings".split(" ");
  const { loadingTime } = props;

  // Log loading time when it changes
  useEffect(() => {
    console.log("loadingTime=" + loadingTime);
  }, [loadingTime]);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, props.loadingTime * 1000);
  }, []);
  // Animation variants for each word
  const variants = {
    hidden: { clipPath: "circle(0% at 0% 0%)",y:0, scale: 0.9 },
    visible: i => ({
      clipPath: "circle(150% at 0% 0%)",
      scale: 1,
      y: -1000,
      transition: {
        clipPath: {
          duration: loadingTime / 2,
          ease: "anticipate",
        },
        y: {
          duration: loadingTime*0.4,
          delay: loadingTime /2,
          ease: "circInOut",
        },
        scale: {
          duration: loadingTime * 0.7,
          ease: "circInOut",
        }
      },
    }),
  };

  if (loadingTime===0) return null;

  if (!show) return null;


  return (
    <div className='bg-white h-screen fixed z-[100] w-screen'>
    <motion.div
      initial={{backgroundColor:"#141414" }}
      animate={{
        
        backgroundColor: "#ffffff",
        transition: {
          duration: loadingTime / 3,
          delay: loadingTime/2,
          ease: "easeInOut"
        }
      }}
      className="flex  z-[100] bg-white w-screen justify-center items-center h-screen"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        animate="visible"
        className="text-center text-8xl font-satoshi-light text-MainBeige"
      >
        {words.map((word, index) => (
          <motion.span key={index} custom={index} className="mr-4">
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
    </div>
  );
}

export default LoadingScreen;
