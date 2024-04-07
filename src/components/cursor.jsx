"use client";
import React, { useEffect, useState,useRef,useCallback } from 'react';
import { motion,spring,useSpring,useMotionValue } from 'framer-motion';



function Cursor() {
  const [hovering, setHovering] = useState(null);



  const cursorSize = 30;
  const mouse={
    x:useMotionValue(-100),
    y:useMotionValue(-100)

  }
  const smoothOptions={
    stiffness: 1000,
    damping: 30,
    mass:0.1,
  }
  const smoothMouse={
    x:useSpring(mouse.x,smoothOptions),
    y:useSpring(mouse.y,smoothOptions)
  }
  const manageMoveMouse=useCallback((e)=>{
    const {clientX,clientY}=e;
    mouse.x.set(clientX-cursorSize/2);
    mouse.y.set(clientY-cursorSize/2);
  })


  const cursorRef = useRef(null);


  useEffect(() => {
    
    const handleMouseOver = (e) => {
      const className = e.target.className;
      if (className.includes('textC')) setHovering('text');
      else if (className.includes('buttonC')) setHovering('button');
      else if (className.includes('textP')) setHovering('textP');
      else if (className.includes('footerC')) setHovering('footerC');
      else if (className.includes('enterC')) setHovering('enterC');
      else if (className.includes('imageFloater')) setHovering('imageFloater');
      else setHovering(null);
    };

    document.addEventListener('mousemove', manageMoveMouse);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', manageMoveMouse);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  
  

  const getCursorClass = () => {
    switch (hovering) {
      case 'button':
        return '!opacity-100 !w-0 !h-0 cursor-none !bg-LunarTwilight';
      case 'text':
        return '!opacity-100 !w-1 !h-24 !border-white border-[1px] !border-opacity-30 backdrop-invert !bg-NightFall cursor-none';
      case 'textP':
        return '!opacity-100 !w-1 !h-10 !border-white border-[1px] !border-opacity-30 !bg-NightFall cursor-none';
      case 'enterC':
        return '!opacity-100 transition-all !border-opacity-95 drop-shadow-lg !bg-MainBeige ease-in-out !w-24 !h-24 !border-NightFall border-solid cursor-none';
      case `imageFloater`:
        return `!w-24 !h-24   !animate-pulse-slow`;
        default:
        return '';
    }
  };
 

  const renderArrow = () => {
    if(hovering === 'imageFloater'){
      return(
      <div className='animate-pulse-slow flex transition-opacity duration-500 justify-center w-full h-full items-center'>
          <div className="scale-[100%]">
            <span className='font-satoshi-light text-MainBeige'>Click!</span>
          </div>
        </div>
      );

    }
    if (hovering === 'enterC') {
      return (
        <div className=' back animate-pulse-slow flex transition-opacity duration-500 justify-center w-full h-full items-center'>
          <div className="scale-[100%]">
            <span className='font-satoshi-light text-LunarTwilight'>VIEW</span>
          </div>
        </div>
      );
    }
   
    return null;
  };

  return (
    <motion.div
      id="Cursor"
      ref={cursorRef}

      className={`${getCursorClass()} !opacity-100 transition-cursor hidden sm:block !duration-300 bg-LunarTwilight fixed rounded-full z-50`}
      style={{
        pointerEvents: "none",
        left: smoothMouse.x,
        top: smoothMouse.y,
     
      }}
      

     

      

    >
      {renderArrow()}
    </motion.div>
  );
}

export default Cursor;