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
import LoadingScreen from '@/components/loading';
// import NavMenu from '../components/navMenu';
import PageTransition from '@/components/pageTransition';

import { timeline } from 'motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import TarotSection from '@/components/HomePage/TarotSection';

function HomePage() {

  const loadingTime=0;
  







  

  return (
    <ParallaxProvider>
      

      <LoadingScreen loadingTime={loadingTime} />

      
    <div 
    className='   bg-white'>

            <MouseParallax/>


       
            
            <LandingPage loadingTime={loadingTime}/>      
            <Introductory/>
           
        <ProjectGrid  projects={projects} />

        <TarotSection/>

        <CallToAction />

        
       
       
      
    </div>
    </ParallaxProvider>
    
  );
}

export default HomePage;
