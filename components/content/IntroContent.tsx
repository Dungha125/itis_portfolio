"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottom, slideInFromRight } from '@/ulti/motion';

const IntroContent = () => (
  <div
    className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen w-full bg-cover bg-center"
    style={{ backgroundImage: 'url("/anh1.jpg")' }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#e6e6e6dd] via-[#d0e7ffd3] to-[#85bfe8d8] z-10"></div>

    {/* Text Section */}
    <div className="z-20 flex flex-col items-center w-full space-y-6 px-4 lg:px-12">
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={slideInFromBottom}
        className="font-semibold text-2xl text-neutral-900 text-center"
      >
        Giới thiệu
      </motion.h3>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={slideInFromBottom}
        className="font-bold text-4xl text-[#485197] text-center mx-6"
      >
        Liên chi Đoàn Khoa CNTT1 - PTIT
      </motion.h1>
      <motion.div
        className="flex flex-col gap-4 lg:max-w-[550px] text-neutral-800 text-justify"
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.7)}
      >
        <p className="text-base lg:text-xl font-semibold">
          <span className="font-extrabold">Liên chi Đoàn khoa CNTT1</span> là Liên chi Đoàn lớn nhất Học viện với khoảng hơn 5000 đoàn viên.
        </p>
        <p className="text-base lg:text-xl font-semibold">
          <span className="font-extrabold">Liên chi Đoàn khoa CNTT1</span> là đơn vị đoàn thể trực thuộc khoa CNTT1-PTIT, nơi hội tụ sinh viên ngành CNTT, CNTT CLC, KHMT, ATTT, CNTT Việt - Nhật.
        </p>
      </motion.div>
    </div>

    {/* Video Section */}
    <div className="z-20 flex flex-col items-center w-full space-y-6 px-4 lg:px-20">
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={slideInFromBottom}
        className="font-semibold text-2xl text-neutral-900 text-center"
      >
        Video giới thiệu
      </motion.h3>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromBottom}
        className="w-full flex justify-center"
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/d9gIJpnlRQM?si=-v9KGKfandREPhR8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </motion.div>
    </div>
  </div>
);

export default IntroContent;
