"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInFromLeft } from '@/ulti/motion';
import Carousel from '../src/Carousel';

const IntroContent = () => {
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
      className="flex flex-col items-center justify-center w-full z-[30]"
    >
      <div className='flex flex-col gap-3 px-10 lg:px-20 text-white text-justify'>
        <motion.h1 variants={slideInFromLeft(0.5)} className='font-bold text-4xl'>
          Giới thiệu
        </motion.h1>
        <motion.p variants={slideInFromLeft(0.7)} className='text-xs lg:text-xl'>
          Liên Chi Đoàn khoa CNTT1 là Liên chi Đoàn lớn nhất Học viện với khoảng hơn 5000 đoàn viên.
        </motion.p>
        <motion.p variants={slideInFromLeft(0.9)} className='text-xs lg:text-xl'>
          Được sự hỗ trợ trực tiếp từ các thầy cô trong khoa, khi trở thành thành viên của Liên chi, các bạn sẽ được tiếp xúc và làm việc trực tiếp cùng các thầy cô. Được tham gia các hoạt động vui chơi được tổ chức một cách chuyên nghiệp. Ngoài ra sẽ được học các kĩ năng như: kĩ năng tổ chức sự kiện, kĩ năng thuyết trình, kĩ năng làm việc nhóm,...Đặc biệt trực tiếp tham gia tổ chức các hoạt động quy mô Khoa và Học viện.
        </motion.p>
        <motion.div variants={slideInFromLeft(0.5)} className='w-full lg:px-6 z-30'>
            <Carousel ></Carousel>
        </motion.div>
        
      </div>
    </motion.div>
  );
};

export default IntroContent;
