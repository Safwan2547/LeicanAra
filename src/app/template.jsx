"use client";

import React, { useContext, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // Assuming this is equivalent to useRouter().pathname
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Define animation variants for cleaner code
const pageTransitionVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 }
};

const transitionSettings = {
    duration: 0.5,
    ease: "easeInOut"
};

const childTransition ={
    initial: { x: 200},
    enter: { x: 0},
    exit: { x: -200},
}

function removeFirstAndCapitalize(str) {
    if (!str) return ""; // Return empty string if input is empty or undefined
    if(str === "/") return "Home";
    const firstLetter = str.charAt(1).toUpperCase(); // Get first letter and capitalize it
    const restOfString = str.substring(2); // Get the rest of the string
    return firstLetter + restOfString; // Concatenate the capitalized first letter with the rest of the string
}

const Curtain = ({ isVisible,pathname }) => (
    <motion.div
        initial={{ clipPath: "circle(100% at 50% 0%)" }}
        animate={{ clipPath: "circle(0% at 50% 0%)" }}
        exit={{ clipPath: "circle(100% at 50% 0%)"}}
        transition={{ duration: 1, ease: "circInOut" }}
        style={{
            background: "#141414",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
             // Corrected clipPath style

           
            transformOrigin: "top"
        }}
        className="z-[2000]"
    >
        <div className="h-full w-full flex justify-center items-center">

            <h1 className="text-9xl font-satoshi-light text-white">{removeFirstAndCapitalize(pathname)}</h1>
        </div>
       
        </motion.div>
);

// Prevents instant page opening
function FrozenRouter(props) {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

export default function Template({ children }) {
    const pathname = usePathname(); // Use pathname from usePathname
    const [curtainVisible, setCurtainVisible] = useState(true);


    return (
        <>
            {/* <Curtain isVisible={curtainVisible} pathname={pathname} /> */}
            <AnimatePresence className="bg-black" mode="wait" initial={false}>
                <motion.div
                    key={pathname} // Use pathname as the key
                    variants={pageTransitionVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    transition={transitionSettings}
                >
                    {/* Completing page exit animation and load new page */}
                    <motion.div 
                        variants={childTransition}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        transition={transitionSettings}>
                    <FrozenRouter>{children}</FrozenRouter>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </>
    );
}
