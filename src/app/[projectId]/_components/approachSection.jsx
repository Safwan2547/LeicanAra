import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import ProjectTextBlock from './projectTextBlock';
import MediaContent from './mediaContent';

const ApproachSection = ({ projectData, sectionLayout, margins }) => {
  const { approachHead, approachDescription, approachContent1, approachContent2, approachContent3 } = projectData;

  const controls = useAnimation();
  const ref=useRef(null);
  const  inView  = useInView(ref);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5,delay:0.3, ease: "easeInOut" } },
    hidden: { opacity: 0},
  };

  useEffect(() => {
    console.log("approach inview: "+ inView)
    
  }, [inView]);


  return (
    <motion.section animate={controls} ref={ref} variants={variants} id='approach' className={`flex flex-col justify-center items-center ${margins[0]}`}>
      
      <ProjectTextBlock sectionHead={approachHead} sectionName={"Approach"} sectionDescription={approachDescription} margins={margins} />
      <div className={sectionLayout[0]}>
      <MediaContent media={approachContent1} alt={approachContent1}  isVideo={approachContent1 && approachContent1.endsWith('.mp4')} className={sectionLayout[1]} />
        <MediaContent media={approachContent2} alt={approachContent2} isVideo={approachContent2 && approachContent2.endsWith('.mp4')} className={sectionLayout[2]} />
        <MediaContent media={approachContent3} alt={approachContent3} isVideo={approachContent3 && approachContent3.endsWith('.mp4')} className={sectionLayout[3]} />

      </div>
    </motion.section>
  );
};

export default ApproachSection;
