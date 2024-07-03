"use client";

import React from 'react'
import {motion} from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from '@/ulti/motion';
import { SparklesIcon } from "@heroicons/react/24/solid";
const MainContent = () => {
  return (
    <motion.div
    initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-10 lg:px-20 mt-20 w-full z-[20]">
        <div className='flex flex-col items-center gap-3 lg:items-start text-justify h-full w-full'>
            <motion.div
            variants={slideInFromLeft(0.5)}
                className='text-neutral-50 font-bold flex flex-col text-center lg:text-justify gap-6 mt-6 text-6xl h-auto w-auto'>
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
                className='text-xs lg:text-lg text-neutral-400 my-5 max-w-[700px]'>
                Học viện Công nghệ Bưu chính Viễn thông
            </motion.p>
            <motion.div
                variants={slideInFromLeft(0.6)}
                className='flex flex-col lg:flex-row w-full h-full gap-2'>
                    <motion.div
                    variants={slideInFromLeft(0.7)}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="Welcome-text text-[13px]">
                            ITIS_La_Nha
                        </h1>
                    </motion.div>
                    <motion.div
                    variants={slideInFromLeft(0.8)}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="Welcome-text text-[13px]">
                            Information Technology Information Security
                        </h1>
                    </motion.div>
            </motion.div>
            
        </div>
        
        
        <motion.div
            variants={slideInFromBottom}
            className='h-full w-full justify-center items-center flex'>
            <img src="/logomain.svg" width={600} height={600} alt="logomain" />
        </motion.div>
    </motion.div>
  )
}

export default MainContent
