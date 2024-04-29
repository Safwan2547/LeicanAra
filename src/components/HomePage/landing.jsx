import React, { useEffect,useRef,useState } from 'react';
import { AnimatePresence, motion, useAnimation,useVelocity } from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import { useLenis } from '@studio-freight/react-lenis';
import ImageFloater from '../imageFloater';
import { Parallax,ParallaxProvider } from 'react-scroll-parallax';
import delay from 'tailwindcss-animated/src/utilities/delay';
import { useLoader } from '../loadStateContext';

function LandingPage(props) {
  const controls = useAnimation();
  const controlsHeader = useAnimation();
  const lenis = useLenis();
  const [playVideo, setPlayVideo] = useState(false);  // State to control video playback
  const videoRef = useRef(null);  // Create a ref for the video element
  const {loadingTime} = props;
  const {loadState,setLoadState} = useLoader();


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
     }},loadingTime*1000+1)


    
  }, [controls,controlsHeader]);

  useEffect(() => {
    const sequence = async () => {
      if (!loadState) {
        await controls.start({ opacity: 1, scale: 1 }, { transition: { delay: 0.5 } });
        await controlsHeader.start({ clipPath: "circle(150% at 0% 0)", scale: 1 });
        controlsHeader.start({ color: "#141414" }, { transition: { delay: loadingTime + 2 } });
      }
    };

    sequence();
  }, [controls, controlsHeader, loadState, loadingTime]);
 
  return (
    
    <div className='overflow-clip w-screen h-[100vh]'>
      
      {/* <ImageFloater /> */}
      <div className={`transition-opacity overflow-hidden duration-1000 sm:ml-0  flex flex-col sm:flex-wrap justify-center sm:items-center sm:justify-items-start h-screen prose prose-sm lg:prose-xl text-MainBeige relative`}>

        <Parallax speed={-15} >
        <div data-scroll  data-scroll-speed="4" className="z-1  w-screen h-screen flex justify-center items-center border-none outline-none">
         
          <motion.video
            className="z-1 !outline-none p-2 scale-[60%] border-none overflow-hidden object-cover hover:none"
            controls={false} 
            muted loop
            autoPlay={false}
            ref={videoRef}
            transition={{ duration: 3, ease: "circInOut" }}
            src={'/Website landing 1.mp4'}
            type="video/mp4"
            style={{ outline: 'none' }}
          />
        </div>
        </Parallax>
      
        <div data-scroll data-scroll-speed="1.5" className='opacity-100 text-NightFall hidden sm:flex sm:absolute hover:text-LunarTwilight  duration-200 bottom-[10%] w-2/3 flex-col z-3 perspective-800'>
        <Parallax easing={""}  scale={[1,1.2]} speed={10} >
          
          <motion.h1
            style={{ clipPath: 'circle(0% at 0% 0)' }}
            data-speed="6"
            id='hero_line'
            className={` relative landingAnimations scale-[90%] font-extralight tracking-wide textC mb-10 opacity-100 landingItem1 group text-NightFall font-Lora sm:text-5xl text-center leading-none`}
            initial={{ clipPath: 'circle(0% at 0% 0)', scale: 0.90,color:"#141414" }}
            animate={controlsHeader} // Using controlsHeader for animation
            transition={{ delay: 0.5, duration: 1, ease: "circInOut" }}
          >
            <span className='textC opacity-100 font-normal text-LunarTwilight text-8xl'>Storytellers</span> <span className='opacity-100'>for</span> <br /><span className='opacity-100'>the</span> <span className='textC font-normal opacity-100 text-8xl text-LunarTwilight '>Visionaries</span>
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