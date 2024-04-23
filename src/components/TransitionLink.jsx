import React, { useState } from 'react';
import { animate } from 'motion';
import Link from 'next/link'; // Corrected import for Next.js Link
import { useRouter } from 'next/navigation'; // Import useRouter
import Marquee from 'react-fast-marquee';



const TransitionLink = ({ to, children, className }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router=useRouter();
 

  const handleClick = async (e) => {
    e.preventDefault();
    setIsTransitioning(true);
  
    // Animate the opacity of the entire page to 0
    await animate(document.documentElement, { opacity: 0 }, { duration:1 }).finished;
  
    // Ensure the window scrolls to the top before navigating
    window.scrollTo(0, 0);
  
    try {
      // Navigate to the new route
      await router.push(to);
      // If navigation is successful, animate opacity back to 1
      animate(document.documentElement, { opacity: 1 }, { delay:1,duration: 1 });
    } catch (error) {
      console.error("Failed to navigate:", error);
    }
  
    setIsTransitioning(false); // Reset transitioning state after animation completes
  };

  // Render the link
  return (
    <Link href={to}  legacyBehavior >
      <a onClick={handleClick} className={className}>
        {children}
      </a>
    </Link>
  );
};

export default TransitionLink;
