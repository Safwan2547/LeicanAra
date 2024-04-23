"use client"
import React, { useEffect,useState } from 'react';
import { motion, useAnimation, useAnimationControls,cubicBezier,stagger } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation'; // Corrected import for Next.js useRouter hook
import TransitionLink from './TransitionLink';
import Marquee from 'react-fast-marquee'

import Image from 'next/image';
import duration from 'tailwindcss-animated/src/utilities/duration';
import  Link from 'next/link';
import {useLenis} from '@studio-freight/react-lenis';
import AboutCard from './aboutCard';

const SubNavBar = (props) => {
    // Add your social media links here
    const visible=props.visible;
    
    const socialMediaLinks = [
        { name: 'Instagram', url: '#' },
        { name: 'Behance', url: '#' },
        // Add more social media links as needed
    ];
    useEffect(() => {
        console.log(visible)

    },[visible])





    return (
        <div className={`menu-item subnav-bar flex  ${visible?"opacity-100":"opacity-0" } transition-opacity duration-1000 absolute bottom-14 z-[1] justify-center gap-8`}>
            {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} className="subnav-link text-MainBeige buttonC font-satoshi-light hover:scale-110 duration-500 cursor-pointer hover:animate-pulse  text-lg transition-all">{link.name}</a>
            ))}
        </div>
    );
};


