"use client";

import React from "react";

const MainContent = () => (
  <div className="relative z-20 flex flex-col items-center justify-center w-full lg:flex-row mt-20 md:mt-0">
    <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-justify lg:items-start">
      <h1 className="text-3xl font-bold text-center lg:text-start xl:text-5xl 2xl:text-6xl text-[#485197] montserrat-bold">
        Liên chi Đoàn Khoa <br className="hidden lg:block" />
        Công nghệ thông tin 1 - PTIT
      </h1>
      <p className="px-6 text-xs text-justify text-neutral-600 lg:text-lg xl:text-base 2xl:text-xl md:px-0 my-5 max-w-[700px] drop-shadow-md">
        Liên chi Đoàn Khoa CNTT1 là đơn vị Đoàn thể trực thuộc khoa CNTT1 - PTIT. Với mục đích làm cầu nối cho sinh viên trong khoa, đẩy mạnh các hoạt động Đoàn của khoa CNTT1. Liên chi Đoàn Khoa CNTT1 đã và sẽ tạo ra nhiều sân chơi giúp sinh viên trong khoa trở nên năng động hơn trong mọi hoạt động.
      </p>
    </div>
  </div>
);

export default React.memo(MainContent);
