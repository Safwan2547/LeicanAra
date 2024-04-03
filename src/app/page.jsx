"use client";
import React, { useEffect, useRef } from 'react';

import LandingPage from '../components/HomePage/landing';

import ProjectGrid from '../components/HomePage/ProjectGrid';
import projects from '../data/Projects';

import CallToAction from '../components/HomePage/CallToAction';
import Capabilities from '../components/HomePage/Capabilities';
import Introductory from '../components/HomePage/Introductory';
import MouseParallax from '../components/mouseParallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import NavMenu from '../components/navMenu';

import { timeline } from 'motion';
import { ParallaxProvider } from 'react-scroll-parallax';

function HomePage() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    (async () => {
      let locomotiveScroll;
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      if(locomotiveScroll){
        locomotiveScroll.destroy();
      }
       locomotiveScroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.3,
        // You can add other options here
      });
  
      return () => locomotiveScroll.destroy(); // Clean-up function
    })();
  }, []); // Dependency array to ensure it runs only
  

  

  return (
    <div data-scroll-container  ref={containerRef}
    className='   bg-white'>

            <MouseParallax/>


       
            
            <LandingPage  />      
            {/* <Introductory/> */}
           
        <ProjectGrid projects={projects} />

        {/* <Capabilities/> */}
        <CallToAction />
        
        <div className='buttonC cursor-none textC '>
        </div>
      
    </div>
  );
}

export default HomePage;
