"use client";

import React from 'react'
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { slideInFromBottom, slideInFromLeft } from '@/ulti/motion';
import ClipPath from '@/public/ClipPath';
import { activity } from '../src';

const AvtivityHomeContent = () => {
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
      className="flex flex-col items-center justify-center gap-4 w-full z-[30]">
        <motion.h1 variants={slideInFromBottom} className='font-bold text-center px-10 lg:px-20 text-2xl lg:text-4xl mt-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-900'>Hoạt động</span>
        </motion.h1>
        <motion.p variants={slideInFromBottom} className='text-center px-10 lg:px-20 text-xs lg:text-base text-neutral-600'>
            Hằng năm, Liên chi tham gia tổ chức và hỗ trợ nhiều hoạt động của Đoàn, Khoa và Học viện
        </motion.p>

        <div className='flex flex-wrap items-center justify-center  px-10 lg:px-20 gap-4 mt-4'>
          {activity.map((item)=>(
            <motion.div
            variants={slideInFromLeft(0.6 + 0.1*parseInt(item.id))}
            className="block relative bg-no-repeat bg-[length:100%_100%] min-w-[20rem]"
            key={item.id}
            style={{
              backgroundImage: `url("/card-1.svg")`,
            }}
          >
            <div className="relative z-2 flex flex-col w-full min-h-[16rem] p-[2.4rem] pointer-events-none">
                  
            </div>
            <div
                  className="absolute inset-0.5 bg-n-8 -z-10 "
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className='absolute z-20 bg-white h-[3rem] w-full bottom-0 flex items-center'>
                    <p className="text-base text-blue-950 font-bold ml-8 ">{item.text}</p>
                    </div>
                  <div className="absolute inset-0">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={900}
                        height={900}
                        className="w-full h-full object-cover"
                      />
                    )}
                    
                  </div>
                  </div>
                  <div className='h-full w-full absolute top-8 -z-30 left-1/3 -translate-x-12'>
                      <img src="/gradient.png" width={1000} alt="" className=''/>
                  </div>
            
            <ClipPath></ClipPath>
            
          </motion.div>
          ))}
        </div>
        <div className='my-4 flex px-10 lg:px-20 w-full justify-center items-center relative'>
          <button type='button' className='w-[12rem] h-[4rem] bg-gradient-to-r from-[#af4496] to-[#43139c] hover:bg-gradient-to-l font-medium text-xl text-center text-white rounded-2xl'>
            <a href="/Activity">Xem thêm</a>
          </button>
        </div>
      </motion.div>
  )
}

export default AvtivityHomeContent;
