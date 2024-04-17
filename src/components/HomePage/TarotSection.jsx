import React from 'react';
import TarotCard from './TarotCard';
import { Capabilities_Data } from '@/data/Capabilities';
import { Parallax } from 'react-scroll-parallax';

const TarotSection = () => {
    return (
        <div className="tarot-section flex justify-between flex-col ">
            <Parallax easing={"easeInOutCirc"} scale={[0.7,1]} speed={5}>
            <h1 className="text-9xl font-Lora text-NightFall m-24 text-center">What We Do</h1>
            </Parallax>
            <div className='flex-row  flex w-screen  justify-center items-center gap-8'>

            
            {Capabilities_Data.map((item, index) => (

                <TarotCard
                    key={index}
                    header={item.title}
                    text={item.description}
                    src={item.src}
                    ParallaxStr={index}
                />
            ))}
             

            </div>
            {/* <h3 className='text-4xl font-satoshi-light text-NightFall m-12 opacity-70 text-center'>Click Cards to reveal </h3> */}
        </div>
    );
};

export default TarotSection;