const NavMenu = ({ navOpen, toggleNav,menuState,setMenuState }) => {
    const menuStarImg = '/Menu Star.svg';
    const menuMoonImg = '/Menu Moon.svg';
    const location = usePathname();
    const isAboutPage = location === "/about";
    const isFAQPage = location === "/faq";
    const isContactPage = location === "/contact";
    const controls = useAnimationControls();
    const customEase = cubicBezier(.08, .91, .45, 1);
    const lenis =useLenis();

    const menuItems=[
        {label:'Who we are',url:'/about',name:'Info'},
        {label:'What we have been working on!',url:'/projects',name:'Projects'},
        {label:'Say Hi!',url:'/contact',name:'Contact'},
    ]

    const navVariants = {
        overlayOpen: { x: "0%", transition: { duration: 0.8, ease: customEase}},
        overlayClose: { x: "100%", transition: { duration: 0.8, ease: "circInOut"} },
        
    };
    const overLayVariants = {
        initiateOverlay: { opacity: 0.2, transition: { delay: 1, duration: 2, ease: "linear" } },
        closeOverlay: { opacity: 0, transition: { delay: 1, duration: 2, ease: "easeInOut" } }
      }

    const aboutCardVariants = {
        hidden: { clipPath: 'circle(0% at 50% 100%)', transition: { ease: "circInOut", duration: 0.6 } },
        visible: { clipPath: 'circle(200% at 50% 100%)', transition: { ease:"circInOut", duration: 1 } }
    };



    // State to control the visibility of the about card
    const childVarients = (index) =>({
        overlayOpen: {
            clipPath: 'circle(200.0% at 100% 50%)', x: 0,scale:1, transition: {
                duration:1,
                 delay: (0.2 * index)+0.1 ,
                type: 'spring',   // Using spring type for transition
                stiffness: 100,   // Control of the spring stiffness
                damping: 30,      // Control of the damping - resistance
                mass: 1,          // Mass of the element being animated} 
            },},
        overlayClose: {
            clipPath: 'circle(0% at 100% 50%)', x: 100, scale: 0.5, transition: {
                duration: 1,
                delay: 0,
                type: 'spring',   // Using spring type for transition
                stiffness: 100,   // Control of the spring stiffness
                damping: 30,      // Control of the damping - resistance
                mass: 1,          // Mass of the element being animated} 
             } },
        
        childClose:{
            clipPath: 'circle(0% at 50% 100%)', y: -100, scale: 0.5, transition: {
                duration: 1,
                delay: 0,
                type: 'spring',   // Using spring type for transition
                stiffness: 100,   // Control of the spring stiffness
                damping: 30,      // Control of the damping - resistance
                mass: 1,          // Mass of the element being animated
            } 

        },
        childOpen: {
            clipPath: 'circle(200.0% at 50% 100%)', y: 0, scale: 1, transition: {
                duration: 1,
                delay: (0.2 * index) + 0.1,
                type: 'spring',   // Using spring type for transition
                stiffness: 100,   // Control of the spring stiffness
                damping: 30,      // Control of the damping - resistance
                mass: 1,          // Mass of the element being animated} 
            },
        },
    });

    const floatVarient ={
        overlayOpen: { y: [0, 5,0], transition: { repeat: Infinity, duration: 5, ease: "easeInOut" } },
        overlayClose: { y: 0, transition: { duration: 1, ease: "circInOut" }}
    }
    const handleMenuItemClick = (item) => {
        if (item.url === '/about') {
            // Prevent default link behavior
            setMenuState(prev => !prev);
            console.log("clicked! "+menuState)
        }
        if(item.url === '/projects'){
            // Assuming vertical scrolling, calculate the target position
            const targetY = window.innerHeight;
            lenis.scrollTo(targetY, {
                duration: 1.5// Duration of the scroll animation in seconds
            });


        }
        
        else {
           
        }
    };

    useEffect(() => {
    
    if (navOpen) {
        controls.start(["overlayOpen"])
        controls.start(["childOpen"])


    } else {
        controls.start(["overlayClose"]);
                    setMenuState(false); // Automatically close the About card when the nav closes



    }
    if(menuState){
        controls.start(["childClose"])


    }
    else if(!menuState){
        controls.start(["childOpen"])
    }
}, [navOpen, controls,menuState]);

    return (
        <motion.div initial={{x:"100%"}}
        animate={controls} variants={navVariants} className={`overflow-hidden z-[13] overlay no-scrollbar::-webkit-scrollbar  text-center top-0 left-0 w-screen h-screen fixed  `}>
            <motion.div className=' font-satoshi-light '>

              

                <div  data-speed="3" className='overlay-menu fixed overflow-hidden   w-[36rem] rounded-l-[1.5rem]  h-[90vh] right-0 top-[5%] flex flex-col   justify-center items-center font-satoshi-light text-6xl  text-MainBeige'>
                   <div className={`h-full w-full backdrop-blur-md absolute  bg-LunarDawn transition-colors duration-700 bg-opacity-80`}></div>
                   
                    <motion.div  animate={controls} variants={childVarients(0)}  className='absolute flex flex-col justify-center items-center top-0 mt-12'>
                        <motion.div animate={controls} variants={floatVarient} > 
                            <Image src={menuStarImg} alt="Menu Star" width={50} height={50} />

                        </motion.div>
                        {/* <h1 className='text-sm opacity-50 text-MainBeige mt-8 font-satoshi-light'>Strings</h1> */}

                    </motion.div >
                  <AboutCard menuState={menuState}  />
                    
                    <motion.div className='flex buttonC flex-col gap-24 '>
                        {menuItems.map((item, index) => (
                            <motion.div key={index} animate={controls} variants={childVarients(index)} className="menu-item" onClick={() => handleMenuItemClick(item)}>
                                <p className='font-satoshi-light text-sm p-2 opacity-20'>{item.label}</p>
                                
                                    <div className={`${location === item.url ? 'opacity-20' : 'opacity-100'} buttonC transform ease-in-out transition-button duration-700 hover:scale-110 w-[20rem] scale-[90%] hidden lg:block buttonC font-Lora cursor-pointer`}>
                                    <Marquee speed={15} className='border-x border-x-white border-opacity-[0.4]'>{item.name}</Marquee>
                                    </div>
                                
                            </motion.div>
                        ))}
                    </motion.div>
                   
                   
                    <SubNavBar visible={!menuState} />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NavMenu;