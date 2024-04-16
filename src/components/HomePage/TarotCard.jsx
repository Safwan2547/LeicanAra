import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useAnimation,cubicBezier } from 'framer-motion';

const TarotCard = ({ src, header, text }) => {
    const rotateY = useMotionValue(0);
    const [currentImage, setCurrentImage] = useState(src);
    const controls = useAnimation();
    const [opacity, setOpacity] = useState(0);  // Control opacity to create a fade effect
    const [cardFlipped, setCardFlipped] = useState(false);
    const customEase = cubicBezier(.08, .91, .45, 1);
    const CARD_HEIGHT = 575;
    const CARD_WIDTH = 350;


    const cardVarient = {
        reset: { y:"100%", scale:[-1,0], transition: { duration: 0.3, ease: "anticipate" } },
        start: {  y:"10%",scale:[0,1], transition: { duration: 0.3, ease: "anticipate" } },

    };

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

        if (cardFlipped) {

            setTimeout(() => {
                setCardFlipped(false);

                controls.start(["reset"]);
            }, 7000);
        }
        
    },[cardFlipped]);

  
    return (
        <motion.div
            className="card buttonC hover:scale-110 transition-all    flex  relative  duration-500 justify-center items-center"
            onClick={toggleFlip}
            style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }}

           
        >
            <div className="  transition-all duration-1000  flex justify-center items-center   absolute " 
 >
                
                <div className='z-[1] relative  '>
                <Image height={800} width={350} src={currentImage} className='' alt="Tarot Card" />
                </div>
                <motion.div animate={controls} variants={cardVarient} className='transition-all duration-[750ms] overflow-clip  absolute  tarot-back  z-[2] '>
                    <div className='flex justify-start flex-col absolute p-12  w-full h-full items-start'>
                    <h1 className='  text-MainBeige text-4xl font-light max-w-[50%]  text-pretty text-left font-Lora'>{header} </h1>
                        <p className='text-MainBeige text-md mt-12   text-pretty text-left font-satoshi-light'>{text}</p>
                    </div> 
                    

                        <Image height={800} width={350} src={"/tarotBack-01.png"} alt="Tarot back" />

                
                </motion.div>
            </div>
            {header && <h2>{header}</h2>}
            {text && <p>{text}</p>}
        </motion.div>
    );
};

export default TarotCard;
