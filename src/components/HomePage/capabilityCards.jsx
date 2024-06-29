import React from "react";
import Spline from "@splinetool/react-spline";
import AnimatedText from "../animatedText";
import { useRef } from "react";

function CapabilityCards({ cardVarient }) {
    const ref=useRef(null);
    return (
        <div className="CardContainer grid text-NightFall grid-cols-2 grid-rows-3 mx-24 p-2 h-[42rem] border-[1px] border-opacity-75 rounded-xl border-NightFall bg-">
            <div className="CardHeader w-full h-full grid grid-cols-2 col-span-2 row-span-1">
                <div className="mt-2">
                    <h1 className="mx-4 font-satoshi-light text-2xl">{cardVarient.cardNumber}</h1>
                    <AnimatedText once={false}  classP={"mx-12 font-satoshi-light text-LunarDawn text-9xl textC justify-center"} text={cardVarient.cardName} />
                </div>
                <div className="flex justify-end items-end ">
                <div className="flex  justify-end items-end gap-2 px-12  w-4/5 flex-row flex-wrap  tags">
                    {cardVarient.cardTags.map((tag, index) => (
                        <div key={index} className="bg-LunarDark textP text-md p-2 inline-flex justify-center font-satoshi-light items-center rounded-xl">
                            <AnimatedText once={false} smallText={true} classP={" font-satoshi-light textP text-MainBeige  justify-center"} text={tag} />
                        </div>
                    ))}
                </div>
                </div>
            </div>
            <div className="bottomRow col-span-2 grid grid-cols-3 w-full h-full row-span-2">
                <div className="CardModel w-full h-full col-span-1">
                    <Spline className=" z-[3]" scene={cardVarient.modelLink}></Spline>
                </div>
                <div className="flex justify-end items-end col-span-2 p-12">
                    <h2 className="font-satoshi-light text-LunarDark opacity-80 textP text-3xl">{cardVarient.cardDescription}</h2>
                </div>
            </div>
        </div>
    );
}

export default CapabilityCards;
