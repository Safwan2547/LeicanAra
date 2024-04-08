import React,{use, useEffect,useRef} from 'react';
import { motion, useAnimation, useInView,useScroll,useMotionValueEvent } from 'framer-motion';
import AnimatedParagraph from '../paragraphAnimator';
// import minimalImg from '/introductory2.webp';
import { Parallax } from 'react-scroll-parallax';


function Introductory() {
  const margin = 20;
  const marginExpression = `my-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)}`;

  const scrollRef = useRef(null); // Create a ref for the scrollable element
  useEffect(() => {})
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["end end", "center center"]

  })



 
  return (
    <section 
    
      id="Introductory" href='#introductory'
      className={`relative  h-[100vh] z-[4] overflow-clip flex-col   justify-center flex items-center `}
    >
      {/* <div className="  w-full flex flex-col items-center justify-center  sm:p-0"> */}
        {/* <img src={minimalImg} alt="Minimalistic image" className="w-[32rem] aspect-video object-cover z-0" /> */}
        
        
      {/* </div> */}

      {/* <Parallax easing={"easeInOutCirc"}  scale={[0,2]}  className='h-full flex justify-center items-center absolute w-full bg-NightFall'>
      </Parallax> */}
      
      <motion.div ref={scrollRef} className="   text-wrap align-baseline  z-10">
        <motion.h1 className='text-NightFall text-7xl font-satoshi-light' style={{ opacity: scrollYProgress }} >We tell stories to empower visibility!</motion.h1>
      {/* <AnimatedParagraph   style={{ opacity: scrollYProgress }} inputText="We tell stories to empower visibility!" textStyle="text-5xl font-Lora" />
        <AnimatedParagraph  textStyle="text-3xl font-satoshi-light " inputText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        " /> */}
      

        </motion.div>
        

    </section>
  );
}


export default Introductory;
