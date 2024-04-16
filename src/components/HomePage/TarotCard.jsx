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


    const cardVarient = {
        overlayOpen: { y: "95%", transition: { duration: 0.3, ease: "anticipate" } },
        overlayClose: { y: "5%", transition: { duration: 0.3, ease: "anticipate" } },

    };

    const toggleFlip = () => {
        // Start by fading out
        if (cardFlipped) {
            setCardFlipped(false);
            controls.start(["overlayOpen"]);
            
        }
        else {
            setCardFlipped(true);
            controls.start(["overlayClose"]);
            
        }

        

    };

    useEffect(() => {
        if (cardFlipped) {

            setTimeout(() => {
                setCardFlipped(false);

                controls.start(["overlayOpen"]);
            }, 2000);
        }
        
    },[cardFlipped]);

  
    return (
        <motion.div
            className="card buttonC  transition-all duration-500 justify-center items-center"
            onClick={toggleFlip}
           animate={controls}
        >
            <div  className=" overflow-clip transition-all duration-1000 flex  relative hover:scale-110" >
                <div className='z-[1] '>
                <Image height={800} width={350} src={currentImage} className='' alt="Tarot Card" />
                </div>
                <motion.div animate={controls} variants={cardVarient} className='transition-all duration-500 tarot-back h-full w-full absolute z-[2] '>
                <Image  height={800} width={350} src={"/tarotBack-01.png"} alt="Tarot back" />
                </motion.div>
            </div>
            {header && <h2>{header}</h2>}
            {text && <p>{text}</p>}
        </motion.div>
    );
};

export default TarotCard;
