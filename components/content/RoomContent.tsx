"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInFromBottomtime, slideInFromLeft } from '@/ulti/motion';
import { roomgroup } from '../src';

const RoomContent = () => {
    
    const {ref, inView} = useInView({
        triggerOnce : true,
        threshold : 0.11,
    }); 

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
    }


  return (
    <motion.div
        ref={ref}
        initial = "hidden"
        animate = {inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className='flex flex-col gap-3 items-center justify-center'>
            <motion.h3 variants={slideInFromBottomtime(0.5)} className='font-base text-xs lg:text-xl text-neutral-400 text-center w-full'>
                Liên chi Đoàn hoạt động với
            </motion.h3>
            <motion.h1 variants={slideInFromBottomtime(0.6)} className='font-bold text-2xl lg:text-4xl text-neutral-50 text-center w-full'>
                4 BAN
            </motion.h1>
            <motion.div className='mx-2 px-10 lg:px-20 flex flex-col items-center gap-3 w-full mt-8 justify-around'>
            {
              roomgroup.map((item)=>(
                <motion.div 
                key={item.id}
                variants={slideInFromLeft(0.6 + 0.1*parseInt(item.id))}
                className={`mx-4 w-full px-8 py-4 ${item.style} rounded-3xl flex md:flex-row flex-col`}
                >
                  <div className={`w-full py-4 md:py-8 md:${item.order1}`}>
                    <h2 className='font-bold text-2xl md:text-3xl text-white pb-3'>{item.tittle}</h2>
                    <p className='font-base  text-neutral-900 text-justify'>{item.text}</p>
                  </div>
                  <div className={`pl-4 flex items-center justify-center md:${item.order}`}>
                    <img src={item.sour} width={280} height={280} />
                  </div>
                </motion.div>
              ))
            }
            </motion.div>
    </motion.div>
  )
}

export default RoomContent
