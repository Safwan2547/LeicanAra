import React from 'react';
import TarotCard from './TarotCard';
import { Capabilities_Data } from '@/data/Capabilities';

const TarotSection = () => {
    return (
        <div className="tarot-section flex justify-around flex-col ">
            <h1 className="text-9xl font-Lora text-NightFall m-24 text-center">What We Do</h1>
            <div className='flex-row buttonC flex w-screen justify-center items-center gap-12'>

            
            {Capabilities_Data.map((item, index) => (
                <TarotCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    src={item.src}
                />
            ))}

            </div>
        </div>
    );
};

export default TarotSection;
