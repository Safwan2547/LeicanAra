"use client"
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useAnimationControls, cubicBezier, stagger } from 'framer-motion';
import Image from 'next/image';



function AboutCard(props){
    const menuMoon = '/Menu Moon.svg';

    const menuState=props.menuState;
    const controls=useAnimationControls();

    const aboutCardVariants = {
        hidden: { clipPath: 'circle(0% at 50% 100%)', transition: { ease: "circInOut", duration: 0.6 } },
        visible: { clipPath: 'circle(200% at 50% 100%)', transition: { ease: "circInOut", duration: 1 } }
    };
    const floatVarient = {
        childOpen: { y: [0, 10, 0], transition: { repeat: Infinity, duration: 5, ease: "easeInOut" } },
        childOpen: { y: 0, transition: { duration: 1, ease: "circInOut" } }
    }

    const childVarient= (index)=>({
        childClose: {
            clipPath: 'circle(0% at 0% 100%)', y: 100, scale: 0.5, transition: {
                duration: 1,
                delay: 0,
                type: 'spring',   // Using spring type for transition
                stiffness: 100,   // Control of the spring stiffness
                damping: 30,      // Control of the damping - resistance
                mass: 1,          // Mass of the element being animated
            }

        },
        childOpen: {
            clipPath: 'circle(200% at 0% 100%)', y: 0, scale: 1, transition: {
                duration: 1,
                delay: (0.2 * index),
                type: 'spring',   // Using spring type for transition
                stiffness: 100,   // Control of the spring stiffness
                damping: 30,      // Control of the damping - resistance
                mass: 1,          // Mass of the element being animated} 
            },
        },
    })

    

    useEffect(() => {
        if(menuState){
            controls.start(["childOpen"]);

        }
        else if(!menuState){
            controls.start(["childClose"]);
        }
    },[menuState,controls]);

    return (
     
        <motion.div className = "w-full h-full absolute flex flex-col justify-start text-satoshi-light bg-MainBeige text-NightFall items-start p-12  z-14 "
    initial = "hidden"
    animate = { menuState? "visible": "hidden" }
    variants = { aboutCardVariants }

        >
            <div className='w-full h-[75px]flex justify-center items-center'>
            <motion.div animate={controls} variants={childVarient(2)} className='  flex flex-col justify-center items-center top-0 '>
                <motion.div animate={controls} variants={floatVarient} >
                    <Image className=' text-LunarTwilight' src={menuMoon} alt="Menu Star"  width={50} height={50} />

                </motion.div>
                {/* <h1 className='text-sm opacity-50 text-MainBeige mt-8 font-satoshi-light'>Strings</h1> */}

            </motion.div >
            </div>
        <motion.div initial={"childClose"} animate={controls} variants={childVarient(1)} className='flex flex-col mt-12 text-start justify-start  w-1/2'>
            <h1 className='text-6xl'>About</h1>
        </motion.div>
            <motion.div initial={"childClose"} animate={controls} variants={childVarient(1)} className=' mt-4 w-2/3 text-start '>
                <h2 className='text-2xl  pl-4 leading-normal'>LeicanAra is a design studio that stands out for its innovative approach to eradicating market invisibility for ambitious businesses. </h2>
                 </motion.div>

            <motion.div initial={"childClose"} animate={controls} variants={childVarient(0)} className=' mt-8 w-2/3 text-start '>
                <h2 className='text-6xl leading-normal'> Capabilities </h2>
            </motion.div>

            <motion.div initial={"childClose"} animate={controls} variants={childVarient(0)} className='  w-2/3 text-start '>
                <ul className='text-2xl pl-10 list-disc gap-4'>
                    <li className='mt-2'>Branding</li>
                    <li className='mt-2'>Graphic Design</li>
                    <li className='mt-2'> Brand Management</li>
                    <li className='mt-2'>Ui/Ux</li>
                    <li className='mt-2'>Web Design</li>


                </ul>
            </motion.div>
        </motion.div >
    )



}

export default AboutCard;