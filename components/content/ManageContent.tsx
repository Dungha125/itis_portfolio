"use client";

import React from 'react'
import { useInView } from 'react-intersection-observer';
import {motion} from "framer-motion";
import { slideInFromBottom, slideInFromBottomtime } from '@/ulti/motion';
import { manager } from '../src';

const ManageContent = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
      });
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      };

  return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className='flex flex-col items-center justify-center w-full gap-4 '>
            <motion.h3 variants={slideInFromBottom} className='font-base text-xs lg:text-xl text-neutral-400 text-center w-full'>
                Điều hành
            </motion.h3>
            <motion.h1 variants={slideInFromBottom} className='font-bold text-2xl lg:text-4xl text-neutral-50 text-center w-full'>
                Ban chấp hành
            </motion.h1>
            <motion.h3 variants={slideInFromBottom} className='font-base text-xs lg:text-[1rem] text-neutral-400 text-center w-full'>
                Giới thiệu Ban chấp hành nhiệm kỳ 2024 - 2026
            </motion.h3>
            <div className='flex flex-col md:flex-row w-full items-center justify-center pb-4 px-10 lg:px-20 gap-3 md:gap-8'>
                
                        <motion.div variants={slideInFromBottomtime(0.6)} className='order-2 md:order-1 w-full h-[16rem] drop-shadow shadow-lg shadow-slate-400 bg-white rounded-lg flex flex-col items-center md:mt-[8rem]' >
                                <div className=' rounded-[50%] bg-black w-[8rem] h-[8rem] relative mt-8'>
                                    <img src="/anh1.jpg" width={900} alt="" className='w-full h-full absolute rounded-[50%]' />
                                </div>
                                <h1 className='font-bold text-xl text-neutral-900 w-full text-center mt-2'>Nguyễn Nhật Thành</h1>
                                <h3 className='font-base text-base text-neutral-500 w-full text-center '>PHÓ BÍ THƯ</h3>
                        </motion.div>
                        <motion.div variants={slideInFromBottomtime(0.5)} className='order-1 md:order-2 w-full h-[16rem] drop-shadow shadow-lg shadow-slate-400 bg-white rounded-lg flex flex-col items-center' >
                                <div className=' rounded-[50%] bg-black w-[8rem] h-[8rem] relative mt-8'>
                                    <img src="/anh1.jpg" width={900} alt="" className='w-full h-full absolute rounded-[50%]' />
                                </div>
                                <h1 className='font-bold text-xl text-neutral-900 w-full text-center  mt-2'>Hà Mạnh Dũng</h1>
                                <h3 className='font-base text-base text-neutral-500 w-full text-center'>BÍ THƯ</h3>
                        </motion.div>
                        <motion.div variants={slideInFromBottomtime(0.6)} className='order-3 w-full h-[16rem] drop-shadow shadow-lg shadow-slate-400 bg-white rounded-lg flex flex-col items-center md:mt-[8rem]' >
                                <div className=' rounded-[50%] bg-black w-[8rem] h-[8rem] relative mt-8'>
                                    <img src="/anh1.jpg" width={900} alt="" className='w-full h-full absolute rounded-[50%]' />
                                </div>
                                <h1 className='font-bold text-xl text-neutral-900 w-full text-center  mt-2'>Nguyễn Thạc Anh</h1>
                                <h3 className='font-base text-base text-neutral-500 w-full text-center '>PHÓ BÍ THƯ</h3>
                        </motion.div>
        
               
            </div>

    </motion.div>
  )
}

export default ManageContent
