"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromRight } from "@/ulti/motion";

const IntroContent = () => (
  <div
    className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen w-full bg-cover bg-center"
    style={{ backgroundImage: 'url("/anh1.jpg")' }}
  >
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#e6e6e6dd] via-[#d0e7ffd3] to-[#85bfe8d8] z-10"></div>

    {/* Text & Video Section */}
    <div className="z-20 flex flex-col lg:flex-row items-center justify-center w-full px-4 lg:px-12 space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Text Section */}
      <motion.div 
        className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 lg:max-w-[550px] text-neutral-800"
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.7)}
      >
        <motion.h3 variants={slideInFromBottom} className="text-2xl font-semibold text-neutral-900">
          Giới thiệu
        </motion.h3>
        <motion.h1 variants={slideInFromBottom} className="text-4xl font-bold text-[#485197]">
          Liên chi Đoàn Khoa CNTT1 - PTIT
        </motion.h1>
        <p className="text-base lg:text-xl font-semibold">
          <span className="font-extrabold">Liên chi Đoàn khoa CNTT1</span> là Liên chi Đoàn lớn nhất Học viện với khoảng hơn 5000 đoàn viên.
        </p>
        <p className="text-base lg:text-xl font-semibold">
          <span className="font-extrabold">Liên chi Đoàn khoa CNTT1</span> là đơn vị đoàn thể trực thuộc khoa CNTT1-PTIT, nơi hội tụ sinh viên ngành CNTT, CNTT CLC, KHMT, ATTT, CNTT Việt - Nhật.
        </p>
      </motion.div>

      {/* Video Section */}
      <motion.div 
        className="flex flex-col items-center space-y-6"
        initial="hidden"
        animate="visible"
        variants={slideInFromBottom}
      >
        <h3 className="text-2xl font-semibold text-neutral-900">Video giới thiệu</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/d9gIJpnlRQM?si=-v9KGKfandREPhR8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </motion.div>
    </div>
  </div>
);

export default React.memo(IntroContent);
