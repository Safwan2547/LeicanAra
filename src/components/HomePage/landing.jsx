import React, { useEffect,useRef,useState } from 'react';
import { AnimatePresence, motion, useAnimation,useVelocity } from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import { useLenis } from '@studio-freight/react-lenis';
import ImageFloater from '../imageFloater';
import { Parallax,ParallaxProvider } from 'react-scroll-parallax';
import delay from 'tailwindcss-animated/src/utilities/delay';
import { useLoader } from '../loadStateContext';
import Image from 'next/image';
import AnimatedText from '../animatedText';
import duration from 'tailwindcss-animated/src/utilities/duration';

function LandingPage(props) {
  const controls = useAnimation();
  const controlsHeader = useAnimation();
  const lenis = useLenis();
  const [playVideo, setPlayVideo] = useState(false);  // State to control video playback
  const videoRef = useRef(null);  // Create a ref for the video element
  const {loadingTime} = props;
  const {loadState,setLoadState} = useLoader();

  const [cueAnimations,setCueAnimations] = useState(false);


  const handleClick = () => {
    // Assuming vertical scrolling, calculate the target position
    const targetY =  window.innerHeight;
    lenis.scrollTo(targetY, {
      duration:1.5// Duration of the scroll animation in seconds
    });
  };



 useEffect(() => {
   setTimeout(() => {
     if (loadState) {
       videoRef.current.play();  // Manually play the video
       
     }},(loadingTime*1000)*2)
     


    
  }, [controls,controlsHeader]);

  useEffect(() => {
      if (!loadState) {
        setCueAnimations(true);

        controls.start({
          opacity: 1, y: 0,  skewX: 0, rotateX: 0, transition: {
            duration: 0.1,
            type: "spring",
            stiffness:  40,
            mass:  0.4,
            delay: 0.05
} });
         controlsHeader.start({ clipPath: "circle(150% at 0% 0)", scale: 1 });
        

        controlsHeader.start({ color: "#141414" }, { transition: { delay: loadingTime + 2 } });
        
      }
    

  }, [controls, controlsHeader, loadState, loadingTime]);
 
  return (
    
    <div className='overflow-clip w-screen h-[100vh]'>
      
      {/* <ImageFloater /> */}
      <div className={`transition-opacity overflow-hidden duration-1000 sm:ml-0  flex flex-col sm:flex-wrap justify-center sm:items-center sm:justify-items-start h-screen prose prose-sm lg:prose-xl text-MainBeige relative`}>

        <Parallax speed={-15} >
        <div data-scroll  data-scroll-speed="4" className="z-1  flex justify-center items-center border-none outline-none">
         
          <motion.video
            className="z-1 !outline-none p-2  scale-[40%] border-none overflow-hidden object-cover hover:none"
            controls={false} 
              initial={{ opacity: 0, rotateX: "-90deg",scale:0.4, skewX: "45deg",  y: "100%"}} // Initial state of the video
            animate={controls} // Animate the video to full opacity and scale
            muted loop
            autoPlay={false}
            ref={videoRef}
            transition={{ duration: 3, ease: "circInOut" }}
            src={'/landingVid1.mov'}
            type="video/mp4"
            style={{ outline: 'none' }}
          />
          {/* <Image src='/Ice Star Test2.png' alt='video' height={500} width={500} objectFit='cover' /> */}
        </div>
        </Parallax>
      
        <div data-scroll data-scroll-speed="1.5" className='opacity-100 text-NightFall hidden sm:flex sm:absolute hover:text-LunarTwilight  duration-200 bottom-[10%] w-2/3 flex-col z-3 perspective-800'>
        <Parallax easing={""}  scale={[1,1.2]} speed={10} >
          
          <motion.h1
            style={{ clipPath: 'circle(100% at 0% 0)' }}
            data-speed="6"
            id='hero_line'
            className={` relative landingAnimations scale-[90%] font-extralight tracking-wide flex justify-center textC mb-10 opacity-100 landingItem1 group text-NightFall font-Lora sm:text-5xl text-center leading-none`}
            transition={{ delay: 0.5, duration: 1, ease: "circInOut" }}
          >
            <AnimatedText exController={cueAnimations} text={`Storytellers for the Visionaries`} classP='text-7xl max-w-[40rem] font-Lora text-LunarTwilight font-extralight' />
            {/* <span className='textC opacity-100 font-normal text-LunarTwilight text-8xl'>Storytellers</span> <span className='opacity-100'>for</span> <br /><span className='opacity-100'>the</span> <span className='textC font-normal opacity-100 text-8xl text-LunarTwilight '>Visionaries</span> */}
          </motion.h1>
           
          </Parallax>
         
        </div>
        
        {/* This is the code for the scroll down arrow on the bottom right of the website */}
       
        <motion.div onClick={handleClick} initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeInOut",duration:3,delay:3}}  className='scrollButton buttonC hover:scale-[110%] transition-all duration-[500ms] cursor-none flex absolute text-LunarDawn top-[92vh] opacity-60 left-[85vw] text-xl font-satoshi-light'  >
            <span className='buttonC text-NightFall'>Scroll Down</span>
            <motion.span initial={{y:0}}  transition={{ ease: "circInOut", duration: 4, repeat: Infinity }} animate={{y:[0,5,0]}}  className='ml-2   text-NightFall'>&#x2193;</motion.span>
          </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;