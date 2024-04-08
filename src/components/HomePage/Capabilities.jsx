import React from "react";
import { animate, inView } from "motion";
import CapabilityCard from "./capabilityCards";
import { Capabilities_Data } from "@/data/Capabilities";
import { useScroll } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useEffect,useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";

function Capabilities() {
  const listClass = "my-4 ml-20 list-item font-Satoshi text-2xl";
  const borderCheck=true;
  const border="border-2 border-black border-solid";
  const container=useRef(null);
  const {scrollYProgress}=useScroll({
    target:container.current,
    offset:["start start","end end"]
  });

  
  
  return (

    <div  ref={container} className={`flex flex-col gap-4 mt-20 w[200vw]  relative ${borderCheck? border: ""} justify-center items-center  w-screen my-[50vh]`}>
      <Parallax easing={"easeOutCirc"} opacity={[0,1]} speed={-3} scale={[0.8,1]}>
      <h1 className="text-8xl font-Lora text-NightFall">Capabilities</h1>
      </Parallax>
     

      <Parallax speed={3} scale={[1,0.8]} easing={"easeInOut"}  >
      {Capabilities_Data.map( (Capabilities, i) => {
          const targetScale=1 - ((Capabilities_Data.length - i) * 0.01);
          return <CapabilityCard title={Capabilities.title} color={Capabilities.color} key={`p_${i}`} i={i} {...Capabilities_Data} progress={scrollYProgress} range={[i * 0.25, 1]} description={Capabilities.description} src={Capabilities.src} targetScale={targetScale}/>
        })}
        </Parallax>
        
    </div>
  
  );
}

export default Capabilities;
