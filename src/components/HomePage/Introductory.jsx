import React, { useRef } from 'react';
import { motion, useScroll,useInView } from 'framer-motion';
import { Parallax,ParallaxBanner } from 'react-scroll-parallax';
import Image from 'next/image';
import AnimatedText from '../animatedText';
import GradientBackground from '../gradientBg';

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
    id="Introductory" className="relative bg-NightFall z-4 overflow-clip flex flex-col  items-start">
      
        <GradientBackground blobCount={3} style={{ zIndex: 1 }} className={`w-screen h-screen absolute `} colors={[['#242424', '#141414'], ['#141414', '#242424']]} bg='#141414' />
        <div className='z-[2] flex flex-col justify-center  mt-24 items-start'>
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
      
      <div className='w-full  p-12  firstChild flex justify-center items-center relative'>
        <div className='flex  flex-col'>
        <motion.h1 className='text-MainBeige   text-3xl font-satoshi-light' initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 1 }}
          transition={{ duration: 1 }}

        >
          The mission:
        </motion.h1>
          <h1 className=' textC font-Lora self-center text-[10rem] max-h-[160vh]    leading-[14rem] text-MainBeige max-w-[35rem] ' ><span className='text-6xl'> To get</span> eyes <span className='text-6xl'>on your </span>  brand.</h1>

        </div>
        
        <div className=' flex flex-col justify-center items-center h-2/3 gap-12 max-h-[150vh]  w-[80%] '>
          <ParallaxBanner
            layers={[{ image: '/LeicanAra-eyes1.jpg', translateX: [0, 10], scale: [0.9, 1], speed: -5 }]}
            className=" aspect-[3/1] mt-12"
          />
          <ParallaxBanner
            layers={[{ image: '/leicanAra-eyes2.jpg',  translateX: [0, 10], scale: [0.9, 1], speed: -10 }]}
            className=" aspect-[3/1] -scale-x-100 mt-12 "
          />
          <ParallaxBanner
          layers={[{ image: '/LeicanAra-eyes3.jpg',translateX:[0,10], scale:[0.9,1], speed: -15 }]}
            className=" aspect-[3/1] mt-12"
          />
    </div>
    </div>
        </div>
    </section>

    </div>
  );
}

export default Introductory;
