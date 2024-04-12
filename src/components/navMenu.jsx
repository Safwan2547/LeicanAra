"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation, useAnimationControls,cubicBezier } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation'; // Corrected import for Next.js useRouter hook
import TransitionLink from './TransitionLink';
import Marquee from 'react-fast-marquee'
import delay from 'tailwindcss-animated/src/utilities/delay';
const SubNavBar = () => {
    // Add your social media links here
    const socialMediaLinks = [
        { name: 'Instagram', url: '#' },
        { name: 'Behance', url: '#' },
        // Add more social media links as needed
    ];

    return (
        <div className="menu-item subnav-bar flex absolute bottom-14 justify-center gap-8">
            {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} className="subnav-link text-MainBeige buttonC font-satoshi-light hover:scale-110 duration-500 cursor-pointer hover:animate-pulse  text-lg transition-all">{link.name}</a>
            ))}
        </div>
    );
};

const NavMenu = ({ navOpen, toggleNav }) => {
    const location = usePathname();
    const isAboutPage = location === "/about";
    const isFAQPage = location === "/faq";
    const isContactPage = location === "/contact";
    const controls = useAnimationControls();
    const customEase = cubicBezier(.08, .91, .45, 1);

    const navVariants = {
        overlayOpen: { x: "0%", transition: { duration: 0.8, ease: customEase }},
        overlayClose: { x: "100%", transition: { duration: 0.8, ease: "circInOut"} },
        
    };
    const overLayVariants = {
        initiateOverlay: { opacity: 0.2, transition: { delay: 1, duration: 2, ease: "linear" } },
        closeOverlay: { opacity: 0, transition: { delay: 1, duration: 2, ease: "easeInOut" } }
      }
    const childVarients = {
        overlayOpen: { clipPath: 'circle(150% at 0% 0)', transform: "scale(1)", transition: { duration: 1, ease: "circInOut" } },
        overlayClose: { clipPath: 'circle(0% at 0% 0)', transform: "scale(0.85)", transition: { duration: 1, ease: "circInOut" } }
    };

    useEffect(() => {
    if (navOpen) {
        controls.start(["overlayOpen"])
    } else {
        controls.start(["overlayClose"]);
    }
}, [navOpen, controls]);

    return (
        <motion.div animate={controls} variants={navVariants} className={`overflow-hidden z-20 overlay no-scrollbar::-webkit-scrollbar pt-[10rem]  text-center top-0 left-0 w-screen h-screen fixed  `}>
            <motion.div className=' font-satoshi-light '>

                <div data-speed="3" className='overlay-menu fixed overflow-hidden bg-NightFall border-white  w-[36rem] rounded-l-[1.5rem]  h-[95vh] right-0 top-[2.5%] flex flex-col   justify-center items-center font-satoshi-light text-6xl  text-MainBeige'>
                    <div className='flex flex-col gap-24 '>
                    <div className={`menu-item `} onClick={() => toggleNav(false)} >
                        <p className='font-satoshi-light text-sm p-2 opacity-20'>(1)</p>
                        <TransitionLink to="/about" className={`${isAboutPage ? 'opacity-20' : 'opacity-100'}  hover:text-LunarTwilight transform ease-in-out transition-button duration-700 w-[20rem] hover:scale-100 scale-[90%] hidden lg:block buttonC font-Lora cursor-pointer`}>
                            <Marquee speed={15} className='border-x border-x-white border-opacity-[0.4]'  > About  </Marquee>
                        </TransitionLink>
                    </div>
                    <div className={`menu-item`} onClick={() => toggleNav(false)}>
                        <p className='font-satoshi-light text-sm p-2 opacity-20'>(2)</p>

                        <TransitionLink to="/faq" className={`${isFAQPage ? 'opacity-20' : 'opacity-100'} hover:text-LunarTwilight transform  ease-in-out transition-button duration-700 hover:scale-100 w-[20rem] scale-[90%] hidden lg:block buttonC font-Lora cursor-pointer`}>
                            <Marquee speed={15} direction='right' className='border-x  border-x-white border-opacity-[0.4]'  > FAQ  </Marquee>

                        </TransitionLink>
                    </div>
                    <div onClick={() => toggleNav(false)} className='menu-item'>
                        <p className='font-satoshi-light text-sm p-2 opacity-20'>(3)</p>

                        <TransitionLink to="/contact" className={`${isContactPage ? 'opacity-20' : 'opacity-100'} hover:text-LunarTwilight transform ease-in-out w-[20rem]  transition-button duration-700 hover:scale-100 scale-[90%] hidden lg:block buttonC font-Lora cursor-pointer`} >
                            <Marquee speed={15} className='border-x border-x-white border-opacity-[0.4]'  > Contact  </Marquee>
                        </TransitionLink>
                    </div>
                    </div>
                    <SubNavBar />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NavMenu;