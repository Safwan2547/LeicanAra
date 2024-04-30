// AnimatedText.jsx
"use client";
import React,{useEffect,useRef} from 'react';
import { motion, useInView } from 'framer-motion';

const letterAnimations = (charIndex,smallText) => ({
    hidden: { opacity: 1, y: smallText? 20:100,  rotateX: "-90deg", skewX: "45deg", scale: 1 },
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
            stiffness: smallText?80:50,
            mass: smallText?0.7:1,
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

const AnimatedText = ({ text, className,smallText, scrollRef,once }) => {
    const words = text.split(" ");
    const ref =useRef(null);
    smallText=smallText?smallText:false;
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
                            variants={letterAnimations(charIndex,smallText)}
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
