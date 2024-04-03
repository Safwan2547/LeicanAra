// PrologueSection.jsx
import React, { useEffect,useRef } from 'react';
import { useAnimation,motion, useInView } from 'framer-motion';
import ProjectTextBlock from './projectTextBlock';
import MediaContent from './mediaContent';

const PrologueSection = ({ projectData, sectionLayout,margins }) => {
  const { prologueHead, prologueDescription, prologueContent1, prologueContent2 } = projectData;

  const controls = useAnimation();
  const ref=useRef(null);
  const  inView  = useInView(ref);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1,ease:"easeInOut" } },
    hide: { opacity: 0 },
  };
useEffect(() => {
  if (inView) {
    controls.start('visible');
  } else {
    controls.start('hide');
  }
},[inView])

   


  

  return (
    <motion.section animate={controls} variants={variants} ref={ref} id='prologue' className={``}>
      <div className="w-full  flex justify-between items-center flex-col sm:p-0 ">
        <ProjectTextBlock sectionHead={prologueHead} sectionName={"Prologue"} sectionDescription={prologueDescription} margins={margins} />

        <div id='prologueLayout' className={sectionLayout[0]}>
          <MediaContent media={prologueContent1}  isVideo={prologueContent1 && prologueContent1.endsWith('.mp4')} className={sectionLayout[1]} />
          <MediaContent media={prologueContent2} alt={prologueContent2} isVideo={prologueContent2 && prologueContent2.endsWith('.mp4')} className={sectionLayout[2]} />
      </div>
      </div>
    </motion.section>
  );
};

export default PrologueSection;
