"use client"
// Import React and the ProjectCard component
import React,{ useState,useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { inView,animate,timeline } from "motion"
import { Parallax } from 'react-scroll-parallax';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

// Functional component to render a grid of projects
const ProjectGrid = ({ projects }) => {

  const wand = '/Wand-Mono2.svg';
  const wandAni='/Wand Animation.mp4';

  const margin=20;

// Use this to separate sections
const marginExpression = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)}`;
// Use this to separate elements within sections
const marginExpression2 = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin / 4)}`;
// Use this to separate things that should be close together, such as headers and descriptions, etc.
const marginExpression3 = `mt-${Math.floor(margin / 4)} sm:mt-${Math.floor(margin / 8)}`;


useEffect(() => {
const animateObj=document.getElementById("#projectHolder");
const boxes = document.querySelectorAll(".projectCard")
});



  
  return (
    // Outer container with flex layout and centering
    <section id='gridClassWrap' className="w-[100%] pt-48 bg-white flex justify-center  flex-col  items-center flex-wrap">
      <Parallax easing={"easeOutCirc"} opacity={[0,1]} speed={-3} scale={[0.7,1]} className='w-screen'> 

        <Marquee autoFill={true} speed={25} className='text-NightFall  fo font-Lora  text-3xl mb-24  h-[22rem] w-full  sm:text-[16rem]'>&nbsp; Projects &nbsp;
          <div className=" h-full flex justify-center items-start relative">
            <video autoPlay loop muted className="h-48 scale-x-[-100%]" style={{ objectFit: 'contain' }}>
              <source src={wandAni} type="video/mp4" />
            </video>          
            </div>
        </Marquee>
      </Parallax>
      {/* Grid container for projects with specified columns, gap, and border */}
      <div id='projectHolder' className={` ${marginExpression2} sm:flex-col flex-row mt-24  relative flex overflow-hidden 
       gap-2 sm:gap-24 sm:p-0 pl-4 pr-4 w-screen sm:w-[95vw]  snap-mandatory snap-x   `}>

       
       
        
        {/* Map through the projects and render ProjectCard for each */}
        {projects.map((project) => (
          <div id='projectCard' className={`projectCard  ${marginExpression3}  cursor-none flex-none h-1/3  transition-all duration-500   snap-always snap-center `} key={project.key}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

// Export the ProjectGrid component
export default ProjectGrid;
