"use client";
import React from 'react';
import Image from 'next/image';
import { useLenis } from '@studio-freight/react-lenis';





import Marquee from 'react-fast-marquee';
function Footer() {
  const lenis = useLenis();

  const handleClick = () => {
    // Assuming vertical scrolling, calculate the target position
    lenis.scrollTo(0, {
      duration: 3.5 // Duration of the scroll animation in seconds
    });
  };
  
  return (
    <div className=' max-h-screen h-screen '>
    
      <footer className="relative  overflow-hidden  flex flex-col justify-center items-center h-full   bg-[#121b21] text-nightfall ">
        <div id='top' className='grid  relative  grid-rows-1 grid-cols-3  h-full mt-12  w-full'>
    <div id='box1' className='w-full justify-center items-center flex h-full'>


            {/* Footer icons */}
            <div className="  flex justify-center   flex-col sm:flex-col items-center space-y-4 sm:space-y-8">
              <div className='flex flex-col justify-center items-center space-y-4'>
                <h4 className='font-satoshi-light text-MainBeige opacity-75 text-xl'>Instagram</h4>
              <a className="cursor-none z-[2]  hover:scale-[120%] transition-all duration-500 " target="_blank" href='https://instagram.com/leicanara?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr'>
                <svg className="" id="Layer_1" width="48" height="48" fill="#ffffff" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.33 533.33">
                  <path className='' class="cls-1" d="m266.67,0c-72.42,0-81.5.31-109.95,1.6-28.38,1.29-47.77,5.8-64.73,12.39-17.54,6.81-32.41,15.93-47.23,30.76-14.83,14.82-23.94,29.7-30.76,47.23-6.59,16.96-11.1,36.35-12.4,64.73-1.3,28.44-1.6,37.52-1.6,109.95s.31,81.5,1.6,109.95c1.3,28.38,5.8,47.77,12.4,64.73,6.81,17.54,15.93,32.41,30.76,47.23,14.83,14.82,29.7,23.94,47.23,30.76,16.96,6.59,36.35,11.1,64.73,12.39,28.44,1.3,37.52,1.6,109.95,1.6s81.5-.31,109.95-1.6c28.38-1.29,47.77-5.8,64.73-12.39,17.54-6.81,32.41-15.93,47.23-30.76,14.82-14.83,23.94-29.7,30.76-47.23,6.59-16.96,11.1-36.35,12.39-64.73,1.3-28.44,1.6-37.52,1.6-109.95s-.31-81.5-1.6-109.95c-1.29-28.38-5.8-47.77-12.39-64.73-6.81-17.54-15.93-32.41-30.76-47.23-14.83-14.82-29.7-23.94-47.23-30.76-16.96-6.59-36.35-11.1-64.73-12.39-28.44-1.3-37.52-1.6-109.95-1.6Zm0,48.05c71.2,0,79.64.27,107.76,1.56,26,1.19,40.12,5.53,49.52,9.18,12.45,4.84,21.33,10.62,30.66,19.95,9.33,9.33,15.11,18.22,19.95,30.66,3.65,9.4,8,23.52,9.18,49.52,1.28,28.12,1.56,36.55,1.56,107.76s-.27,79.64-1.56,107.76c-1.19,26-5.53,40.12-9.18,49.52-4.84,12.45-10.62,21.33-19.95,30.66-9.33,9.33-18.21,15.11-30.66,19.95-9.4,3.65-23.52,8-49.52,9.18-28.11,1.28-36.55,1.56-107.76,1.56s-79.64-.27-107.76-1.56c-26-1.18-40.12-5.53-49.52-9.18-12.45-4.84-21.33-10.62-30.66-19.95-9.33-9.33-15.11-18.21-19.95-30.66-3.65-9.4-8-23.52-9.18-49.52-1.28-28.12-1.56-36.55-1.56-107.76s.27-79.64,1.56-107.76c1.19-26,5.53-40.12,9.18-49.52,4.84-12.45,10.62-21.33,19.95-30.66,9.33-9.33,18.22-15.11,30.66-19.95,9.4-3.65,23.52-8,49.52-9.18,28.12-1.28,36.55-1.56,107.76-1.56" />
                  <path className='' class="cls-1" d="m266.67,355.56c-49.09,0-88.89-39.8-88.89-88.89s39.8-88.89,88.89-88.89,88.89,39.8,88.89,88.89-39.8,88.89-88.89,88.89Zm0-225.83c-75.63,0-136.94,61.31-136.94,136.94s61.31,136.94,136.94,136.94,136.94-61.31,136.94-136.94-61.31-136.94-136.94-136.94m174.35-5.41c0,17.67-14.33,32-32,32s-32-14.33-32-32,14.33-32,32-32,32,14.33,32,32" />
                </svg>

              </a>
              </div>
              <div className='flex flex-col justify-center items-center space-y-4'>
                <h4 className='font-satoshi-light text-MainBeige text-xl opacity-75'>Behance</h4>
              <a className="z-[2] hover:scale-125 transition-all cursor-none duration-500" href="https://www.behance.net/gallery/177745281/LeicanAra-A-Journey-Beyond-Design/modules/1003956415" target="_blank" >
                <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' width="48" height="48" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 
          0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 
          2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444
           2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 
           2.868-3.016.05-3.016z"/></svg>
              </a>
              </div>
            </div>

    </div>
      <div id='box2' className=' w-full  flex  justify-center items-center '>
            <div className='flex justify-center w-full h-full  absolute    object-contain items-center'>
              <img src="/LeicanAra Project/VectorBraidedStar.svg" alt="Braided Star" className='  h-[300rem]  mx-auto'/> 
            </div>
        </div>
      
      <div id='box3' className="container mx-auto flex  justify-center  items-center">
      
       
       
            <button onClick={handleClick} className='w-36 z-[2] buttonC cursor-none rounded-full h-12 hover:scale-125  transition-all duration-700 bg-MainBeige'>
              <h5 className='font-satoshi-light text-xl text-[#121b21]'>Back to top</h5>
     </button>
      </div>
      
     
      
    
  
        </div>
      <div id='bottom' className='flex justify-center items-center  mb-4  flex-col' >
          <div className='flex bg-[#121b21] text-white justify-center'>
            <h1 className=' font-satoshi-light  opacity-[75%] text-xl'>Words that define us</h1>
          </div>
      <Marquee autoFill={true} speed={25} className={`pb-4  bg-[#121b21]  text-MainBeige  duration-1000
        transition-all font-satoshi-light  text-5xl sm:text-9xl `}> Visionary | Soul | Storytelling | Visibility | Timeless | Human | Forward | Ambition | Heritage | Inspire | Evoke | Elevate | Scuplt | Minimal |&nbsp;</Marquee>
      
      <div className='text-MainBeige p-4 sm:text-center sm:text-sm  bg-[#121b21] items-center justify-center text-center sm:flex'>
        <p className='w-2/3 textP opacity-[75%] sm:w-full' >Designed and Developed by LeicanAra <br />All Rights Reserved</p>
      </div>
        </div>
      </footer>
      </div>
  );
}

export default Footer;
