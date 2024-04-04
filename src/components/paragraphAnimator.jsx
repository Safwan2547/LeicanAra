import React, { useEffect,useRef } from 'react';
import { motion, useScroll, useTransform,useSpring } from 'framer-motion';

const AnimatedParagraph = (props) => {
  // Ensure this is a string. The error could happen if this was not properly defined or mistyped.
  const paragraph = props.inputText || "default";
  const words = paragraph.split(" "); // Splitting the string into an array of words.
  const containerref3 = useRef(null)

  let { scrollYProgress } = useScroll({
    target: containerref3.current,
    offset: ["center", " end"]
    

    
    
  }) 

  
  return (
      <div  className={` mt-12 flex flex-wrap  align-baseline z-10 text-wrap  w-[75vw] mx-12`}>
        {words.map((word, index) => {
          // Calculate start and end range for each word based on its position in the array
          const rangeStart = 1-(index / words.length);
          const rangeEnd = 1-(index + 1) / words.length;

          const opacity = useSpring(useTransform(scrollYProgress, [rangeStart, rangeEnd], [0.05, 1]),{ stiffness: 1000, damping: 100 ,mass:0.5});

          return (
            <motion.span key={index} style={{ opacity }} className={`text-black mr-2  ${props.textStyle} `}>
              {word}
            </motion.span>
          );
        })}
      </div>
  );
};

export default AnimatedParagraph;