import React from "react";
import { animate, inView } from "motion";

function Capabilities() {
  const listClass = "my-4 ml-20 list-item font-Satoshi text-2xl";
  const borderCheck=true;
  const border="border-2 border-black border-solid";
  
  return (
    <div className={`flex flex-col gap-4 mt-20  relative ${borderCheck? border: ""} justify-center  h-[70vh]`}>
      <div className=" flex justify-center p-10 items-center ">
        <h1 className="text-5xl font-Lora font-normal">Capabilities</h1>
      </div>
      <div className="flex-row  flex relative justify-center pt-2 items-center ">
      <div className="w-96 h-[30rem] flex justify-center items-end border-2 border-black">
       <div className="w-72 h-[26rem] z-1 transition-all duration-1000 hover:scale-110 bg-MainBeige border-2 border-black"></div>
       <h1 className=" font-satoshi-normal text-LunarDawn z-3 text-6xl pt-3 top-0 absolute">Design </h1>

       </div>
      </div>
    </div>
  );
}

export default Capabilities;
