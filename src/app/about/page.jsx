import React from 'react';
import Head from 'next/head';
import Marquee from 'react-fast-marquee';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
    <h1 className='text-9xl z-[4] m-24 text-LunarDawn capitalize font-satoshi-light'><span className='text-5xl'>About</span><br/> UNDER <br/> CONSTRUCTION</h1>
    <Marquee autoFill={true} speed={10} className={`p-5  rotate-45 bg-yellow-500   text-LunarDawn opacity-90  duration-1000
        transition-all z-[1] font-satoshi-light  text-3xl sm:text-3xl `}> *Loud Construction Noises* &nbsp; &nbsp;</Marquee>

        
      
    </div>
  );
};

export default About;
