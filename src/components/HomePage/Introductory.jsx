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


  return (
    <section id="Introductory" className="relative h-[150vh] z-4 overflow-clip flex flex-col mt-24 items-start">
      <motion.div ref={scrollRef} className="break-words  m-10  leading-[0.9] w-[70vw] align-baseline z-10">
      <Parallax easing={"easeInOutCirc"} scale={[0.98,1]}  speed={1} >
        <motion.h1 className='text-NightFall  text-[12rem] overflow-clip font-satoshi-light' initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            
            >
          Introduction
        </motion.h1>
        </Parallax>
        <Parallax easing={"easeInOutCirc"} speed={4} >
        <motion.p className='text-NightFall indent mt-12 pl-4 leading-normal text-3xl overflow-clip opacity-80 font-satoshi-light f' initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            >
        LeicanAra is a design studio that stands out for its innovative approach to eradicating market invisibility for ambitious businesses. Specializing in crafting unique brand identities, LeicanAra ensures that each brand not only encapsulates its essence but also resonates deeply with its target audience, making it memorable in a crowded marketplace.        
        </motion.p>
        </Parallax>

        
      </motion.div>

      <div className='w-full  flex justify-end '>
        <div className='w-1/2 mr-10'>
      <ParallaxBanner
      layers={[{ image: '/CapabilityCard1.webp',translateX:[0,10], scale:[0.8,1], speed: -10 }]}
      className=" aspect-[2/1]"
    /></div>
    </div>

    </section>
  );
}

export default Introductory;
