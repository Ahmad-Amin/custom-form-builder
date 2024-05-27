import Image from 'next/image'
import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Plans = () => {
  return (
    <div id='pricing' className=' my-16'>
      <h2 className=' text-primaryText font-semibold text-2xl md:text-3xl text-center mt-24'>The Right Plan for Your Business</h2>
      <p className=" text-secondaryText md:w-6/12 mx-auto text-center p-3">
        We have several powerful plans to showcase your business and get discovered
        as a creative entrepreneurs. Everything you need.
      </p>

      <div className=" flex flex-col md:flex-row items-center justify-center gap-6 px-6 xl:px-44 my-20 rounded-md">
        <div className=" bg-white rounded-xl flex flex-col items-center shadow-lg w-[350px]">
          <div className=' w-full p-6'>
            <p className=' text-lg text-primaryText font-bold'>Basic</p>
            <p className=' text-secondaryText text-base mt-1'>Best for personal use</p>

            <div className=' flex flex-row gap-2 items-end mt-10' >
              <p className=' text-5xl font-black'>$20</p><p className=' text-sm text-secondaryText'>/per month</p>
            </div>

            <button className=' w-full rounded-lg py-3 my-7 hover:text-primaryText shadow-md bg-[#EEEEEE] hover:bg-[#cfcece] duration-150 transform transition-all'>Get Started</button>


            <div className=' mt-5'>
              <p className=' text-lg text-primaryText font-bold'>Features</p>
              <ul className=' flex flex-col gap-2 ml-6 mt-6'>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Employee directory</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Employee directory</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Employee directory</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Employee directory</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Employee directory</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" bg-[#CBE4DE] rounded-xl flex flex-col items-center shadow-lg w-[350px]">
          <div className=' w-full p-6'>
            <p className=' text-lg text-primaryText font-bold'>Basic</p>
            <p className=' text-secondaryText text-base mt-1'>Best for personal use</p>

            <div className=' flex flex-row gap-2 items-end mt-10' >
              <p className=' text-5xl font-black'>$20</p><p className=' text-sm text-secondaryText'>/per month</p>
            </div>

            <button className='bg-[#0E8388] hover:bg-[#246c6e] transform transition-all duration-150 text-white rounded-md py-3 my-7 w-full shadow-lg'>Get Started</button>


            <div className=' mt-5'>
              <p className=' text-lg text-primaryText font-bold'>Features</p>
              <ul className=' flex flex-col gap-2 ml-6 mt-6'>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Employee directory</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Employee directory</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Employee directory</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Employee directory</li>
                <li className=' flex flex-row gap-2 items-center'><CheckCircleIcon width={20} />Employee directory</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans