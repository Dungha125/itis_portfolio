"use client";

import React, { useState } from 'react'
import {motion} from "framer-motion";
import { slideInFromBottom, slideInFromBottomtime, slideInFromLeft, slideInFromRight } from '@/ulti/motion';
import { SparklesIcon } from "@heroicons/react/24/solid";
import FormRegister from '../src/FormRegister';



const MainContent= () => {

 
  return (
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-10 lg:px-20 xl:px-32 2xl:px-40 mt-20 w-full z-[20] relative"
      >
      
      <div className='flex flex-col items-center gap-3 lg:items-start text-justify h-full w-full justify-center'>
        
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='text-neutral-800 font-bold flex flex-col text-center lg:text-justify gap-6 mt-6 text-6xl xl:text-7xl 2xl:text-8xl h-auto w-auto lg:px-16 xl:px-20 2xl:px-24'>
          <span>
            Welcome!
            <br />We are 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ce48a6] to-[#0f8eaa]'>
              {" "}ITIS
            </span>
          </span>
        </motion.div>
        
        <motion.p
          variants={slideInFromLeft(0.6)}
          className='text-xs lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-700 my-5 max-w-[700px] lg:px-16 xl:px-20 2xl:px-24'>
          Học viện Công nghệ Bưu chính Viễn thông
        </motion.p>
        
        <motion.div
          variants={slideInFromLeft(0.6)}
          className='flex flex-col items-center lg:flex-row w-full gap-2 lg:px-16 xl:px-20 2xl:px-24'>
          
          <motion.div
            variants={slideInFromLeft(0.7)}
            className="Welcome-box py-[8px] px-[7px] border border-[#ffffff8b] opacity-[0.9]">
            <SparklesIcon className="text-[#ffffff] mr-[10px] h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
            <h1 className="Welcome-text text-[13px] xl:text-[15px] 2xl:text-[17px] -webkit-text-fill-color-white" style={{ WebkitTextFillColor: 'white' }}>
              ITIS_La_Nha
            </h1>
          </motion.div>
          
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="Welcome-box py-[8px] px-[7px] border border-[#ffffff8b] opacity-[0.9]">
            <SparklesIcon className="text-[#ffffff] mr-[10px] h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 "  />
            <h1 className="Welcome-text text-[13px] xl:text-[15px] 2xl:text-[17px] "style={{ WebkitTextFillColor: 'white' }}>
              Information Technology Information Security
            </h1>
          </motion.div>
          
        </motion.div>
        
        <motion.div variants={slideInFromBottom} className='my-4 flex lg:px-16 xl:px-20 2xl:px-24 w-full items-center justify-center lg:justify-start relative'>
          <button type='button' className='w-[12rem] xl:w-[14rem] 2xl:w-[16rem] h-[3rem] xl:h-[3.5rem] 2xl:h-[4rem] bg-gradient-to-r from-[#af4496] to-[#43139c] hover:bg-gradient-to-l font-medium text-xl xl:text-xl 2xl:text-2xl text-center text-white rounded-2xl'>
          <a href="/Register">Ứng tuyển ngay</a>
          </button>
        </motion.div>
        
      </div>
      <div className='w-full flex flex-col items-center justify-center py-4'>
        <motion.img 
          variants={slideInFromBottomtime(0.6)} 
          src="/thuyen0.png" 
          alt="" 
          className='w-full h-auto 
          ' 
          animate={{
            x: [0, -15, 0], 
          }}
          transition={{
            duration: 5, 
            repeat: Infinity, 
            repeatType: "mirror", 
          }}
        />
      </div>
      </motion.div>
      
      
      </>
  )
}
//max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px]
export default MainContent;
