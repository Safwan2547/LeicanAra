import React,{useEffect} from "react";
import {animate,inView} from "motion";

function CallToAction(){

    const ctaAnimate=(target,baseVal)=>{
        animate(
            target.querySelector('h1'),
            { opacity: baseVal,transform:`scale(${baseVal==1?1:0.99})` },
            {  duration: 0.5,delay:0.5, easing:"ease-in-out" }
          );
    
        animate(
          target.querySelector('a'),
          { opacity: baseVal,transform: `scale(${baseVal==1?1:0.99})` },
          {  duration: 0.5,delay:0.7, easing:"ease-in-out" }
        );



    }

    useEffect(()=>{
        inView("#cta", ({ target }) => {
    
        ctaAnimate(target,1);

        return ()=>{ctaAnimate(target,0);}});
    
    
        });



return(<div className=" border-black border-0 border-solid flex justify-center items-center h-[50vh] w-[100%]  ">


    {/* Header text */}
    <div id="cta" className=" pt-10 text-NightFall w-[95%]  flex flex-wrap 
    flex-col items-center sm:items-start justify-center align-top     ">
        <h1 className="text-4xl sm:text-5xl textC font-Lora font-light opacity-0 text-NightFall mb-10 text-center">Ready to turn your ideas into art?</h1>
        <a href="#" className=" opacity-0  underline hover:animate-pulse-slow buttonC hover:scale-105 hover:text-LunarDawn transition-color
         cursor-none font-satoshi-light underline-offset-4  text-NightFall text-left text-3xl sm:text-4xl">Lets work together!</a>

    </div>







</div>);




}

export default CallToAction;