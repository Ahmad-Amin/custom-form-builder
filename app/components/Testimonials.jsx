import React from "react";

import { Carousel } from "antd";
import Image from "next/image";
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
    <div id="reviews" className=" my-10">
      <h2 className=" text-primaryText font-semibold text-2xl md:text-3xl text-center mt-20 md:mt-32">
        Customers Say Nice Things
      </h2>
      <p className=" text-sm md:text-base text-secondaryText md:w-6/12 mx-auto text-center p-3">
        We have very fair pricing policy that would benefit you and us at the
        same time. Get the free plan & if you need more - pay.
      </p>

      <Carousel autoplay className=" max-w-[700px] mx-auto my-12 mb-24 px-6 md:px-0">
        <div className="bg-[#CBE4DE] h-[275px] py-10 rounded-lg">
          <div className=" w-full h-full flex items-center flex-col gap-6 px-4 md:px-10">
            <div className=" w-12 h-12 rounded-full ">
              <Image
                src="/dummyAvatar.png"
                alt="Dummy"
                width={100}
                height={100}
              />
            </div>
            <div className=" flex flex-col gap-2 items-center">
              <p className=" text-black text-base font-semibold">
                Mike D., Web Developer
              </p>
              <p className=" text-[#2E4F4F] text-center text-sm font-semibold mt-3">
                Form Builder Pro has revolutionized the way I create forms. The
                drag-and-drop interface is incredibly intuitive, and the ability
                to export clean, well-documented React and Next.js code is a
                game changer. It&apos;s a must-have tool for any developer
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#CBE4DE] py-10 rounded-lg">
          <div className=" w-full flex items-center flex-col gap-6 px-4 md:px-10">
            <div className=" w-12 h-12 rounded-full ">
              <Image src="/woman-1.png" alt="Dummy" width={100} height={100} />
            </div>
            <div className=" flex flex-col gap-2 items-center">
              <p className=" text-black text-base font-semibold">
                Sarah K., Small Business Owner
              </p>
              <p className=" text-[#2E4F4F] text-center text-sm font-semibold mt-3">
                I&apos;m not a developer, but with Form Builder Pro, I
                don&apos;t have to be! I was able to design and deploy custom
                forms for my website without any coding knowledge. The live
                preview feature let me see exactly how my forms would look and
                function. Highly recommend it!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#CBE4DE] py-10 rounded-lg">
          <div className=" w-full flex items-center flex-col gap-6 px-4 md:px-10">
            <div className=" w-12 h-12 rounded-full">
              <Image
                src="/dummyAvatar.png"
                alt="Dummy"
                width={100}
                height={100}
              />
            </div>
            <div className=" flex flex-col gap-2 items-center">
              <p className=" text-black text-base font-semibold">
                Chris M., Web Developer
              </p>
              <p className=" text-[#2E4F4F] text-center text-sm font-semibold mt-3">
                Form Builder Pro&apos;s ability to export dynamic form code for
                React and Next.js is unmatched. It allows me to focus on other
                critical aspects of development while ensuring my forms are
                robust and maintainable. The live preview feature is an
                excellent addition, letting me see changes in real-time.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#CBE4DE] py-10 rounded-lg">
          <div className=" w-full flex items-center flex-col gap-6 px-4 md:px-10">
            <div className=" w-12 h-12 rounded-full ">
              <Image src="/woman.png" alt="Dummy" width={100} height={100} />
            </div>
            <div className=" flex flex-col gap-2 items-center">
              <p className=" text-black text-base font-semibold">
                Jessica L., Software Engineer
              </p>
              <p className=" text-[#2E4F4F] text-center text-sm font-semibold mt-3">
                Form Builder Pro is an essential tool in my development toolkit.
                The export feature is incredibly powerful, producing clean,
                modular code that&apos;s easy to integrate. The drag-and-drop
                interface simplifies the form-building process, allowing me to
                create complex forms in minutes.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
