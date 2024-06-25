/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex flex-col gap-12 md:h-[90vh] sm:my-16 md:my-0 lg:flex-row justify-between items-center">
      <div className="flex flex-col gap-12">
        <div className="text-white text-center lg:text-start text-2xl md:text-5xl space-y-4 font-bold">
          <h2>Hello !</h2>
          <h2>
          I'm <span className="text-[#2EB2D3]"></span>
          <TypeAnimation
      sequence={[
         
        'Frontend Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'React Developer',
        1000,
        'MERN Developer',
        1000,
       
      ]}
      wrapper="span"
      speed={1}
      style={{  display: 'inline-block',color:"#2EB2D3" }}
      repeat={Infinity}
    />
           
          </h2>
          <h2>Akm Nahid Bin Wadood</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="">
            <button className="md:font-semibold bg-[#2EB2D3] px-12 py-2 md:px-12 md:py-4 text-white rounded-full">
              Hire me
            </button>
          </div>
          <div className="">
            <button className="md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-12 md:py-4   rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="rounded-full"
          height="640"
          width="540"
          alt="myProfile"
          src="/assets/myProfile.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
