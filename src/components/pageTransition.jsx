"use client";
import React, { useEffect, useRef } from 'react';
import {motion} from 'framer-motion';

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ y: 100}}
            animate={{ y: 0 }}
            transition={{ease: "easeInOut", duration: 0.5}}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
}