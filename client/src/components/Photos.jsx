import React, { useState } from "react";
import MidPhoto from "../images/MidPhoto.png";
import Dotted from "../images/dotted.png";
import Left from "../images/left.jpg";
import Right from "../images/right.jpg";
import { BsDeviceHdd } from "react-icons/bs";
export default function Photos() {
  const [isComplete, setIsComplete] = useState(false);
  const handleAnimate = () => {
    setIsComplete(true);
  };

  console.log(isComplete);
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20 relative">
      <div className="relative top-0 w-[80%] lg:block hidden">
        <div className="h-[300px] w-[600px] bg-[#85B1CC] rounded-full blur-3xl opacity-50 absolute right-5 top-[-20px]"></div>
        <div className="h-[300px] w-[600px] bg-[#85B1CC] rounded-full blur-3xl opacity-50 absolute left-6"></div>
      </div>
      <BsDeviceHdd className="text-5xl text-gray-600 rotate-[45deg] absolute top-0 right-[180px]  " />
      <div
        className="flex justify-center items-center z-10 relative"
        onAnimationEnd={handleAnimate}>
        <img
          src={MidPhoto}
          alt="animation"
          className="w-[90%] lg:w-[80%] lg:h-[600px] rounded-xl  shadow-[1px_-17px_26px_1px_rgba(133,177,204,0.9)] lg:shadow-none m-3"
        />
        <img
          src={Left}
          alt="animation"
          className={`absolute w-[500px] h-[700px] object-cover rounded-md shadow-lg animate-posTransitionLeft  hidden lg:block shadow-gradient-to-b from-transparent via-white to-gray-300 ${
            isComplete ? "left-[-100px] , top-[100px]" : ""
          }`}
        />
        <div
          className={`absolute w-[500px] h-[700px] object-cover rounded-md shadow-lg animate-posTransitionLeft  hidden lg:block opacity-40 bg-gradient-to-b from-transparent via-white to-gray-300 ${
            isComplete ? "left-[-100px] , top-[100px]" : ""
          }`}></div>

        <img
          src={Right}
          alt="animation"
          className={`absolute w-[500px] h-[600px] object-cover rounded-md animate-posTransitionRight hidden lg:block  shadow-lg shadow-gradient-to-b from-transparent via-white to-gray-300 ${
            isComplete ? "right-[-100px] , top-[100px]" : ""
          }`}
        />
        <div
          className={`absolute w-[500px] h-[600px] rounded-md animate-posTransitionRight hidden lg:block  opacity-40 bg-gradient-to-b from-transparent via-white to-gray-300 ${
            isComplete ? "right-[-100px] , top-[100px]" : ""
          }`}></div>
      </div>
    </div>
  );
}
