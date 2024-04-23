import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useAnimation,cubicBezier,useInView } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';


const TarotCard = ({ src, header, text,ParallaxStr }) => {
    const rotateY = useMotionValue(0);
    const [currentImage, setCurrentImage] = useState(src);
    const controls = useAnimation();
    const [opacity, setOpacity] = useState(0);  // Control opacity to create a fade effect
    const [cardFlipped, setCardFlipped] = useState(false);
    const customEase = cubicBezier(.08, .91, .45, 1);
    const CARD_HEIGHT = 575;
    const CARD_WIDTH = 350;
    
    const cardVarient = {
        reset: { y:"100%", scale:0, transition: {  duration: 1, // Duration of the animation
        ease: "anticipate", // Custom easing function

    }},
        start: {
            y: "10%", scale: 1, transition: {
                duration: 1.2,
                 // Duration of the animation
                type: "spring", // Animation type for a smooth effect
                damping: 20, // Damping effect
                stiffness: 175, // Stiffness of the spring animation 
            },

    }};


    const toggleFlip = () => {
        // Start by fading out
        if (cardFlipped) {
            setCardFlipped(false);
            controls.start(["reset"]);
            
        }
        else {
            setCardFlipped(true);
            controls.start(["start"]);
            
        }

        

    };
 

    useEffect(() => {
        //After a card is flipped, set a timeout to flip it back
        if (cardFlipped) {

            setTimeout(() => {
                setCardFlipped(false);

                controls.start(["reset"]);
            }, 10000);
        }
        
    },[cardFlipped]);


  
    return (
        <Parallax speed={(ParallaxStr+1)*10} scale={[0.9,1]} y={[10,-10]} >
        <motion.div 
            className="card   hover:scale-110 transition-all    flex  relative  duration-500 justify-center items-center"
            onClick={toggleFlip}
            style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }}

           
        >
            <div className="  flex justify-center items-center   absolute " 
 >
                
                <div className='z-[1] relative  '>
                
                <Image height={800} width={350} src={currentImage} className='clickC  cursor-none' alt="Tarot Card" />
                </div>
                <motion.div initial={{y:"100%",scale:0}} animate={controls} variants={cardVarient} className=' ease-in-out overflow-clip clickC  absolute  tarot-back  z-[2] '>
                    <div className='flex justify-start flex-col absolute p-12  w-full h-full clickC items-start'>
                    <h1 className='  text-MainBeige text-4xl font-light max-w-[50%]  text-pretty text-left textC font-Lora'>{header} </h1>
                        <p className='text-MainBeige text-lg mt-4 leading-[1.7]  text-pretty text-left textP font-satoshi-light'>{text}</p>
                    </div> 
                    

                        <Image height={800} width={350} className='clickC cursor-none' src={"/tarotBack-01.png"} alt="Tarot back" />

                
                </motion.div>
            </div>
            {header && <h2>{header}</h2>}
            {text && <p>{text}</p>}
        </motion.div>
        </Parallax>
    );
};

export default TarotCard;
