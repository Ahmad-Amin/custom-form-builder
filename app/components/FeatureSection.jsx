import Image from "next/image";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="bg-[#EEEEEE] my-10 p-5 pt-10 md:p-10 md:py-20">
      <div>
        <h2 className=" text-3xl font-semibold text-center">
          React Form Builder
        </h2>
        <p className=" text-secondaryText md:w-8/12 lg:w-6/12 text-center mx-auto mt-8">
          Introducing our cutting-edge Form Builder – a powerful yet intuitive
          tool designed to streamline your form creation process. Whether
          you&apos;re a developer, designer, or a business owner, our Form
          Builder offers a seamless experience to create dynamic and fully
          customizable forms without writing a single line of code. Plus, export
          your forms as dynamic boilerplate code for React and Next.js
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 xl:px-44 mt-12 rounded-md">
        <div className=" bg-white p-6 rounded-lg flex flex-col items-center shadow-md hover:-translate-y-1 hover:scale-105 duration-200 transition-all cursor-pointer">
          <div className=" bg-[#EFEFEF] inline-block p-5 rounded-full mb-6">
            <div className=" w-16 h-16">
              <Image
                src="/bell.svg"
                alt="bell"
                className=" w-full h-full"
                width={100}
                height={100}
              />
            </div>
          </div>
          <h3 className=" text-primaryText font-semibold text-center text-2xl">
            Save Time and Effort
          </h3>
          <p className=" text-secondaryText px-3 text-center mt-8">
            Reduce your development time and focus on what matters most. Our
            Form Builder simplifies the form creation process,
          </p>
        </div>

        <div className=" bg-white p-6 rounded-lg flex flex-col items-center shadow-md hover:-translate-y-1 hover:scale-105 duration-200 transition-all cursor-pointer">
          <div className=" bg-[#EFEFEF] inline-block p-5 rounded-full mb-6">
            <div className=" w-16 h-16">
              <Image
                src="/bell.svg"
                alt="bell"
                className=" w-full h-full"
                width={100}
                height={100}
              />
            </div>
          </div>
          <h3 className=" text-primaryText font-semibold text-center text-2xl">
            Drag-and-Drop Interface
          </h3>
          <p className=" text-secondaryText px-3 text-center mt-8">
            Build forms in a flash with our user-friendly drag-and-drop
            interface and easily export it
          </p>
        </div>

        <div className=" bg-white p-6 rounded-lg flex flex-col items-center shadow-md hover:-translate-y-1 hover:scale-105 duration-200 transition-all cursor-pointer">
          <div className=" bg-[#EFEFEF] inline-block p-5 rounded-full mb-6">
            <div className=" w-16 h-16">
              <Image
                src="/bell.svg"
                alt="bell"
                className=" w-full h-full"
                width={100}
                height={100}
              />
            </div>
          </div>
          <h3 className=" text-primaryText font-semibold text-center text-2xl">
            User-Friendly Interface
          </h3>
          <p className=" text-secondaryText px-3 text-center mt-8">
            Our intuitive interface is designed for users of all skill levels.
            Whether you&apos;re a seasoned developer or a newbie, you&apos;ll
            find it easy to create forms with our tool.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
