"use client";
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    return () => {
      () => showNavigation(false);
    };
  });

  return (
    <div className=" flex flex-col md:flex-row justify-between p-6 md:p-8 md:px-20">
      <div className=" flex flex-row justify-between">
        <div className="text-[#2E4F4F] font-extrabold text-2xl items-center justify-center flex">
          Custom Form Builder
        </div>
        <div className=" md:hidden">
          <Bars3Icon
            onClick={() => setShowNavigation(true)}
            width={25}
            className={`font-semibold ${
              showNavigation ? "hidden" : "block"
            }`}
          />
          <XMarkIcon
            onClick={() => setShowNavigation(false)}
            width={25}
            className={`font-semibold ${
              showNavigation ? "block" : "hidden"
            }`}
          />
        </div>
      </div>
      <div className="hidden md:flex flex-row gap-8 items-center mt-5">
        <a
          href="#features"
          className=" hover:text-[#2E4F4F] duration-150 transform transition-all hover:underline"
        >
          Features
        </a>
        <a
          href="#reviews"
          className=" hover:text-[#2E4F4F] duration-150 transform transition-all hover:underline"
        >
          Reviews
        </a>
        <a
          href="#pricing"
          className=" hover:text-[#2E4F4F] duration-150 transform transition-all hover:underline"
        >
          Pricing
        </a>
        <button className="bg-[#0E8388] hover:bg-[#246c6e] transform transition-all duration-150 text-white rounded-md py-1 px-5 w-auto shadow-lg">
          Sign Up
        </button>
      </div>

      <div
        className={`flex flex-col gap-2 mt-3 overflow-hidden transform md:hidden transition-all duration-200 ${
          showNavigation ? "h-32" : "h-0"
        } `}
      >
        <a
          href="#features"
          className=" hover:text-[#2E4F4F] duration-150 transform transition-all hover:underline"
        >
          Features
        </a>
        <a
          href="#reviews"
          className=" hover:text-[#2E4F4F] duration-150 transform transition-all hover:underline"
        >
          Reviews
        </a>
        <a
          href="#pricing"
          className=" hover:text-[#2E4F4F] duration-150 transform transition-all hover:underline"
        >
          Pricing
        </a>
        <button className="bg-[#0E8388] hover:bg-[#246c6e] transform transition-all duration-150 text-white rounded-md py-1 px-5 w-auto shadow-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
