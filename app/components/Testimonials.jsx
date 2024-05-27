import React from "react";

import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Testimonials = () => {
  return (
    <div id='reviews' className=" my-10">
      <h2 className=" text-primaryText font-semibold text-2xl md:text-3xl text-center mt-20 md:mt-32">
        Customers Say Nice Things
      </h2>
      <p className=" text-secondaryText md:w-6/12 mx-auto text-center p-3">
        We have very fair pricing policy that would benefit you and us at the
        same time. Get the free plan & if you need more - pay.
      </p>

      <Carousel className=" max-w-[700px] mx-auto my-12 mb-24 px-6 md:px-0">
        <div className="bg-[#CBE4DE] py-10 rounded-lg">
          <div className=" w-full flex items-center flex-col gap-6 px-10">
            <div className=" w-12 h-12 rounded-full bg-[#2E4F4F]"></div>
            <div className=" flex flex-col gap-2 items-center">
              <p className=" text-black text-base font-semibold">Mike D., Web Developer</p>
              <p className=" text-[#2E4F4F] text-center text-sm font-semibold mt-3">
                &ldquo;I love the drag-and-drop interface and the ability to
                customize validation rules. The export feature for React and
                Next.js is a lifesaver!&ldquo;
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#CBE4DE] py-10 rounded-lg">
          <div className=" w-full flex items-center flex-col gap-6 px-10">
            <div className=" w-12 h-12 rounded-full bg-[#2E4F4F]"></div>
            <div className=" flex flex-col gap-2 items-center">
              <p className=" text-black text-base font-semibold">Mike D., Web Developer</p>
              <p className=" text-[#2E4F4F] text-center text-sm font-semibold mt-3">
                &ldquo;I love the drag-and-drop interface and the ability to
                customize validation rules. The export feature for React and
                Next.js is a lifesaver!&ldquo;
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#CBE4DE] py-10 rounded-lg">
          <div className=" w-full flex items-center flex-col gap-6 px-10">
            <div className=" w-12 h-12 rounded-full bg-[#2E4F4F]"></div>
            <div className=" flex flex-col gap-2 items-center">
              <p className=" text-black text-base font-semibold">Mike D., Web Developer</p>
              <p className=" text-[#2E4F4F] text-center text-sm font-semibold mt-3">
                &ldquo;I love the drag-and-drop interface and the ability to
                customize validation rules. The export feature for React and
                Next.js is a lifesaver!&ldquo;
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#CBE4DE] py-10 rounded-lg">
          <div className=" w-full flex items-center flex-col gap-6 px-10">
            <div className=" w-12 h-12 rounded-full bg-[#2E4F4F]"></div>
            <div className=" flex flex-col gap-2 items-center">
              <p className=" text-black text-base font-semibold">Mike D., Web Developer</p>
              <p className=" text-[#2E4F4F] text-center text-sm font-semibold mt-3">
                &ldquo;I love the drag-and-drop interface and the ability to
                customize validation rules. The export feature for React and
                Next.js is a lifesaver!&ldquo;
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
