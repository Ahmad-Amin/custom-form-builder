import Image from 'next/image'
import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Plans = () => {
  return (
    <div id='pricing' className=' my-16'>
      <h2 className=' text-primaryText font-semibold text-2xl md:text-3xl text-center mt-24 px-3 md:px-0'>The Right Plan for Your Business</h2>
      <p className=" text-secondaryText md:w-8/12 mx-auto text-center p-3">
        Get Form Builder Pro Today and Simplify Your Form Creation Process! Experience the power of effortless form building with our all-in-one solution. Whether you&apos;re a developer looking to streamline your workflow with exportable code or a business owner needing intuitive, custom forms, Form Builder Pro provides the tools and features you need to create professional, functional forms with ease. Design, preview, and deploy forms that fit your exact requirements, all without writing a single line of code.
      </p>

      <div className=" flex flex-col md:flex-row items-center justify-center gap-6 px-6 xl:px-44 my-20 rounded-md">

        <div className=" bg-[#CBE4DE] rounded-xl flex flex-col items-center shadow-lg w-auto md:w-[600px]">
          <div className=' w-full p-6'>
            <p className=' text-lg text-primaryText font-bold'>Best Developer Suit</p>
            <p className=' text-secondaryText text-base mt-1'>Best for personal use</p>

            <div className=' flex flex-row gap-2 items-end mt-10' >
              <p className=' text-5xl font-black'>$39.99</p><p className=' text-sm text-secondaryText'>/per month</p>
            </div>

            <button className='bg-[#0E8388] hover:bg-[#246c6e] transform transition-all duration-150 text-white rounded-md py-3 my-7 w-full shadow-lg'>Get Started</button>


            <div className=' mt-5'>
              <p className=' text-lg text-primaryText font-bold'>Features</p>
              <ul className=' flex flex-col gap-2 ml-6 mt-6'>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Drag-and-Drop Interface</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Real-Time Live Preview</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Exportable Code for React/Next.js</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Form Templates and Grouping</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Custom Styling with Tailwind CSS</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Ready-to-use Component</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Lifetime Updates and Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans