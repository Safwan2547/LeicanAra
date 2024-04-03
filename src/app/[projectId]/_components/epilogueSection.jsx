import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import MediaContent from './mediaContent';
import ProjectTextBlock from './projectTextBlock';


const EpilogueSection = ({ projectData, sectionLayout, margins }) => {
  const { epilogueHead, epilogueDescription, epilogueContent1 } = projectData;

  const controls = useAnimation();
  const ref=useRef(null);
  const  inView  = useInView(ref);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5,delay:0.3, ease: "easeInOut" } },
    hidden: { opacity: 0},
  };

  useEffect(() => {
   
  }, []);

  return (
    <motion.section animate={controls} variants={variants} ref={ref} id='epilogue' className={`${margins[0]} flex flex-col justify-center items-center`}>
      
      <ProjectTextBlock sectionHead={epilogueHead} sectionName={"Epilogue"} sectionDescription={epilogueDescription} margins={margins} />
      <div className={sectionLayout[0]}>
      <MediaContent media={epilogueContent1}  isVideo={epilogueContent1 && epilogueContent1.endsWith('.mp4')} className={sectionLayout[1]} />
    
      </div>
    </motion.section>
  );
};

export default EpilogueSection;
