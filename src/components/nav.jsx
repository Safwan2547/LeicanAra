"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // Corrected to 'next/router' for useRouter hook
import { motion, useAnimationControls } from 'framer-motion';

import "../app/globals.css";
import NavMenu from './NavMenu';
import TransitionLink from './TransitionLink';
import duration from 'tailwindcss-animated/src/utilities/duration';
import { useLoader } from './loadStateContext';
import { useDeviceType } from './deviceProvider';

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const router = useRouter();
    const [animating, setAnimating] = useState(false);
    const [menuState,setMenuState]=useState(false);
    const controls = useAnimationControls();
    const {loadState,setLoadState} = useLoader();
    const deviceType = useDeviceType();

    // Animation controls for navbar
    const navbarAnimation = {
        initialNav: { opacity: 0 },
        showNav: {
            opacity: 1,
            transition: { delay: 1 } // 1 second delay
        }
    };
    const buttonAnimation = {
        hidden: {
            y: 0,
            height:"4rem", 
            backgroundColor: "#efece3",
            opacity:0,
            transition: { ease: "anticipate",duration: 1,
                backgroundColor: { duration: 0.5, ease: "easeInOut" },
                opacity:{delay:2}

            
        
        } 
 },
        visible: {
            y:-85,
            height:"2.5rem",
            backgroundColor: "#21323e",
              opacity:1,
            transition: { ease: "circInOut",  duration: 1,
                height: { duration: 0.7, ease: "anticipate" },
                backgroundColor: { duration: 0.5, ease: "easeInOut" }
            } 
        }
    };
    const toggleNav = (mod) => {
        if (!animating || mod === false) {
            if (mod === true) {
                setNavOpen(!navOpen);
            } else {
                setNavOpen(false);
            }
            setAnimating(true);
            setTimeout(() => setAnimating(false), 1000
            );

        }

    };

    const handleMenuStateClick=()=>{

        if(menuState){
            setMenuState(false);
            controls.start(["visible"]);
        }
        else if(!menuState){
            controls.start(["hidden"]);


        }
    }

    useEffect(() => {
        if(menuState){
            controls.start(["visible"]);
        }
        else if(!menuState){
            controls.start(["hidden"]);

        }},[menuState]);

    useEffect(() => {
        if (!loadState) {  // When loadState is false, trigger the animation
            controls.start("showNav");
        } 
        console.log("loadState at Nav" + loadState);
    }, [loadState, controls]);

    

    const getNavbarTitle = () => {
        switch (usePathname()) {
            case '/starfall':
                return ' x Starfall';
            case '/svava':
                return ' x Sväva';
            default:
                return '';
        }
    };

    return (
        <motion.nav
            initial="initialNav"
            animate={controls}  
            variants={navbarAnimation}
            className=" appearance-none  transition-color  ease-expo  justify-center fixed  w-screen mt-8 flex  sm:top-8 sm:mr-5  z-[3]"
        >
            <div onClick={() => toggleNav(false)} className='z-[24]'>
                <Link href="/" passHref className={`${navOpen ? "text-NightFall" : "text-NightFall"} opacity-90 navItem antialiased transform transition-button duration-500 hover:scale-110 hover:text-LunarTwilight hover:animate-pulse-slow buttonC font-satoshi-light text-4xl sm:text-4xl ease-in-out cursor-none z-24`}>
                    LeicanAra
                </Link>
                <span className={`textP text-3xl font-satoshi-light ${navOpen ? "text-MainBeige" : "text-NightFall"} transition-all duration-500`}>
                    {getNavbarTitle()}
                </span>
            </div>
            <div id='buttonHolder' className=' fixed z-[24] sm:mr-8 flex flex-col justify-center items-center sm:right-0 bottom-10 sm:bottom-0  sm:h-screen  w-screen sm:w-12  ' >
            <button className={` scale-90  hover:bg-opacity-100 z-[25] hover:backdrop-blur-none  h-12 w-24 group ${navOpen && !menuState ? "bg-MainBeige " : "bg-LunarDawn"} ${!menuState && !navOpen? "bg-opacity-70 backdrop-blur-sm":"bg-opacity-100 backdrop-blur-0" } rounded-full sm:rotate-[270deg]  justify-center items-center flex-col flex  ease-in-out navItem hover:opacity-100   transform transition-button duration-500 hover:scale-105 buttonC  buttonC font-Satoshi text-2xl  font-light cursor-none `} onClick={() => toggleNav(true)}>
                    <div className={` buttonC absolute ease-in-out cursor-none  h-[0.2rem] ${navOpen && !menuState ? "bg-LunarDawn " : " bg-MainBeige"} ${navOpen ? "w-10 rotate-45" :"w-12 translate-y-1 "} rounded-xl  transition-all duration-1000 `}></div>
                    <div className={`  buttonC cursor-none h-[0.2rem] ${navOpen && !menuState ? "bg-LunarDawn  " : "  bg-MainBeige "} ${navOpen ? "rotate-[315deg] w-10" : "w-8 -translate-y-1"} rounded-lg ease-in-out absolute transition-all duration-1000 `}></div>

            </button>
                
                <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5, ease: "easeInOut"},
                    }}
                
                initial={["hidden"]} animate={controls} variants={buttonAnimation} className={`   absolute    h-10 w-10    rounded-full  justify-center items-center   navItem   buttonC  font-Satoshi text-2xl  font-light cursor-none text-MainBeige`} onClick={() => handleMenuStateClick()}>&uarr;</motion.button>
                
            </div>

            <NavMenu  navOpen={navOpen} menuState={menuState} setMenuState={setMenuState} toggleNav={toggleNav} />
        </motion.nav>
    );
}

export default Navbar;