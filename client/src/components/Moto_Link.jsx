import React from "react";

export default function Moto_Link() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:p-9 mt-9">
      <div className="font-bold flex flex-col items-center gap-2 text-[#223563] mt-6">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center">Learn more from videos with AI</h1>
        <h2 className="text-md md:text-xl lg:text-3xl text-center">
          Get a summary . Ask questions . Quiz yourself.
        </h2>
      </div>

      <div className="mt-10 lg:mt-16 w-full lg:w-[50%] gap-1 flex justify-center">
        <input
          placeholder="Enter the video link"
          type="link"
          className="p-2 lg:p-4 border-[2px] md:w-[50%] lg:w-[80%] border-[#3B5594] rounded-lg"
        />
        <button className="p-2 lg:p-4 bg-[#3B5594] font-bold rounded-lg text-white focus:outline-none text-[10px] lg:text-[18px]">
          Get started
        </button>
      </div>
    </div>
  );
}
