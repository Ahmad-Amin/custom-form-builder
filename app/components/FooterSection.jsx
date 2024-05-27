import React from "react";

const FooterSection = () => {
  return (
    <div className="bg-[#CBE4DE] py-20 px-6">
      <div>
        <p className=" text-center text-sm mb-4 text-[#2E4F4F]">
          GRAB ARRAY FOR BEST PRICE TODAY
        </p>
        <p className=" text-[#2E4F4F] font-semibold text-2xl md:text-4xl w-full md:w-7/12 mx-auto text-center">
          We also do customization, let&apos;s connect via email if you need
          more customization
        </p>
        <div className=" text-center w-full flex justify-center mt-12">
          <div className=" flex flex-col gap-3 w-full items-center">
            <div className="w-96">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className=" placeholder:text-[#AAAAAA] border border-[#2E4F4F] rounded-md p-2 w-full"
              />
            </div>
            <div className="w-96">
              <button className="bg-[#0E8388] hover:bg-[#246c6e] transform transition-all duration-150 text-white rounded-md py-2 px-5 w-full">
                Let&apos;s connect
              </button>
            </div>
          </div>
        </div>
        <p className=" text-center text-secondaryText text-sm mt-5">We will get back to you. Hang on Tight</p>
      </div>
    </div>
  );
};

export default FooterSection;
