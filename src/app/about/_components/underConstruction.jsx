import React from 'react';
import {ParallaxProvider,Parallax} from 'react-scroll-parallax';
import Marquee from 'react-fast-marquee';

const Construction = (PageName) => {
    

    return (
        <ParallaxProvider>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
                <h1 className='text-9xl z-[4] m-24 text-LunarDawn capitalize font-satoshi-light'><span className='text-5xl'>Page</span><br /> UNDER <br /> CONSTRUCTION</h1>
                <Parallax speed={10} >
                    <Marquee autoFill={true} speed={10} className={`p-5  rotate-45 bg-yellow-500   text-LunarDawn opacity-90  duration-1000
        transition-all z-[1] font-satoshi-light  text-3xl sm:text-3xl `}> * Loud Construction Noises * &nbsp; &nbsp;</Marquee>
                </Parallax>


            </div>
        </ParallaxProvider>
    );
};

export default Construction;