import React from "react";
import { animate,spring } from "motion";
import { useEffect } from "react";
//This component is for making elements float on the page
//Animated using Motion

export const float=()=>{
    useEffect(() => {
    // Generates a random float value between min and max
    const randomFloat = (min, max) => {
        return Math.random() * (max - min) + min;};

    // Select all elements with the class "float"
    const targets = document.getElementsByClassName('floater');

     // Function to animate a given element with a floating effect
     const animateElement = (element) => {
        animate(element, {
          transform: [
            `translate(${randomFloat(-10, 10)}px, ${randomFloat(-10, 10)}px)`,
            `translate(${randomFloat(-10, 10)}px, ${randomFloat(-10, 10)}px)`
          ]
        }, {
          duration: 2000,
          loop: true,
          direction: 'alternate',
          easing: spring({ mass: 1, stiffness: 10, damping: 200 })
        });}
    })
}
      