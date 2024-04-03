import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


import ImageFloater from '../imageFloater';
import { Parallax,ParallaxProvider } from 'react-scroll-parallax';

function LandingPage() {
  const controls = useAnimation();
  const controlsHeader = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
    controlsHeader.start({clipPath:"circle(150% at 0% 0)" ,scale:1});
    controlsHeader.start({color: "#141414"},{transition: {delay:5}});

  }, [controls, controlsHeader]);

  return (
    
    <div className='overflow-clip w-screen h-[100vh]'>
      
      <ImageFloater />
      <div className={`transition-opacity overflow-hidden duration-1000 sm:ml-0  flex flex-col sm:flex-wrap justify-center sm:items-center sm:justify-items-start h-screen prose prose-sm lg:prose-xl text-MainBeige relative`}>
        {/* <Parallax speed={-15} > */}
        <div data-scroll data-scroll-speed="4" data-scroll-delay="0.5" className="z-1  w-screen h-screen flex justify-center items-center border-none outline-none">
          <motion.video
            className="z-1 outline-none scale-[60%] border-none overflow-hidden object-cover hover:none"
            controls={false} autoPlay muted loop
            transition={{ duration: 3, ease: "circInOut" }}
            src={'/Website landing 1.mp4'}
            type="video/mp4"
          />
        </div>
        {/* </Parallax> */}
      
        <div data-scroll data-scroll-speed="1.5" className='opacity-100 text-NightFall hidden sm:flex sm:absolute hover:text-LunarTwilight  duration-200 bottom-[10%] w-2/3 flex-col z-3 perspective-800'>
        {/* <Parallax speed={10} > */}
          <motion.h1
            style={{ clipPath: 'circle(0% at 0% 0)' }}
            data-speed="6"
            id='hero_line'
            className={` relative landingAnimations scale-[90%] font-extralight tracking-wide textC mb-5 opacity-100 landingItem1 group text-NightFall font-Lora sm:text-5xl text-center leading-none`}
            initial={{ clipPath: 'circle(0% at 0% 0)', scale: 0.90,color:"#141414" }}
            animate={controlsHeader} // Using controlsHeader for animation
            transition={{ delay: 0.7, duration: 1.5, ease: "circInOut" }}
          >
            <span className='textC opacity-100 font-normal text-LunarTwilight text-8xl'>Storytellers</span> <span className='opacity-100'>for</span> <br /><span className='opacity-100'>the</span> <span className='textC font-normal opacity-100 text-8xl text-LunarTwilight '>Visionaries</span>
          </motion.h1>
          {/* </Parallax> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;