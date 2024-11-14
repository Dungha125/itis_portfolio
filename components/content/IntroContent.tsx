"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottom, slideInFromRight, slideInFromTop } from '@/ulti/motion';

const IntroContent = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen w-full z-[30] bg-cover bg-center"
      style={{
        backgroundImage: 'url("/anh1.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#e6e6e6dd] via-[#d0e7ffd3] to-[#85bfe8d8] z-[10]"></div>
      
      <div className="flex flex-col items-center w-full space-y-4 lg:space-y-6 z-[20]">
        <motion.h3 initial="hidden"
          animate="visible" variants={slideInFromBottom} className="font-semibold text-2xl text-neutral-900 text-center">
          Giới thiệu
        </motion.h3>
        <motion.h1
          variants={slideInFromBottom}
          initial="hidden"
          animate="visible"
          className="font-bold text-4xl text-[#485197] text-center mx-6"
        >
          Liên chi Đoàn Khoa CNTT1 - PTIT
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-8 lg:gap-12 px-4 lg:px-12">
          <motion.div
            className="flex flex-col gap-4 lg:max-w-[550px] text-neutral-800 text-justify"
            variants={slideInFromRight(0.7)}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base lg:text-xl font-semibold">
              <span className="font-extrabold">Liên chi Đoàn khoa CNTT1</span> là Liên chi Đoàn lớn nhất Học viện với khoảng hơn 5000 đoàn viên.
            </p>
            <motion.p variants={slideInFromRight(0.9)} className="text-base lg:text-xl font-semibold">
              <span className="font-extrabold">Liên chi Đoàn khoa CNTT1</span> là đơn vị đoàn thể trực thuộc khoa CNTT1-PTIT. 
              Với mục đích mang lại lợi ích cho sinh viên trong khoa, đẩy mạnh các hoạt động của khoa CNTT1, 
              Liên chi Đoàn Khoa CNTT1 tạo ra nhiều sân chơi giúp sinh viên trong khoa trở nên năng động hơn trong mọi hoạt động. 
              Đây là nơi hội tụ của các bạn sinh viên ngành CNTT, CNTT CLC, KHMT, ATTT, CNTT Việt - Nhật.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex flex-col items-center w-full space-y-4 z-[20]">
        <motion.h3 variants={slideInFromBottom} initial="hidden"
          animate="visible" className="font-semibold text-2xl text-neutral-900 text-center">
          Video giới thiệu
        </motion.h3>
        <motion.div variants={slideInFromBottom} initial="hidden"
          animate="visible" className="w-full flex items-center justify-center px-4 lg:px-20">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d9gIJpnlRQM?si=-v9KGKfandREPhR8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};
export default IntroContent;
