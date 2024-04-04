import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import img1 from '/public/Mockup 3.webp';
import img2 from '/public/Magazine.webp';
import img3 from '/public/output_file.webp';
import img4 from '/public/Ecostellar v4.webp';
import img5 from '/public/StarFall Logo Showcase v4.webp';
import img6 from '/public/Container-Mockup.webp';



function ImageFloater() {
  const imgArray = [img1, img2, img3,img4,img5,img6];
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Added state to keep track of the current index


  const handleOnClick = (e) => {

    // Calculate a random end position within a range
  const maxY = -50; // Max vertical movement range, adjust as needed
  
  

    const imageKey = Math.random(); // Unique key for React list rendering
// Apply boundary conditions

    const newImage = {
      src: imgArray[currentIndex],
      x: e.clientX -100 ,
      y: e.clientY -100,
      rotate: Math.random() * 120 - 60, // Adjusts the range to -90 to 90
      maxY, // Random end Y position
      key: imageKey,
    };
    setCurrentIndex((currentIndex + 1) % imgArray.length);

    if (images.length >= 2) {
        setImages(currentImages => currentImages.slice(1));
        setTimeout(() => {setImages(currentImages => [...currentImages, newImage]);
        },500);

      
    }
    else{
      setImages(currentImages => [...currentImages, newImage]);
      console.log(images.length)


    }

    // Schedule the removal of this image after 3 seconds
    setTimeout(() => {
      setImages(currentImages => currentImages.filter(image => image.key !== imageKey));
    }, 2000);
  };

  // Cleanup on component unmount to prevent memory leaks
  useEffect(() => {
    
    return () => {
      setImages([]); // Clear images array
    };
  }, []);

  const imageVariants = {
    initial: (image) => ({
     
      clipPath: "circle(0% at 0% 0)",
      x: image.x,
      y: image.y,
      rotate: image.rotate,
    }),
    animate: (image) => ({
      scale: 0.7,
      clipPath: "circle(150% at 0% 0)",
      y: image.y + image.maxY,
      rotate: image.rotate,
      transition: {
        scale: { duration: 1, ease: "anticipate" },
        clipPath: { duration: 1, ease: "anticipate" },
        x: { duration: 3, ease: "easeInOut"},
        y: { duration: 3, ease: "easeOut" },
      },
    }),
    exit: {
      scale: 0,
      clipPath: "circle(0% at 0% 0)",
      transition: { duration: 1, ease: "circInOut" },
    },
  };

  return (
    <div id='imageFloater' className="w-screen imageFloater h-screen overflow-hidden absolute z-[19]" onClick={handleOnClick}>
      <AnimatePresence>
        {images.map((image) => (
          <motion.div
            className="absolute z-[21]"
            key={image.key}

          
            alt="Dynamic"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={image}
          >
          <Image src={image.src} alt="Dynamic" width={600}    />

          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ImageFloater;
