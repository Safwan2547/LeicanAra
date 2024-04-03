import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import ProjectTextBlock from './projectTextBlock';
import MediaContent from './mediaContent';

const ChallengeSection = ({ projectData, sectionLayout, margins }) => {
  const { challengeHead, challengeDescription, challengeContent1, challengeContent2 } = projectData;

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
    <motion.section animate={controls} variants={variants} ref={ref} id='challenge' className={`${margins[0]}`}>
      <div className="w-full flex justify-center items-center flex-col sm:p-0 ">

        <ProjectTextBlock sectionHead={challengeHead} sectionName={"Challenge"} sectionDescription={challengeDescription} margins={margins} />
        

        <div id='challengeLayout' className={sectionLayout}>
        <MediaContent media={challengeContent1}  isVideo={challengeContent1 && challengeContent1.endsWith('.mp4')} className={sectionLayout[1]} />
          <MediaContent media={challengeContent2} alt={challengeContent2} isVideo={challengeContent2 && challengeContent2.endsWith('.mp4')} className={sectionLayout[2]} />
    
        </div>
      </div>
    </motion.section>
  );
};

export default ChallengeSection;
