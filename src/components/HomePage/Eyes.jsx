import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ParallaxBanner,Parallax } from 'react-scroll-parallax';
import Marquee from 'react-fast-marquee';

const Eyes = () => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        setIsInView(true);
    }, []);

    return (
        <div className='w-full p-12 firstChild flex justify-center items-center  flex-col relative'>
            <Parallax easing={"easeOutCirc"} opacity={[0, 1]} speed={-3} scale={[0.7, 1]} className=' w-[120vw]'>

                <Marquee autoFill={true} speed={25} className='text-NightFall   font-Lora  text-3xl mb-24  h-[22rem] w-full  sm:text-[16rem]'>&nbsp; The Mission &nbsp;
                    
                </Marquee>
            </Parallax>
            <div className='w-full flex'>
            <div className='flex justify-center flex-col'>
               
                <h1 className='textC font-satoshi-regular self-center text-[10rem] max-h-[160vh] leading-[14rem] text-LunarDawn max-w-[35rem]'>
                        <span className='opacity-70 text-NightFall font-satoshi-light text-6xl'>To get</span> eyes <br></br> <span className='opacity-70 font-satoshi-light text-NightFall text-6xl'>on your</span> brand.
                </h1>
            </div>

            <div className='flex flex-col justify-center items-center h-2/3 gap-12 max-h-[150vh] w-[80%]'>
                <ParallaxBanner
                    layers={[{ image: '/LeicanAra-eyes1.jpg', translateX: [0, 10], scale: [0.9, 1], speed: -5 }]}
                    className="aspect-[3/1] mt-12"
                />
                <ParallaxBanner
                    layers={[{ image: '/leicanAra-eyes2.jpg', translateX: [0, 10], scale: [0.9, 1], speed: -10 }]}
                    className="aspect-[3/1] -scale-x-100 mt-12"
                />
                <ParallaxBanner
                    layers={[{ image: '/LeicanAra-eyes3.jpg', translateX: [0, 10], scale: [0.9, 1], speed: -15 }]}
                    className="aspect-[3/1] mt-12"
                />
            </div>
            </div>
        </div>
    );
};

export default Eyes;
