"use client";

import React from 'react';
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { slideInFromBottom } from '@/ulti/motion';

const BenefitContent = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
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
    <>
    <motion.div  ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants} 
      className="flex flex-col items-center justify-center gap-4 w-full z-[30]">
        <motion.h5 variants={slideInFromBottom} className='font-medium text-xs lg:text-xl text-neutral-400 text-center  px-10 lg:px-20'>
          Bạn sẽ nhận được gì khi trở thành
        </motion.h5>
        <motion.h1 variants={slideInFromBottom} className='font-bold text-2xl lg:text-4xl text-white text-center  px-10 lg:px-20'>
          Thành viên Liên chi Đoàn Khoa CNTT1
        </motion.h1>
    </motion.div>
        
    </>
  )
}

export default BenefitContent
