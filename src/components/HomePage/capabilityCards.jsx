import Image from 'next/image';
import { useScroll, useTransform, motion, useInView,useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Capabilities_Data } from '@/data/Capabilities';

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

    const imageScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={container} style={{ scale: scale }} className="h-full flex border-2 border-black items-center justify-center p-24 sticky top-10 ">

            <motion.div
                ref={ref} // attaching the ref to the motion.div
                className="flex flex-col relative h-[500px] w-[1000px] "
                style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 50}px)` }}
               animate={cardAnimation}
            >
                <div className="flex h-full gap-5">
                    <div className="w-[40%] relative  ">
                        <h1 className='text-8xl p-3  z-[3] text-MainBeige font-Lora'>{title}</h1>
                        <p>{description}</p>

                    </div>

                    <div className="relative w-[60%] h-full ">
                        <div style={{ scale: imageScale }} className="w-full h-full">
                            <Image
                                height={500}
                                width={500}
                                src={`/${src}`}
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Card;
