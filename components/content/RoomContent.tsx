"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInFromBottom, slideInFromBottomtime, slideInFromLeft } from '@/ulti/motion';
import { roomgroup } from '../src';
import ClipPath from "@/public/ClipPath";

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
      <>
      <motion.div  
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants} 
        className="flex flex-col items-center justify-center gap-4 w-full z-[30]">
          <motion.h5 variants={slideInFromBottom} className='font-medium text-xs lg:text-xl text-neutral-400 text-center  px-10 lg:px-20'>
            Liên chi hoạt động với
          </motion.h5>
          <motion.h1 variants={slideInFromBottom} className='font-bold text-center text-2xl lg:text-4xl text-white px-10 lg:px-20'>
            4 BAN
          </motion.h1>
  
          <div className='flex flex-wrap items-center justify-center  px-6 lg:px-20 gap-4 mt-4'>
            {roomgroup.map((item)=>(
              <motion.div
              variants={slideInFromLeft(0.6 + 0.1*parseInt(item.id))}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] h-[24rem]"
              key={item.id}
              style={{
                backgroundImage: `url("/card-1.svg")`,
              }}
            >
              <div className="relative z-2 flex flex-col  min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h2 className={`font-bold md:text-2xl mb-2 ${item.style}`}>{item.tittle}</h2>
                    <p className="body-2 mb-6 text-xs md:text-[1rem] font-semibold text-neutral-700 text-justify">{item.text}</p>
              </div>
              <div
                    className="absolute inset-0.5 bg-n-8 -z-10 "
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    <div className='absolute z-20 bg-white h-full w-full bottom-0 flex items-center'>
                      <img src={item.sour} width={900} height={900} alt="" className='opacity-20'/>
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
        
              
              <ClipPath></ClipPath>
              
            </motion.div>
            ))}
          </div>
  
      </motion.div>
          
      </>
  )
}

export default RoomContent
