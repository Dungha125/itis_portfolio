"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInFromBottom, slideInFromBottomtime, slideInFromLeft } from '@/ulti/motion';
import ClipPath from '@/public/ClipPath';
import { activityannual } from '@/components/src';


const ActivityAnualContent = () => {
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
      id='annual'
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants} 
      className="flex flex-col items-center justify-center gap-4 w-full bg-white z-[30] pb-[4rem]">
        <motion.h1 variants={slideInFromBottom} className='font-bold text-center px-10 lg:px-20 text-2xl lg:text-4xl mt-4 pt-8'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-900'>Hoạt động thường niên</span>
        </motion.h1>
        <motion.h3 variants={slideInFromBottom} className='font-normal max-w-[800px] text-center px-10 lg:px-20 text-xs lg:text-xl '>
            <span className='text-neutral-800'>Khi trở thành thành viên của Liên chi, các bạn sẽ được tham gia rất nhiều các hoạt động thú vị, lành mạnh, đa dạng sắc màu từ các hoạt động học tập, đến thể thao và giải trí ...</span>
        </motion.h3>
        <div className='flex flex-wrap items-center justify-center  px-10 lg:px-20 gap-4 lg:pt-8'>
          {activityannual.map((item)=>(
            <motion.div
            variants={slideInFromLeft(0.6 + 0.1*parseInt(item.id))}
            className="block relative  bg-no-repeat bg-[length:100%_100%] min-w-[20rem]"
            key={item.id}
            style={{
              backgroundImage: `url("/card-1.svg")`,
            }}
          >
            <div className="relative z-2 flex flex-col w-full min-h-[16rem] p-[2.4rem]">
                  
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
                  <div className='h-full w-full absolute top-8 -z-30 left-1/3 -translate-x-12 opacity-20'>
                      <img src="/gradient.png" width={1000} alt="" className=''/>
                  </div>
            <ClipPath></ClipPath>
          </motion.div>
          ))}
        </div>
    </motion.div>
  )
}

export default ActivityAnualContent
