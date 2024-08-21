"use client"
import { ActivitySpecialText } from '@/components/src'
import React from 'react'
import {motion} from "framer-motion"
import { slideInFromBottom, slideInFromBottomtime } from '@/ulti/motion'


const ActivitySpecialContent = () => {
  return (
    <motion.div initial="hidden"
    animate="visible" variants={slideInFromBottom} className='flex flex-col items-center justify-center gap-4 w-full bg-white z-[30] pb-[4rem]'>
      <motion.span variants={slideInFromBottomtime(0.5)} className='text-transparent font-bold text-2xl lg:text-4xl text-center bg-clip-text bg-gradient-to-r from-[#ce48a6] to-[#0f8eaa] pb-[2rem]'>
            SỰ KIỆN ĐẶC BIỆT
    </motion.span>
    <div className='w-full flex flex-col  items-center justify-center gap-4 px-4 sm:px-10 lg:px-20'>
    {ActivitySpecialText.map((item) => (
        <motion.div variants={slideInFromBottomtime(0.6 + parseInt(item.id)*0.1)}
            key={item.id} 
            className='w-full flex flex-col lg:flex-row rounded-lg shadow-lg bg-slate-300 h-auto lg:h-[20rem] relative overflow-hidden'
        >
            <div className='w-full lg:w-1/2 h-[15rem] lg:h-full overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none'>
                <img 
                    src={item.sour} 
                    alt={item.title} 
                    className='object-cover w-full h-full rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none' 
                />
            </div>
            <div className='w-full lg:w-1/2 p-4 lg:p-[2rem] flex flex-col justify-center'>
                <h1 className='text-xl md:text-2xl font-bold mb-2'>{item.title}</h1>
                <p className='text-base md:text-lg text-justify'>{item.text}</p>
            </div>
        </motion.div>
    ))}
</div>

    </motion.div>
  )
}

export default ActivitySpecialContent
