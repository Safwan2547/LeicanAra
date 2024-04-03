import React, { useEffect,useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import ProjectTextBlock from './projectTextBlock';
import MediaContent from './mediaContent';

const IdentitySection = ({ projectData, sectionLayout, margins }) => {
  const { identityHead, identityDescription, identityContent1, identityContent2 } = projectData;

  const controls = useAnimation();
  const ref=useRef(null);
  const  inView  = useInView(ref);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5,delay:0.3, ease: "easeInOut" } },
    hide: { opacity: 0 },
  };
useEffect(() => {
 
},[])
  return (
    <motion.section
      id="identity"
      className={`flex flex-col justify-center items-center ${margins[0]}`}
      ref={ref}
      
      animate={controls}
      variants={variants}
    >
      <ProjectTextBlock sectionHead={identityHead} sectionName={"Identity"} sectionDescription={identityDescription} margins={margins} />

      <motion.div
       
        className={sectionLayout[0]}
        animate={controls}
        variants={variants}
      >
        <MediaContent media={identityContent1}  isVideo={identityContent1 && identityContent1.endsWith('.mp4')} className={sectionLayout[1]} />
          <MediaContent media={identityContent2} alt={identityContent2} isVideo={identityContent2 && identityContent2.endsWith('.mp4')} className={sectionLayout[2]} />
    
      </motion.div>
    </motion.section>
  );
};

export default IdentitySection;
