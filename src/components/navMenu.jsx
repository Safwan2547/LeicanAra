"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation, useAnimationControls,cubicBezier,stagger } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation'; // Corrected import for Next.js useRouter hook
import TransitionLink from './TransitionLink';
import Marquee from 'react-fast-marquee'

import Image from 'next/image';
import duration from 'tailwindcss-animated/src/utilities/duration';

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
    const menuStarImg = '/Menu Star.svg';
    const menuMoonImg = '/Menu Moon.svg';
    const location = usePathname();
    const isAboutPage = location === "/about";
    const isFAQPage = location === "/faq";
    const isContactPage = location === "/contact";
    const controls = useAnimationControls();
    const customEase = cubicBezier(.08, .91, .45, 1);
    const menuItems=[
        {label:'Who we are',url:'/about',name:'About'},
        {label:'Ask away',url:'/faq',name:'FAQ'},
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
    const childVarients = (index) =>({
        overlayOpen: {
            clipPath: 'circle(130.0% at 50% 0)', y: 0,scale:1, transition: {
                duration:0.7,
                 delay: (0.2 * index)+0.1 ,
                type: 'spring',   // Using spring type for transition
                stiffness: 100,   // Control of the spring stiffness
                damping: 30,      // Control of the damping - resistance
                mass: 1,          // Mass of the element being animated} 
            },},
        overlayClose: {
            clipPath: 'circle(0% at 50% 0)', y: 100, scale: 0.5, transition: {
                duration: 0.8,
                delay: 0,
                type: 'spring',   // Using spring type for transition
                stiffness: 100,   // Control of the spring stiffness
                damping: 30,      // Control of the damping - resistance
                mass: 1,          // Mass of the element being animated} 
             } }
    });

    const floatVarient ={
        overlayOpen: { y: [0, 5,0], transition: { repeat: Infinity, duration: 5, ease: "easeInOut" } },
        overlayClose: { y: 0, transition: { duration: 1, ease: "circInOut" }}
    }

    useEffect(() => {
    if (navOpen) {
        controls.start(["overlayOpen"])
    } else {
        controls.start(["overlayClose"]);
    }
}, [navOpen, controls]);

    return (
        <motion.div initial={{x:"100%"}}
        animate={controls} variants={navVariants} className={`overflow-hidden z-[13] overlay no-scrollbar::-webkit-scrollbar pt-[10rem]  text-center top-0 left-0 w-screen h-screen fixed  `}>
            <motion.div className=' font-satoshi-light '>

              

                <div  data-speed="3" className='overlay-menu fixed overflow-hidden   w-[36rem] rounded-l-[1.5rem]  h-[90vh] right-0 top-[2.5%] flex flex-col   justify-center items-center font-satoshi-light text-6xl  text-MainBeige'>
                   <div className='h-full w-full backdrop-blur-md absolute bg-LunarDawn bg-opacity-80'></div>
                   
                    <motion.div   className='absolute flex flex-col justify-center items-center top-0 mt-12'>
                        <motion.div animate={controls} variants={floatVarient} > 
                            <Image src={menuStarImg} alt="Menu Star" width={50} height={50} />

                        </motion.div>
                        {/* <h1 className='text-sm opacity-50 text-MainBeige mt-8 font-satoshi-light'>Strings</h1> */}

                    </motion.div >
                    
                    <motion.div className='flex buttonC flex-col gap-24 '>
                        {menuItems.map((item, index) => (
                            <motion.div key={index} animate={controls} variants={childVarients(index)} className="menu-item" onClick={() => toggleNav(false)}>
                                <p className='font-satoshi-light text-sm p-2 opacity-20'>{item.label}</p>
                                <TransitionLink to={item.url} className={`${location === item.url ? 'opacity-20' : 'opacity-100'} buttonC transform ease-in-out transition-button duration-700 hover:scale-110 w-[20rem] scale-[90%] hidden lg:block buttonC font-Lora cursor-pointer`}>
                                    <Marquee speed={15} className='border-x border-x-white border-opacity-[0.4]'>{item.name}</Marquee>
                                </TransitionLink>
                            </motion.div>
                        ))}
                    </motion.div>
                    <SubNavBar />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NavMenu;