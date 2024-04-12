"use client";
import React, { useEffect, useRef } from 'react';

import LandingPage from '../components/HomePage/landing';

import ProjectGrid from '../components/HomePage/ProjectGrid';
import projects from '../data/Projects';

import CallToAction from '../components/HomePage/CallToAction';
import Capabilities from '../components/HomePage/Capabilities';
import Introductory from '../components/HomePage/Introductory';
import Footer from '@/components/Footer';
import MouseParallax from '../components/mouseParallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import NavMenu from '../components/navMenu';

import { timeline } from 'motion';
import { ParallaxProvider } from 'react-scroll-parallax';

function HomePage() {
  const containerRef = useRef(null);


  

  return (
    <ParallaxProvider>
      
    <div 
    className='   bg-white'>

            <MouseParallax/>


       
            
            <LandingPage  />      
            <Introductory/>
           
        <ProjectGrid projects={projects} />

        <Capabilities/>
        <CallToAction />

        
       
       
      
    </div>
    </ParallaxProvider>
    
  );
}

export default HomePage;
