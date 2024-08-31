"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromBottomtime, slideInFromLeft } from '@/ulti/motion';
import CountdownTimer from "../src/CountdownTimer" // Assuming CountdownTimer is in the same directory

const MainContent = () => {


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
            className='text-neutral-800 font-bold flex flex-col text-center lg:text-start gap-6 mt-6 text-6xl xl:text-7xl 2xl:text-8xl h-auto w-auto lg:px-16 xl:px-20 2xl:px-24'>
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
            className='text-xs lg:text-lg xl:text-base 2xl:text-xl text-neutral-800 my-5 max-w-[700px] lg:px-16 xl:px-20 2xl:px-24 text-center text-justify'
            style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.4)' }}>
            Con tàu thám hiểm ITIS lừng danh cưỡi sóng vượt biển khám phá vùng đất mới, với hành trình không ngừng nghỉ và chỉ trở về bến cảng mỗi năm một lần vào mùa thu. Ngoài bổ sung lương thực và nhiên liệu thì còn có một nhiệm vụ vô cùng quan trọng, đó chính là tuyển thêm những thuỷ thủ đoàn mới đầy tiềm năng!
          </motion.p>
          
        
          <CountdownTimer 
              openingTime={new Date('2024-09-05T00:00:00')} 
              closingTime={new Date('2024-09-18T12:00:00')} 
/>
          
          <motion.div variants={slideInFromBottom} className='lg:px-16 xl:px-20 2xl:px-24'>
            <div className='rounded-md border-gray-800 border-solid'>
              <ul className='flex flex-col lg:flex-row gap-4'>
                <li className='px-4 py-3 bg-[#fcc0c0] border-[#b16969] border-2  rounded-md font-medium text-xs text-center'>
                  Nhận CV <br /> 05/09 - 12h00 18/09
                </li>
                <li className='px-4 py-3 bg-[#bcdafc] border-[#698bb1] border-2  rounded-md font-medium text-xs text-center'>
                  Phỏng vấn <br /> 22/09
                </li>
                <li className='px-4 py-3 bg-[#c2ffc5] border-[#69b195] border-2  rounded-md font-medium text-xs text-center'>
                  Training<br /> tháng 10/2024 - tháng 01/2025
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <div className='w-full flex flex-col items-center justify-center py-4'>
          <motion.img 
            variants={slideInFromBottomtime(0.6)} 
            src="/thuyen0.png" 
            alt="" 
            className='w-full h-auto' 
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
  );
}

export default MainContent;
