"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // Corrected to 'next/router' for useRouter hook
import { motion, useAnimationControls } from 'framer-motion';

import "../app/globals.css";
import NavMenu from './NavMenu';
import TransitionLink from './TransitionLink';
import duration from 'tailwindcss-animated/src/utilities/duration';

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const router = useRouter();
    const [animating, setAnimating] = useState(false);
    const [menuState,setMenuState]=useState(false);
    const controls = useAnimationControls();

    // Animation controls for navbar
    const navbarAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 2 } // 1 second delay
        }
    };
    const buttonAnimation = {
        hidden: {
            y: 0, transition: { duration: 0.5 } // 1.5 second delay
 },
        visible: {
            y:-85,
            transition: { ease: "circInOut",  duration: 0.5 } // 1.5 second delay
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
            initial="hidden"
            animate="visible"
            variants={navbarAnimation}
            className=" appearance-none  transition-color  ease-expo flex align-baseline items-center justify-between fixed top-8 left-8 right-8 sm:left-5 sm:right-5 sm:top-8 sm:mr-5 sm:ml-5 z-[3]"
        >
            <div onClick={() => toggleNav(false)} className='z-[24]'>
                <Link href="/" passHref className={`${navOpen ? "text-NightFall" : "text-NightFall"} opacity-90 navItem antialiased transform transition-button duration-500 hover:scale-110 hover:text-LunarTwilight hover:animate-pulse-slow buttonC font-satoshi-light text-4xl sm:text-4xl ease-in-out cursor-none z-24`}>
                    LeicanAra
                </Link>
                <span className={`textP text-3xl font-satoshi-light ${navOpen ? "text-MainBeige" : "text-NightFall"} transition-all duration-500`}>
                    {getNavbarTitle()}
                </span>
            </div>
            <div id='buttonHolder' className=' fixed z-[24] mr-8 flex flex-col  items-center sm:right-0 sm:top-[50%] w-12  ' >
            <button className={` scale-90  hover:bg-opacity-100 z-[25] hover:backdrop-blur-none  h-12 w-24 group ${navOpen && !menuState ? "bg-MainBeige " : "bg-LunarDawn"} ${!menuState && !navOpen? "bg-opacity-70 backdrop-blur-sm":"bg-opacity-100 backdrop-blur-0" } rounded-full sm:rotate-[270deg]  justify-center items-center flex-col flex  ease-in-out navItem hover:opacity-100   transform transition-button duration-500 hover:scale-105 buttonC  buttonC font-Satoshi text-2xl  font-light cursor-none `} onClick={() => toggleNav(true)}>
                    <div className={` buttonC absolute ease-in-out cursor-none  h-[0.2rem] ${navOpen && !menuState ? "bg-LunarDawn " : " bg-MainBeige"} ${navOpen ? "w-10 rotate-45" :"w-12 translate-y-1 "} rounded-xl  transition-all duration-1000 `}></div>
                    <div className={`  buttonC cursor-none h-[0.2rem] ${navOpen && !menuState ? "bg-LunarDawn  " : "  bg-MainBeige "} ${navOpen ? "rotate-[315deg] w-10" : "w-8 -translate-y-1"} rounded-lg ease-in-out absolute transition-all duration-1000 `}></div>

            </button>
            
                <motion.button initial={["hidden"]} animate={controls} variants={buttonAnimation} className={`hover:scale-100 scale-90 absolute duration-1000 transition-all  hover:bg-opacity-100 hover:backdrop-blur-none  h-10 w-10 group ${menuState ? "bg-LunarDawn opacity-100 block" : "opacity-0  "} rounded-full  justify-center items-center sm:rotate-90  navItem   hover:scale-105 buttonC  buttonC font-Satoshi text-xl rotate-[120deg] font-light cursor-none text-MainBeige`} onClick={() => handleMenuStateClick()}>&#9830;</motion.button>
            </div>

            <NavMenu navOpen={navOpen} menuState={menuState} setMenuState={setMenuState} toggleNav={toggleNav} />
        </motion.nav>
    );
}

export default Navbar;