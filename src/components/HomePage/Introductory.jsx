import React,{useEffect,useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import AnimatedParagraph from '../paragraphAnimator';
import HomeTextBlock from '../HomeTextBlock';
// import minimalImg from '/introductory2.webp';
import { Parallax } from 'react-scroll-parallax';


function Introductory() {
  const margin = 20;
  const marginExpression = `my-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)}`;

  const scrollRef = useRef(null); // Create a ref for the scrollable element


  return (
    <section 
    ref={scrollRef}
      id="Introductory"
      className={`relative  h-[120vh] z-[4] overflow-clip flex-col   justify-center flex items-center `}
    >
      
      
      <div className="   text-wrap align-baseline  z-10">
        <HomeTextBlock head={"We tell stories to empower visibility!"} body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />

        


        {/* <Parallax translateY={[-50, 50]} speed={-20}>
      <AnimatedParagraph  inputText="We tell stories to empower visibility!" textStyle="text-5xl font-Lora" />
        <AnimatedParagraph  textStyle="text-3xl font-satoshi-light " inputText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        " />
      </Parallax> */}

        </div>

    </section>
  );
}


export default Introductory;
