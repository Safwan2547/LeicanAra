import React, { useEffect,useRef,useState } from 'react';
import { AnimatePresence, motion, useAnimation,useVelocity } from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import { useLenis } from '@studio-freight/react-lenis';
import ImageFloater from '../imageFloater';
import { Parallax,ParallaxProvider } from 'react-scroll-parallax';
import delay from 'tailwindcss-animated/src/utilities/delay';
import { useLoader } from '../loadStateContext';
import Image from 'next/image';
import { DeviceProvider,useDeviceType } from '../deviceProvider';
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
  const { deviceType } = useDeviceType();

  const [cueAnimations,setCueAnimations] = useState(false);


  const handleClick = () => {
    // Assuming vertical scrolling, calculate the target position
    const targetY =  window.innerHeight;
    lenis.scrollTo(targetY, {
      duration:1.5// Duration of the scroll animation in seconds
    });
  };

  const translateY = deviceType.trim() === "phone" ? "100vh" : "80%";
  const scale = deviceType.trim() === "phone" ? 1.4 : 0.4;



  useEffect(() => {

      if (!loadState) {
        setCueAnimations(true);

        controls.start({
          opacity: 1, y: 0,  skewX: 0,scale:scale, rotateX: 0, transition: {
            duration: 0.1,
            type: "spring",
            stiffness:  50,
            damping:  10,
            mass:  0.8,
            delay: 0.05
} });
        

        
      }
    

  }, [controls, controlsHeader, loadState, loadingTime]);
 
  return (
    
    <div className='overflow-clip w-screen h-[100vh]'>
      
      {/* <ImageFloater /> */}
      <div className={`transition-opacity overflow-hidden duration-1000 sm:ml-0  flex flex-col sm:flex-wrap justify-center sm:items-center sm:justify-items-start h-screen prose prose-sm lg:prose-xl text-MainBeige relative`}>

        <Parallax speed={-15} className='' >
        <div data-scroll  data-scroll-speed="4" className="z-1 sm:mb-16 mb-32 flex justify-center items-center border-none outline-none">
         
          <motion.video
            className="z-1 !outline-none p-2  sm:scale-[40%] border-none overflow-hidden object-cover hover:none"
            controls={false} 
              initial={{ opacity: 1, rotateX: "-90deg",scale:scale, skewX: "90deg",y:"100vh"}} // Initial state of the video
            animate={controls} // Animate the video to full opacity and scale
            muted loop
            autoPlay={true}
            ref={videoRef}
            transition={{ duration: 3, ease: "circInOut" }}
              src={'/0001-0480.mov'}
            type="video/mp4"
            style={{ outline: 'none' }}
          />
          {/* <video className='scale-[40%]' src='/Book Animation.mov' autoPlay loop muted /> */}
          {/* <Image src='/Ice Star Test2.png' alt='video' height={500} width={500} objectFit='cover' /> */}
        </div>
        </Parallax>
      
        <div data-scroll data-scroll-speed="1.5" className='opacity-100 text-NightFall  flex  absolute hover:text-LunarTwilight  duration-200 w-screen bottom-[20%] sm:bottom-[15%]  justify-center  items-center sm:w-full flex-col z-3 sm:h-[full]'>
        <Parallax easing={""}  scale={[1,1.2]} speed={10} >
          
          <motion.h1
            data-speed="6"
            id='hero_line'
              className={` relative landingAnimations font-extralight tracking-wide flex items-center  p-4 max-w-1/3  w-[50vw] sm:w-[60vw] textC sm: justify-center textC opacity-100 landingItem1 group text-NightFall font-Lora sm:text-5xl text-center leading-none`}
            transition={{ delay: 0.5, duration: 1, ease: "circInOut" }}
          >
            <AnimatedText exController={cueAnimations} text={`Storytellers for the Visionaries`} classP='text-5xl sm:max-w-[75vw] textC sm:text-8xl max-w-[40rem] font-Lora text-LunarDawn font-extralight' />
            {/* <span className='textC opacity-100 font-normal text-LunarTwilight text-8xl'>Storytellers</span> <span className='opacity-100'>for</span> <br /><span className='opacity-100'>the</span> <span className='textC font-normal opacity-100 text-8xl text-LunarTwilight '>Visionaries</span> */}
          </motion.h1>
           
          </Parallax>
         
        </div>
        
        {/* This is the code for the scroll down arrow on the bottom right of the website */}
       
        <motion.div onClick={handleClick} initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeInOut",duration:3,delay:3}}  className='scrollButton buttonC hover:scale-[110%] transition-all duration-[500ms] cursor-none  hidden sm:flex absolute text-LunarDawn top-[92vh] opacity-60 left-[5vw] text-xl font-satoshi-light'  >
          <motion.span initial={{ y: 0 }} transition={{ ease: "circInOut", duration: 4, repeat: Infinity }} animate={{ y: [0, 5, 0] }} className='mr-2   text-NightFall'>&#x2193;</motion.span>

            <span className='buttonC text-NightFall'>Scroll Down</span>
          </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;