import React from 'react';
import TarotCard from './TarotCard';
import { Capabilities_Data } from '@/data/Capabilities';

const TarotSection = () => {
    return (
        <div className="tarot-section flex justify-between flex-col ">
            <h1 className="text-9xl font-Lora text-NightFall m-24 text-center">What We Do</h1>
            <div className='flex-row buttonC flex w-screen p-12 justify-center items-center gap-8'>

            
            {Capabilities_Data.map((item, index) => (
                <TarotCard
                    key={index}
                    header={item.title}
                    text={item.description}
                    src={item.src}
                />
            ))}

            </div>
        </div>
    );
};

export default TarotSection;
