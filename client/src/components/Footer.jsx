import React from "react";
import Logo from "../images/logo.jpg"
import { AiOutlineCopyrightCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="w-full z-20 relative mt-[100px] flex flex-col items-center">
      <div className="z-20 w-full h-[200px] bg-white border-t-[1px] blur-[150px]"></div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex items-center gap-1">
          <AiOutlineCopyrightCircle />
          <span>Copy rights</span>
        </div>
        <li className="list-none">Terms and Conditions</li>
      </div>

      <div className="flex items-center gap-2 md:gap-4 mt-8 mb-8">
        <img
          src={Logo}
          alt="logo"
          className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full  "
        />
        <h1 className="text-4xl lg:text-5xl font-bold text-[#3B5594] hidden md:block">
          Fries
        </h1>
      </div>
    </div>
  );
}
