// TransitionCover.js

import React, { useEffect, useState } from 'react';

const TransitionCover = ({ onTransitionEnd }) => {
  const [isVisible, setIsVisible] = useState(true);
    const [display, setDisplay] = useState('block'); // Initialize display state


  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (opacity === 'opacity-0') {
      // When opacity reaches 'opacity-0', update display state to 'none'
      setDisplay('none');
    }
  }, [opacity]);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-1000 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onTransitionEnd={onTransitionEnd}
    />
  );
};

export default TransitionCover;
