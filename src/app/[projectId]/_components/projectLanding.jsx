import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Parallax,ParallaxBanner } from 'react-scroll-parallax';

const LandingSection = ({ projectData }) => {
  const { title, mainHeader, secondaryHeader, thumbnail2 } = projectData;

  const controls = useAnimation();
  const controlsHeader = useAnimation();

  const sectionAnimations = (val) => {
    controls.start({ opacity: 1, scale: val === 1 ? 2 : 0, duration: 0.5, delay: 0.2, ease: "easeInOut" });
  };

  useEffect(() => {
   
  });

  return (
    <motion.div
      id='landing'
      animate={{ opacity: 1 }}
      className='w-screen h-[130vh] overflow-hidden flex justify-center items-start'
    >
      <motion.div
        id='landingText'
        className='w-full z-[2] h-screen items-center flex text-LunarTwilight'
        initial={{ clipPath:"circle(0% at 0% 0)",scale:0.8 }}
        animate={{ clipPath:"circle(150% at 0% 0)",scale:1 }}
        transition={{ duration: 3,ease: "circInOut" }}
      >
        <motion.div 
          id="headerInfo"
          className='flex absolute justify-evenly align-baseline place-items-end border-black'
         
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 data-scroll data-scroll-speed="-2" 
            data-speed="0"
            className='textC text-6xl sm:text-[10rem] max-w-[75vw] mouseParallax pl-10 text-LunarDawn tracking-wider font-satoshi-bold'
           
            animate={controlsHeader}
          >
            {secondaryHeader ? secondaryHeader : mainHeader}
          </motion.h1>
          <p className='text-2xl hidden text-black overflow-hidden textP align-baseline font-Satoshi font-light'>{title}</p>
        </motion.div>
      </motion.div>
      <motion.div data-scroll data-scroll-direction="" data-scroll-speed="3"
        className='w-full h-full z-[3]  justify-end flex overflow-hidden items-center'
        id='thumbnail'
        animate={controls}
      >
        {/* <Parallax speed={20}> */}
        <motion.img 
        initial={{ clipPath:"circle(0% at 0% 0)",scale:0.8 }}
        animate={{ clipPath:"circle(150% at 100% 0)",scale:1 }}
        transition={{ duration: 3,ease: "anticipate",delay:1 }}
          
          className='w-[50vw]  p-12 object-cover sm:h-[85vh]'
          src={thumbnail2}
          alt="Project Thumbnail"
        />
        {/* </Parallax> */}
      </motion.div>
    </motion.div>
  );
};

export default LandingSection;
