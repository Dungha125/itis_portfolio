"use client";

import React from 'react';

const MainContent = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center mt-20 md:mt-0 w-full z-[20] relative">
    <div className="flex flex-col items-center gap-3 lg:items-start text-justify h-full w-full justify-center">
      <div className="text-neutral-800 font-bold flex flex-col text-center lg:text-start gap-6 mt-6 text-3xl xl:text-5xl 2xl:text-6xl">
        <span className="montserrat-bold text-[#485197]">
          Liên chi Đoàn Khoa<br />Công nghệ thông tin 1 - PTIT
        </span>
      </div>
      <p
        className="text-xs lg:text-lg xl:text-base 2xl:text-xl text-neutral-600 my-5 max-w-[700px] text-justify px-6 md:px-0"
        style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.4)' }}
      >
        Liên chi Đoàn Khoa CNTT1 là đơn vị Đoàn thể trực thuộc khoa CNTT1 - PTIT. Với mục đích làm cầu nối cho sinh viên trong khoa, đẩy mạnh các hoạt động Đoàn của khoa CNTT1. Liên chi Đoàn Khoa CNTT1 đã và sẽ tạo ra nhiều sân chơi giúp sinh viên trong khoa trở nên năng động hơn trong mọi hoạt động.
      </p>
    </div>
  </div>
);

export default MainContent;
