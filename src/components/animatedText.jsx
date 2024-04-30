// AnimatedText.jsx
"use client";
import React,{useEffect,useRef} from 'react';
import { motion, useInView } from 'framer-motion';

const letterAnimations = (charIndex) => ({
    hidden: { opacity: 1, y: 100, rotateX: "-90deg", skewX: "45deg", scale: 1 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        skewX: 0,
        rotateX: 0,
        transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 50,
            mass: 1,
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

const AnimatedText = ({ text, className, scrollRef,once }) => {
    const words = text.split(" ");
    const ref =useRef(null);
    
    const inView=useInView(ref,{once:once==false?false:true,threshold:0.5});


    return (
        <motion.div
            className={className}
            ref={scrollRef ? scrollRef : ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            {words.map((word, index) => (
                <motion.span key={index} style={{ whiteSpace: 'nowrap' }}
                    variants={wordVariants}
                >
                    {Array.from(word).map((char, charIndex) => (
                        <motion.span key={charIndex}
                            className='inline-block'
                            variants={letterAnimations(charIndex)}
                        >
                            {char}
                        </motion.span>
                    ))} &nbsp;
                </motion.span>
            ))}
        </motion.div>
    );
}

export default AnimatedText;
