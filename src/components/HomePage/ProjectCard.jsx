import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TransitionLink from '../TransitionLink';
import { useInView } from 'framer-motion';
import { Parallax,ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const checkIsMobile = () => {
    const newIsMobile = window.innerWidth <= 640;
    setIsMobile(newIsMobile);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);


  const ref=useRef(null);
  const isInView = useInView(ref)

  const titleAnimation = useAnimation();
  const mainHeaderAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      titleAnimation.start({ clipPath:"circle(150% at 0% 0)" },{duration:1.5, ease: "circInOut" });
      titleAnimation.start({ scale: 1 },{duration:2.5,delay:0, ease: "anticipate" });

      mainHeaderAnimation.start({ opacity: 1, y: 0 },{duration:0.5, ease: "easeInOut" });
    } else {
      titleAnimation.start({ clipPath:"circle(0% at 0% 0)",scale:1.1},{duration:0.1, ease: "circInOut" });
      mainHeaderAnimation.start({ opacity: 0 });
    }
  }, [isInView, titleAnimation, mainHeaderAnimation]);

  const layers = [
    {
      image: project.thumbnail,
      amount: 0.5, // Adjust this value to control the parallax effect
    },
  
  ];

  return (
    <div  className="">
      <div className="watcher overflow-hidden w-full h-screen snap-start relative eterC flex">
        <div className="object-cover overflow-x-visible w-full transition-all duration-300">
          <div ref={ref} className={`relative snap-center transition-all duration-[600ms] cursor-none border-black flex justify-center items-center w-full h-full overflow-hidden`}>
            <TransitionLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={`/${project.key}`} className="cursor-none absolute peer w z-10 group w-[60vw] h-[30vw]  enterC" />
            {isMobile === true && project.typeMobile === 'video' ? (
              <video muted autoPlay loop fetchPriority="low" loading='lazy' alt={project.alt} src={project.thumbnailPort} type="video/mp4" className="object-cover max-w-[90vw] absolute snap-center aspect-[1/1.85] overflow-y-hidden " />
            ) : (
              isMobile === true && project.typeMobile === "image" ? (
                <img loading='lazy' alt={project.alt} src={project.thumbnailPort} fetchPriority="low" className="object-cover w-[90vw] snap-center aspect-[1/1.85] overflow-y-hidden crsor-none" />
              ) : (
                !isMobile && project.type === 'image' ? (
                  
                    <motion.img  src={project.thumbnail} loading='lazy' alt={project.alt} fetchPriority="low"  className="object-cover rounded-lg overflow-hidden max-w-full aspect-[1/2] peer-hover:scale-125 relative sm:w-[60vw] sm:h-[30vw] transition-all duration-1000 ease-in-out z-2" />
             
                ) : (
                  <motion.video alt={project.alt} loading="lazy" muted autoPlay loop fetchPriority="low" className={`transition-all duration-[600ms] ${isHovered ? 'opacity-100 scale-[120%]' : 'scale-[100%]'}`}>
                    <source src={project.thumbnail} type="video/mp4" />
                    Your browser does not support the video tag.
                  </motion.video>
                )
              )
            )}
          </div>
        </div>
        <div data-scroll data-scroll-speed="1.5" data-scroll-offset={[30, -10]} className=" z-3 group sm:mt-12 flex justify-center items-center w-full absolute">
        <Parallax className=' ' easing={"easeInOutCirc"} translateY={[30, -10]} speed={50}>
          <motion.p animate={titleAnimation} className={` ${isMobile === true ? (project.textColorMobile) : (project.textColor)} font-satoshi-semibold w-full text-6xl text-pretty lg:text-[14rem] sm:text-[10rem] capitalize text-center `} >{
            isMobile === true ? (project.mainHeaderMobile) : (project.title)}</motion.p>
          </Parallax>
        </div>
        <div className=' flex items-end justify-end absolute bottom-10 mb-24 inset-y-12 inset-x-16'  data-scroll data-scroll-speed="3.5" data-scroll-offset="20%,30%">
        <Parallax className=' flex items-end justify-end absolute bottom-10 mb-24 inset-y-12 inset-x-16' translateY={[50, -20]} speed={10}>

        <motion.h4 animate={mainHeaderAnimation} className={`mainHeader font-satoshi-light text-pretty  border- border-  text-4xl sm:text-6xl z-1 ${isMobile === true ? (project.textColorMobile) : (project.textColor)} `}>
          {project.mainHeader}
        </motion.h4>
        </Parallax>
        </div>
        {project.thumbnail3d !== null && project.thumbnail3d !== undefined && (
          <div className='sm:flex hidden transition-all duration-1000  h-full w-full  justify-center absolute'>
            <img data-speed="2" className={`${project.thumbnail3dW} z-3   mouseParallax left-50 top-50 `} src={project.thumbnail3d} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

