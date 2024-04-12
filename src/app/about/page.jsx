"use client";

import React from 'react';
import Head from 'next/head';
import Marquee from 'react-fast-marquee';
import { Parallax,ParallaxProvider } from 'react-scroll-parallax';
import Construction from './_components/underConstruction';
import LandingAbout from './_components/landingAbout';

const About = () => {
  return (
    <div className='bg-white'>
      {/* <Construction /> */}

      <LandingAbout/>






    </div>
    
  );
};

export default About;
