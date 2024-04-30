import React, { useEffect,useRef,useState } from "react";
import {animate,motion, useInView,useAnimation } from "framer-motion";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import AnimatedText from "../animatedText";

function CallToAction() {

  const containerRef = useRef(null);
  const [hover, setHover] = useState(false);

  const buttonicons = ["/CTA Button Icons-01.png", "/CTA Button Icons-02.png","/CTA Button Icons-03.png"]
  const inView=useInView({

    triggerOnce:true,

  });
 
  const buttonVariants = {
    hoverIcon: {
       // Enlarge the button
      y:20,
      scale: 1.1,
      
      transition: {
        duration: 0.3, // Duration of the animation
        type: "spring", // Animation type for a smooth effect
        stiffness: 300, // Stiffness of the spring animation
      },
    },
    normal: {
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3, // Duration of the animation
        type: "spring", // Animation type for a smooth effect
        stiffness: 300, // Stiffness of the spring animation
      },
    },
  };
  const iconVariants = {
    normal: {
      scale: 0.5,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      }
    },
    hoverIcon: {
      scale: 1,
      y: -40,
      transition: {
        type: "spring",
        stiffness: 300,
      }
    },
  };

  return (
    <div className="border-black  border-0 border-solid flex justify-center items-center h-[120vh] w-[100%]">
      <div id="cta" className="pt-10  text-NightFall w-[95%] flex flex-wrap flex-col items-center sm:items-center justify-center align-top">
       
        <h1 className="text-4xl sm:text-8xl textC font-Lora  max-w-[75%] leading-loose opacity-1 text-NightFall z-[2] text-center">
          Ready to turn your ideas into art?
        </h1>
        <Parallax speed={-15} >
        <Image src="/ArrowIconCTA.png" className="m-12" alt="Call to Action" width={200} height={200} />
        </Parallax>
        <motion.div onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
  id="Container" whileHover="hoverIcon"   className=" flex justify-center items-center group   h-36 relative">
          <a href="mailto:hello@leicanara.com" className="w-full absolute z-[4]  cursor-none buttonC  h-full"></a>
          <div className="bg-[#121b21]  rounded-full h-20 flex justify-center  flex-row items-center  w-96" >
            <motion.div className="flex gap-24 justify-center items-center" id="icons">
              {buttonicons.map((icon, index) => (
                <motion.div key={index} variants={iconVariants} animate={hover ? "hoverIcon" : "normal"} initial="normal" >
                  <Image src={icon} quality={100} width={100} height={100} alt="Button Icon" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        <motion.div  
            
            variants={buttonVariants}
            animate={hover ? "hoverIcon" : "normal"} // Trigger hover animation
            id="button" className="p-4 opacity rounded-full buttonC group flex justify-center items-center h-20 absolute w-96  transition-colors  duration-500 bg-LunarDawn">
            <h1 className=" buttonC   transition-all duration-500 cursor-none font-satoshi-light underline-offset-4 text-MainBeige  text-left text-3xl sm:text-4xl">
          Begin the Journey
        </h1>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default CallToAction;
