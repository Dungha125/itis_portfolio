"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from '@/ulti/motion';
import Carousel from '../src/Carousel';

const IntroContent = () => {
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
      className="flex flex-col items-center justify-center w-full z-[30]"
    >


      <motion.h3  variants={slideInFromBottom} className='font-normal text-2xl text-neutral-400 text-center mt-[3rem]'>
          Giới thiệu
        </motion.h3>
        <motion.h1 variants={slideInFromBottom} className='font-bold text-4xl text-white text-center my-3 mx-6'>
          Liên chi Đoàn Khoa CNTT1 - PTIT
        </motion.h1>


      
      <div className='flex flex-col lg:flex-row w-full lg:my-10 items-center justify-center gap-5 px-10 lg:px-20'>
        <motion.div variants={slideInFromLeft(0.5)} className='w-full lg:min-w-[450px] max-w-[650px] z-30 mb-6'>
            <Carousel ></Carousel>
        </motion.div>


      <div className='flex flex-col gap-3 lg:max-w-[550px] text-neutral-300 text-justify lg:ml-6'>
        <motion.p variants={slideInFromRight(0.7)} className='text-base lg:text-xl'>
          <span className='font-bold'>Liên chi Đoàn khoa CNTT1</span> là Liên chi Đoàn lớn nhất Học viện với khoảng hơn 5000 đoàn viên.
        </motion.p>
        <motion.p variants={slideInFromRight(0.9)} className='text-base lg:text-xl'>
        <span className='font-bold'>Liên chi Đoàn khoa CNTT1</span> là đơn vị đoàn thể trực thuộc khoa CNTT1-PTIT. 
          Với mục đích mang lại lợi ích của sinh viên trong khoa, đẩy mạnh các hoạt động của khoa CNTT1, 
          Liên chi Đoàn Khoa CNTT1 tạo ra nhiều sân chơi giúp sinh viên trong khoa trở nên năng động hơn trong mọi hoạt động. 
          Là là nơi hội tụ của các bạn sinh viên ngành CNTT, CNTT CLC, KHMT, ATTT, CNTT Việt - Nhật.
        </motion.p>
        </div>
        
        </div>
        <motion.h3 variants={slideInFromTop} className='font-normal text-2xl text-neutral-400 text-center my-3 lg:my-6'>
          Video giới thiệu
        </motion.h3>
        <div className='w-full px-10 flex mb-[4rem] items-center justify-center'><iframe width="560" height="315" src="https://www.youtube.com/embed/d9gIJpnlRQM?si=-v9KGKfandREPhR8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </motion.div>
    

  );
};

export default IntroContent;
