// AnimatedText.jsx
"use client";
import React,{useRef} from 'react';
import { motion, useInView } from 'framer-motion';


const   letterAnimations = (charIndex,smallText) => ({
    hidden: {
        opacity: 1, y: smallText ? 20 : 100, rotateX: "-90deg", skewX: "45deg", scale: 1, 
},
    visible: {
        opacity: 1,
        blur:0,
        y: 0,
        scale: 1,
        skewX: 0,
        rotateX: 0,
        transition: {
            duration: 0.1,
            type: "spring",
            stiffness: smallText? 80:50,
            mass: smallText? 0.7:1,
            delay: charIndex * 0.05
        }
    }
});

const wordVariants = {
    hidden: { opacity: 1 },
    visible: {
        delayChildren: 0.5,
        staggerDirection: 1,
    }
};

const AnimatedText = ({ text, classP, smallText, scrollRef,once,exController }) => {
    const words = text.split(" ");
    const ref =useRef(null);
    smallText=smallText?smallText:false;
    const inView=useInView(ref,{once:once==false?false:true,threshold:0.5});
    const trigger = exController!=undefined?exController:inView;


    return (
        <motion.div
            className={classP}
            ref={scrollRef ? scrollRef : ref}
            initial="hidden"
            animate={trigger ? "visible" : "hidden"}
           
        >
            {words.map((word, index) => (
                <motion.span key={index} style={{ whiteSpace: 'nowrap' }}
                    variants={wordVariants}  className=' justify-center relative    text-center inline-flex '
                >
                    
                    {Array.from(word).map((char, charIndex) => (
                        <motion.span key={charIndex}
                            className='relative  text-center '
                            variants={letterAnimations(charIndex,smallText)}
                        >
                            {char}
                        </motion.span>
                    ))} 
                    {index !== words.length - 1 && <span>&nbsp;</span>}
                </motion.span>
            ))}
        </motion.div>
    );
}
export default AnimatedText;
