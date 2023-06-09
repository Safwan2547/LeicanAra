import React, { useRef,useState, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
//FIX LOCOMOTIVE SCROLL

function LandingPage() {
  const [isMounted1, setIsMounted1] = useState(false);
 

  useEffect(() => {
   const timer1 = setTimeout(() => setIsMounted1(true), 500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  

 
  

    return (
      //wrapper
      <div data-scroll-section  className="">
    
      <div  className={`transition-opacity ease-elastic duration-1000 ${isMounted1 ? 'opacity-100' : 'opacity-0'}
       sm:ml-0 overflow-x-hidden flex flex-col basis-1  
       lg:flex-wrap justify-center sm:items-center items-start 
       h-screen prose prose-sm lg:prose-xl text-NightFall`}>
      <p className={` h-1/3  w-1/2   top-24  block sm:hidden textC transition duration-200 text-left font-Satoshi text-5xl`}>
            Branding Meets Soul
          </p>
          <p className={`opacity-80 pl-2 font-Lora pt-3  text-lg   sm:hidden w-2/3 `}>
          We are an innovative,independent creative studio based in
          Halifax
          </p>
          <h1 data-scroll  className={`text-NightFall m-5 hidden sm:flex textC absolute  hover:text-LunarTwilight  text-Black transition-text duration-200 text-left font-Satoshi text-9xl font-bold`}>
            Branding Meets Soul
          </h1>
        </div>
        </div>
        
    );
    
  
  }

export default LandingPage;