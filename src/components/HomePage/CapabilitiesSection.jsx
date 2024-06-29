import React from "react";
import { capabilitiesData } from "@/data/Capabilities";
import CapabilityCards from "./CapabilityCards";
import { Parallax } from "react-scroll-parallax";
import Marquee from "react-fast-marquee";

function Capabilities() {
  return (
    <div className="CapabilitiesSection flex flex-col gap-12">
      <Parallax easing={"easeOutCirc"} opacity={[0, 1]} speed={-3} scale={[0.7, 1]} className='w-screen'>

        <Marquee autoFill={true} speed={25} className='text-NightFall  fo font-Lora  text-3xl mb-24  h-[22rem] w-full  sm:text-[16rem]'>&nbsp; Services &nbsp;
        </Marquee>
      </Parallax>
      
      
            {capabilitiesData.map((capability, index) => (
        <CapabilityCards key={index} cardVarient={capability} />
      ))}
    </div>
  );
}

export default Capabilities;
