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
      <motion.div ref={scrollRef} className="break-words  m-10  leading-[0.9] w-[70vw] align-baseline flex flex-col z-10">
      <Parallax easing={""} scale={[0.9,1]}  speed={10} className='' >
        <motion.h1 className='text-NightFall  text-[12rem] font-satoshi-light' initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            
            >
          Prologue
        </motion.h1>
        </Parallax>
       

        
      </motion.div>

      <div className='w-full border-2 p-12 border-black h-full  flex justify-between '>
        <Parallax easing={""} speed={-10} className='w-1/3'>
          <motion.p className='text-NightFall  indent mt-12 pl-4 leading-normal text-3xl overflow-clip opacity-80 font-satoshi-light f' initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            LeicanAra is a design studio that stands out for its innovative approach to eradicating market invisibility for ambitious businesses. Specializing in crafting unique brand identities, LeicanAra ensures that each brand not only encapsulates its essence but also resonates deeply with its target audience, making it memorable in a crowded marketplace.
          </motion.p>
        </Parallax>
        <div className=' flex h-1/2  w-2/4 '>
          <ParallaxBanner
            layers={[{ image: '/Magazine.webp', translateX: [0, 10], scale: [0.8, 1], speed: -5 }]}
            className=" aspect-[1/2] mt-24"
          />
          <ParallaxBanner
            layers={[{ image: '/Container-Mockup.webp',  translateX: [10, 0], scale: [0.8, 1], speed: -5 }]}
            className=" aspect-[1/2] mt-12"
          />
      <ParallaxBanner
      layers={[{ image: '/CapabilityCard1.webp',translateX:[0,10], scale:[0.8,1], speed: -5 }]}
      className=" aspect-[1/2]"
    /></div>
    </div>

    </section>
  );
}

export default Introductory;
