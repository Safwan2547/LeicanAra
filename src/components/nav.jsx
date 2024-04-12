"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation'; // Corrected to 'next/router' for useRouter hook
import { motion } from 'framer-motion';

import "../app/globals.css";
import NavMenu from './NavMenu';
import TransitionLink from './TransitionLink';

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const router = useRouter();
    const [animating, setAnimating] = useState(false);


    // Animation controls for navbar
    const navbarAnimation = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { delay: 1 } // 1 second delay
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
            className=" appearance-none transition-color ease-expo flex align-baseline items-center justify-between fixed top-8 left-8 right-8 sm:left-5 sm:right-5 sm:top-8 sm:mr-5 sm:ml-5 z-[23]"
        >
            <div onClick={() => toggleNav(false)} className='z-[24]'>
                <TransitionLink to="/" passHref className={`${navOpen ? "text-NightFall" : "text-NightFall"} opacity-90 navItem antialiased transform transition-button duration-500 hover:scale-110 hover:text-LunarTwilight hover:animate-pulse-slow buttonC font-satoshi-light text-4xl sm:text-4xl ease-in-out cursor-none z-24`}>
                    LeicanAra
                </TransitionLink>
                <span className={`textP text-3xl font-satoshi-light ${navOpen ? "text-MainBeige" : "text-NightFall"} transition-all duration-500`}>
                    {getNavbarTitle()}
                </span>
            </div>
            <button className={` scale-90 opacity-85 h-12 w-24 group ${navOpen ? "bg-MainBeige" : "bg-LunarDawn"} rounded-full rotate-[270deg]  justify-center items-center flex-col flex  ease-in-out navItem hover:opacity-100   transform transition-button duration-500 hover:scale-105 buttonC  buttonC font-Satoshi text-2xl z-[24] fixed right-0 top-1/2 font-light cursor-none `} onClick={()=>toggleNav(true)}>
            <div className={` buttonC absolute ease-in-out cursor-none  h-[0.2rem] ${navOpen?"bg-LunarDawn w-10 rotate-45":"w-12 translate-y-1 bg-MainBeige" } rounded-xl  transition-all duration-1000 `}></div>
                    <div className={`  buttonC cursor-none h-[0.2rem] ${navOpen?"bg-LunarDawn w-10 rotate-[315deg]":"w-8  bg-MainBeige -translate-y-1" } rounded-lg ease-in-out absolute transition-all duration-1000 `}></div>

            </button>
            <NavMenu navOpen={navOpen} toggleNav={toggleNav} />
        </motion.nav>
    );
}

export default Navbar;
