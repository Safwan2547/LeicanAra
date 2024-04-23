import React, { useEffect, useRef } from 'react';
import { motion, useScroll,useInView } from 'framer-motion';
import { Parallax,ParallaxBanner } from 'react-scroll-parallax';
import Image from 'next/image';
// Ensure all used components and hooks are correctly imported

function Introductory() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["end end", "center center"], // Adjusted for clarity, ensure this matches your intended effect
  });

  const isInView = useInView(scrollRef,
    {
      amount: 0.9,
      once: true,
    });

  const prologueMontage ='./Prologue Montage 1.mov';



    


  return (
    <section id="Introductory" className="relative bg-NightFall z-4 overflow-clip flex flex-col py-48 mt-24 items-start">
      <motion.div ref={scrollRef} className="break-words  mb-48  leading-[0.9] w-[70vw] align-baseline flex flex-col z-3">
      <Parallax easing={""} scale={[0.9,1]}  speed={10} className='' >
        <motion.h1 className='text-MainBeige  text-[12rem] font-satoshi-light' initial={{ opacity: 1 }}
            animate={{ opacity: isInView ? 1 : 1 }}
            transition={{ duration: 1 }}
            
            >
          Prologue
        </motion.h1>
        
          <motion.p className='text-MainBeige  indent my-24  pl-4 leading-normal text-3xl overflow-clip opacity-80 font-satoshi-light ' initial={{ opacity: 1 }}
            animate={{ opacity: isInView ? 1 : 1 }}
            transition={{ duration: 0.5 }}
          >
            LeicanAra is a design studio that stands out for its innovative approach to eradicating market invisibility for ambitious businesses. Specializing in crafting unique brand identities, LeicanAra ensures that each brand not only encapsulates its essence but also resonates deeply with its target audience, making it memorable in a crowded marketplace.
          </motion.p>
        </Parallax>
        <Parallax speed={15} >
        <div className=' flex justify-end w-screen pr-24 items-center'>
          <video src={prologueMontage} className=' aspect-cinematic h-[50vh]  object-cover' autoPlay loop muted />
        </div>
        </Parallax>

       


       

        
      </motion.div>
      
      <div className='w-full  p-12  firstChild flex justify-center items-start relative'>
        <div className='flex flex-col'>
        <motion.h1 className='text-MainBeige  text-3xl font-satoshi-light' initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1 }}

        >
          The plot:
        </motion.h1>
          <h1 className=' textC font-satoshi-light self-center text-[10rem] max-h-[160vh]  leading-[14rem] text-MainBeige max-w-[45rem] ' > To get eyes on your brand.</h1>

        </div>
        
        <div className=' flex flex-col justify-center items-center h-2/3 gap-12 max-h-[150vh]  w-[80%] '>
          <ParallaxBanner
            layers={[{ image: '/LeicanAra-eyes1.jpg', translateX: [0, 10], scale: [0.9, 1], speed: -5 }]}
            className=" aspect-[3/1] mt-12"
          />
          <ParallaxBanner
            layers={[{ image: '/leicanAra-eyes2.jpg',  translateX: [10, 0], scale: [0.9, 1], speed: -5 }]}
            className=" aspect-[3/1] "
          />
          <ParallaxBanner
          layers={[{ image: '/LeicanAra-eyes3.jpg',translateX:[0,10], scale:[0.9,1], speed: -5 }]}
            className=" aspect-[3/1] mt-12"
          />
    </div>
    </div>

    </section>
  );
}

export default Introductory;
