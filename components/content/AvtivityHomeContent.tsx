"use client";

import React from 'react'
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { slideInFromBottom, slideInFromLeft } from '@/ulti/motion';

const AvtivityHomeContent = () => {
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
    <motion.div  
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants} 
      className="flex flex-col items-center justify-center gap-4 w-full z-[30]">
        <motion.h1 variants={slideInFromBottom} className='font-bold text-center px-10 lg:px-20 text-2xl lg:text-4xl my-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-900'>Hoạt động</span>
        </motion.h1>
        <motion.p variants={slideInFromBottom}>
            Nhiều lắm {"=))))"} update sau {":v"}
        </motion.p>
      </motion.div>
  )
}

export default AvtivityHomeContent;
