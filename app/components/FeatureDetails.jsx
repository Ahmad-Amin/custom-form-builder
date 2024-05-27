"use client";
import Image from "next/image";
import React from "react";

import OfficeWorkingAnimation from "../../app/animations/office-working.json";
import OfficeWorkingAnimation2 from "../../app/animations/office-working2.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const FeatureDetails = () => {
  return (
    <div id="features" className=" my-12">
      <h2 className=" text-primaryText font-semibold text-xl md:text-3xl text-center mt-8">
        Effortlessly Design, Customize, and Export Forms in Minutes.
      </h2>
      <p className=" text-sm md:text-base text-secondaryText md:w-6/12 mx-auto text-center mt-1 p-3">
        Ready to streamline your form creation process? Get started with our
        Form Builder today and experience the ease of designing, customizing,
        and exporting forms like never before.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:gap-40 mt-10 md:mt-3">
        <div className=" w-full h-full flex justify-end items-center">
          <div className=" md:w-8/12 lg:w-6/12 p-6 md:p-0">
            <h3 className=" text-primaryText font-semibold text-2xl inline-block">
              Real-Time Preview
            </h3>
            <p className="text-sm md:text-base text-secondaryText mt-2">
              See changes in real-time with our live preview feature. Instantly
              view how your form will look and function as you build it. No more
              guessing or constant switching between design and preview modes.
              Our intuitive interface ensures that every adjustment you make is
              immediately visible, allowing for precise and efficient form
              creation
            </p>
          </div>
        </div>
        <div className=" max-w-[500px] max-h-[500px] mx-auto md:mx-0 px-6 md:px-0">
          <Lottie animationData={OfficeWorkingAnimation2} loop={true} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:gap-40 mt-3 md:mt-0">
        <div className="flex md:justify-end justify-start order-2 md:order-1">
          <div className="max-w-[450px] max-h-[450px] mx-auto md:mx-0 p-6 md:px-0">
            <Lottie animationData={OfficeWorkingAnimation} loop={true} />
          </div>
        </div>
        <div className="w-full h-full flex md:justify-start justify-center items-center order-1 md:order-2">
          <div className="md:w-10/12 lg:w-6/12 p-6 md:p-0">
            <h3 className="text-primaryText font-semibold text-2xl inline-block">
              Exportable Code For React/Next{" "}
            </h3>
            <p className="text-sm md:text-base text-secondaryText mt-2">
              Easily integrate your form into a larger project. Export your form
              as clean, well-documented code for React and Next.js, ensuring
              compatibility and ease of use. Jumpstart your development process
              with a dynamic form boilerplate that saves you time and effort.
              Our export feature provides structured and efficient code that
              fits seamlessly into your existing workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
