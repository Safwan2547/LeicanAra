// Import React and useEffect hook from React library
import React, { useEffect } from 'react';

// Import animate and spring functions from "motion" library
import { animate, spring } from "motion";

// Define the MouseParallax component
function MouseParallax() {
  let parallaxElements;
  // Use the useEffect hook to perform side effects in function components
  useEffect(() => {
    // Select all elements with the class 'mouseParallax' and convert the NodeList to an array
     parallaxElements = Array.from(document.querySelectorAll('.mouseParallax'));
    
    // Calculate the center coordinates of the viewport
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Set the parallax factor, debounce delay, animation frame ID, and last mouse update time
    const parallaxFactor = 0.02;
    let animationFrameId;
    let lastMouseUpdateTime = 0;
    const debounceDelay = 12;

    // Define a debounce function to limit the frequency of mousemove events
    const debounce = (func, delay) => {
      let timer;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    };

    // Define the mousemove event handler
    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      if (currentTime - lastMouseUpdateTime > debounceDelay) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          const xVal = e.clientX;
          const yVal = e.clientY;
          // Calculate the distance between each element and the viewport center
          parallaxElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const elementCenterX = rect.left + rect.width / 2;
            const elementCenterY = rect.top + rect.height / 2;
            const distance = Math.sqrt((elementCenterX - xVal) ** 2 + (elementCenterY - yVal) ** 2);
            element.distanceToViewportCenter = distance;
          });
          // Sort elements based on their distance to the viewport center
          parallaxElements.sort((a, b) => a.distanceToViewportCenter - b.distanceToViewportCenter);
          // Apply the parallax effect only to the five closest elements
          const closestElements = parallaxElements.slice(0, 3);
           closestElements.forEach((element) => {
        const xDisplacement = xVal - centerX;
        const yDisplacement = yVal - centerY;
        const xParallax = xDisplacement;
        const yParallax = yDisplacement;
        const speed = element.dataset.speed || 1;
        // Animate the element's translation based on the parallax effect
        animate(element, {
          translateX: xParallax * parallaxFactor * speed,
          translateY: yParallax * parallaxFactor * speed,
        }, {
          easing: spring({ mass: 10, stiffness: 300, damping: 500 }),
        });
      });
      // Log the closest elements
     
    });
    lastMouseUpdateTime = currentTime;
      }

    };

    // Apply debounce to the mousemove event handler
    const debouncedMouseMove = debounce(handleMouseMove, debounceDelay);

    // Add event listener for mousemove events
    window.addEventListener('mousemove', debouncedMouseMove);
 document.addEventListener('keydown', (event) => {
        if (event.code === 'a') {
          console.log('Closest elements:', closestElements);
        }});
    // Clean up function to remove event listener and cancel animation frame
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', debouncedMouseMove);
    };
  }, [parallaxElements]);

  // Return null as this component does not render any JSX
  return null;
}

// Export the MouseParallax component as the default export
export default MouseParallax;
