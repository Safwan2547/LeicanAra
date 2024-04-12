import Image from 'next/image';
import { useScroll, useTransform, motion, useInView,useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Capabilities_Data } from '@/data/Capabilities';
import SmoothScroll from '../smoothScroll';

const Card = ({ title, description, src, url, color, i, progress, range, targetScale }) => {
    const scale = useTransform(progress, range, [1, targetScale]);
    const container = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(ref,{
        once: true, // animation triggers only once
        threshold: 0.1 // at least 50% of the element must be visible
    });

    const { scrollYProgress } = useScroll({
        target: container.current,
        offset: ["start end", "start start"],
  
    });

    const cardAnimation=useAnimation();

    // useInView hook to track if the card is in view
 

    useEffect(() => {
        if (isInView) {
            cardAnimation.start({ clipPath: ["circle(0% at 0% 0)", "circle(150% at 0% 0)"],transition:{duration:1,ease:"anticipate"} });
        }
    },[cardAnimation,isInView])

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div ref={container} style={{scale:scale,top: `calc(5vh + ${i * 120}px)` }} className="h-full flex border-2 border-black items-center justify-center  sticky  ">

            <motion.div
                ref={ref} // attaching the ref to the motion.div
                className="flex flex-col justify-center items-center relative h-[50vw] w-[90vw] "
                style={{ backgroundColor:color,scale:scale }}
               animate={cardAnimation}
            >
                <div className='h-[30%] items-center border-2 border-green-500 w-full flex pt-5 flex-col'>

                <h1 className='text-9xl  z-[3] text-#808080 font-satoshi-normal'>{title}</h1>
                </div>
               
                <div className="flex h-full gap-48">
                
                    <div className="w-[40%] flex justify-center items-center relative  ">
                        
                        <p className='text-xl font-satoshi-light'>{description}</p>

                    </div>

                    
                        <div style={{ scale: imageScale }} className="w-full object-fit h-full">
                            <Image
                                height={1000}
                                width={500}
                                src={`/${src}`}
                                alt="image"
                            />
                        </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Card;
