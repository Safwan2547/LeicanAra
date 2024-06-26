import React, { useRef } from 'react';
import { motion, useScroll,useInView } from 'framer-motion';
import { Parallax,ParallaxBanner } from 'react-scroll-parallax';
import Image from 'next/image';
import AnimatedText from '../animatedText';
import GradientBackground from '../gradientBg';
import Spline from '@splinetool/react-spline';

// Ensure all used components and hooks are correctly imported
function Introductory() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["end end", "center center"], 
  });




  const isInView = useInView(scrollRef,
    {
      amount: 0.5,
      once: true,
    });

  const prologueMontage ='./Prologue Montage 1.mov';



    


  return (
    <div>

    <section 
    id="Introductory" className="relative bg-NightFall z-4 overflow-clip flex flex-col justify-center  items-start">
      
        <GradientBackground blobCount={3} style={{ zIndex: 1 }} className={`w-screen  h-screen absolute `} colors={[['#242424', '#141414'], ['#141414', '#242424']]} bg='#141414' />
        <div className='z-[2] ml-4 flex flex-col justify-center  mt-24 items-start'>
      <motion.div  className="break-words  mb-48  leading-[0.9] w-[90vw] align-baseline flex flex-col z-3">
      <Parallax easing={""} scale={[0.9,1]}  speed={10} className='flex justify-around   sm:justify-normal flex-col sm:flex-none' >
        
          <AnimatedText once={false} classP={'text-MainBeige text-5xl sm:text-[15rem]    font-Lora font-bold'} text="We Create Evocative Brands"/>
       
       
        <div className='w-screen flex justify-end   items-center'>
          <motion.p className='text-MainBeige  indent mb-24 max-w-[35rem] textP  pr-10 leading-normal text-left sm:text-right text-xl overflow-clip opacity-80 font-satoshi-light ' initial={{ opacity: 1 }}
            animate={{ opacity: isInView ? 1 : 1 }}
            transition={{ duration: 0.5 }}
          >
            To take a methodical approach to creating brands, we take into account the brand's target audience, the brand's mission, and the brand's values. We then create a brand that is not only visually appealing but also emotionally appealing. We create brands that are memorable, brands that are evocative, and brands that are timeless.
          </motion.p>
          </div>
        </Parallax>
        <Parallax speed={15} >
        <div className=' flex justify-start w-screen pl-24 items-center'>
          <video src={prologueMontage} className=' aspect-cinematic h-[50vh]  object-cover' autoPlay loop muted />
        </div>
        </Parallax>

       


       

        
      </motion.div>
      
      
    
        </div>

    </section>

    </div>
  );
}

export default Introductory;
