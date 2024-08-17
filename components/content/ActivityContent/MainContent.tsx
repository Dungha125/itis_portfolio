"use client";

import React from 'react'
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft } from '@/ulti/motion';
import { SparklesIcon } from "@heroicons/react/24/solid";

const MainContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-10 lg:px-20 xl:px-32 2xl:px-40 mt-20 w-full z-[20]">
      
      <div className='flex flex-col items-center gap-3 lg:items-start h-full w-full'>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='text-neutral-800 font-bold flex flex-col mt-6 text-6xl h-auto w-auto lg:px-16 xl:px-20 2xl:px-24' style={{ lineHeight: 'normal' }}>
          <span className='text-transparent text-center bg-clip-text bg-gradient-to-r from-[#ce48a6] to-[#0f8eaa]'>
            Hoạt động
          </span>
        </motion.div>
        
        <motion.p
          variants={slideInFromLeft(0.6)}
          className='text-xs lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-700 my-5 max-w-[700px] lg:px-16 xl:px-20 2xl:px-24'>
          Học viện Công nghệ Bưu chính Viễn thông
        </motion.p>
        
        <motion.div
          variants={slideInFromLeft(0.6)}
          className='flex flex-col items-center lg:flex-row w-full h-full gap-2 lg:px-16 xl:px-20 2xl:px-24'>
          
          <motion.div
            variants={slideInFromLeft(0.7)}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
            <h1 className="Welcome-text text-[13px] xl:text-[15px] 2xl:text-[17px]">
              ITIS_La_Nha
            </h1>
          </motion.div>
          
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
            <h1 className="Welcome-text text-[13px] xl:text-[15px] 2xl:text-[17px]">
              Information Technology Information Security
            </h1>
          </motion.div>
          
        </motion.div>
      </div>
      
      <motion.div variants={slideInFromBottom} className='w-full h-full flex items-center justify-center'>
        <img src="/SVG/thuyen0.svg" alt="" className='h-full xl:h-[600px] 2xl:h-[700px]'/>
      </motion.div>
    </motion.div>
  )
}

export default MainContent;
