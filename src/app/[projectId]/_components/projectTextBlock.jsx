/**
 * Functional component representing a project text block for the project page.
 * 
 * @param {string} props.sectionName - The name of the section.
 * @param {string} props.sectionHead - The heading of the section.
 * @param {string} props.sectionDescription - The description of the section.
 */

import React, { useState, useEffect, useRef } from 'react';
import {motion,animate,useAnimation,useInView} from 'framer-motion';

    
    



function ProjectTextBlock({ sectionName, sectionHead, sectionDescription }) {

    const ref=useRef(null);
    const isInView = useInView(ref)

    const mainHeaderAnimation = useAnimation();
    const descriptionAnimation = useAnimation();


    useEffect(() => {
        if (isInView) {
            mainHeaderAnimation.start({ clipPath: ["circle(0% at 0% 0)","circle(150% at 0% 0)"] ,scale: [1.3,1], transition: { duration: 1.5, ease: "anticipate" } });
            descriptionAnimation.start({ clipPath: ["circle(0% at 0% 0)","circle(150% at 0% 0)"], scale: [1.3,1], transition: { duration:1.5,delay:0.5, ease: "circInOut" } });
        } 
        else{
            mainHeaderAnimation.start({ clipPath: ["circle(0% at 0% 0)"] ,scale: [1.3], transition: { duration: 0.1, ease: "anticipate" } });
            descriptionAnimation.start({ clipPath: ["circle(0% at 0% 0)"], scale: [1.3], transition: { duration:0.1,delay:0.5, ease: "circInOut" } });
      
        }
    }, [isInView, descriptionAnimation, mainHeaderAnimation]);



    return (
        <div id='textBlock'   className={`sm:p-0 flex justify-start h-[70vh] items-start flex-col w-3/4`}>
            <p  className='text-sm sm:text-2xl mb-4 animateOnEntry textP opacity-30 font-satoshi-light'>{sectionName}:</p>
            <div ref={ref} className='flex justify-between items-center h-[100%] flex-row'>
                <motion.h1 animate={mainHeaderAnimation}  id={`${sectionName}Head`} className={`text-3xl textC font-light items-start h-full text-pretty max-w-[35rem] line sm:text-6xl font-Lora`} style={{ lineHeight: '1.2' }}>{sectionHead}</motion.h1>
                <motion.p animate={descriptionAnimation} id={`${sectionName}Description`} className={`font-satoshi-light animateOnEntry textP text-pretty hyphens-auto max-w-[25em] opacity-80 text-sm sm:text-2xl`}>{sectionDescription}</motion.p>
            </div>
        </div>
    );
}

export default ProjectTextBlock;
