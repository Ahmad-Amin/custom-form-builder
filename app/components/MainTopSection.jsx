"use client";
import React from "react";
import Image from "next/image";

import Typewriter from "typewriter-effect";

const MainTopSection = () => {
  return (
    <div className=" flex justify-center mt-8 md:mt-24">
      <div className=" flex flex-col gap-3">
        <div className="max-w-[900px] h-auto mx-auto">
          <Image
            src="/header.svg"
            alt="Header"
            className=" w-full h-full"
            width={100}
            height={100}
          />
        </div>
        <div className=" text-lg sm:text-2xl md:text-4xl text-center mt-3 flex flex-row justify-center">
          Create Custom React Forms &nbsp;
          <Typewriter
            options={{
              strings: ["Effortlessly", "Quickly", 'Efficiently'],
              autoStart: true,
              loop: true,
              wrapperClassName: 'font-bold'
            }}
          />
        </div>
        <p className=" mt-4 text-sm p-4 w-full md:w-9/12 mx-auto text-center text-[#888888]">
          This is not just a boiler plate, Visually create the form with
          included functionality and then export the form as a <strong className=" font-extrabold bg-[#CBE4DE] p-1 text-[#0E8388]">React Component</strong>
        </p>
        <div className=" flex justify-center mt-8">
          <button className="bg-[#0E8388] hover:bg-[#246c6e] transform transition-all duration-150 text-white rounded-md py-2 px-5 w-auto shadow-lg">
            Register Now
          </button>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-10 mt-5 md:mt-16">
          <div className=" md:w-28 w-16 h-16 md:h-28">
            <Image
              src="/react.svg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="React"
            />
          </div>
          <div className=" md:w-28 w-16 h-16 md:h-28">
            <Image
              src="/tailwind.svg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="Tailwind"
            />
          </div>
          <div className=" md:w-28 w-16 h-16 md:h-28">
            <Image
              src="/javascript.svg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="JavaScript"
            />
          </div>
          <div className=" md:w-28 w-16 h-16 md:h-28">
            <Image
              src="/css.svg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="CSS"
            />
          </div>
          <div className=" md:w-28 w-16 h-16 md:h-28">
            <Image
              src="/next.svg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTopSection;
