import Image from 'next/image'
import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

const Plans = () => {
  return (
    <div id='pricing' className=' grid md:grid-cols-2 my-32'>
      <div className=' flex justify-center flex-col'>
        <div className=' w-auto'>
          <h2 className=' text-primaryText font-semibold text-2xl md:text-3xl text-center px-3 md:px-0 '>The Right Plan for Your Business</h2>
          <p className=" text-secondaryText md:w-8/12 mx-auto text-start p-3">
            Get Form Builder Pro Today and Simplify Your Form Creation Process! Experience the power of effortless form building with our all-in-one solution. Whether you&apos;re a developer looking to streamline your workflow with exportable code or a business owner needing intuitive, custom forms, Form Builder Pro provides the tools and features you need to create professional, functional forms with ease. Design, preview, and deploy forms that fit your exact requirements, all without writing a single line of code.
          </p>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-start gap-6 rounded-md">
        <div className=" bg-[#CBE4DE] rounded-xl flex flex-col items-center shadow-lg w-auto md:w-[600px]">
          <div className=' w-full p-6'>
            <div className=' flex flex-row items-center gap-3 justify-between'>
              <p className=' text-lg text-primaryText font-bold'>Best Developer Suit</p>
              <p className=' bg-[#0E8388] text-lg text-white font-bold px-2 py-1 rounded-lg '>Life Time Access</p>
            </div>
            <p className=' text-secondaryText text-base mt-1'>Best for personal use</p>

            <div className=' flex flex-row gap-2 items-end mt-10' >
              <p className=' text-5xl font-black'>$19.99</p><p className=' text-sm text-secondaryText'></p>
            </div>

            <Link href='#getStarted'>
              <button className='bg-[#0E8388] hover:bg-[#246c6e] transform transition-all duration-150 text-white rounded-md py-3 my-7 w-full shadow-lg'>Get Started</button>
            </Link>



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