"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation'; // Corrected to 'next/router' for useRouter hook


const pageVariants = {
    
};

const Transition = ({ children }) => (

    <AnimatePresence initial={false} mode="wait" >
    <motion.div
        key={usePathname()}  // Key should be unique to the page

        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
    >
        {children}
    </motion.div>
    </AnimatePresence>
);

export default Transition;
