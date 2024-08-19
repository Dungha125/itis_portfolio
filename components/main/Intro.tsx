import React from 'react'
import IntroContent from '../content/IntroContent'

const Intro = () => {
  return (
    <section id='Intro' 
    className='flex flex-col items-center justify-center h-full relative overflow-hidden z-30 pb-10'
    >
        <div className='h-full w-full bg-[#efeeff] flex flex-col items-center'>
        <img src="/title.png" width={720} alt="" className='my-[4rem]'/>
        <div className='w-full px-10 flex flex-col items-center'>
          <h1 className='w-full text-center text-neutral-800 font-semibold text-xl lg:text-2xl '>Liên chi Đoàn Khoa Công nghệ Thông tin 1 tuyển Cộng tác viên năm học 2024-2025</h1>
          <div className='w-full flex gap-4 justify-between'>
            <span className=' rounded-md border-gray-800 border-solid bg-white'>
              <ul>
              <li>Nhận CV: 5-19/9</li>
              <li>Phỏng vấn: 29/9</li>
              <li>Tranning: tháng 10 - 12</li>
              </ul>
            </span>
            <span>
              <p>Đối tượng: Tất cả sinh viên Khóa D23 và D24 ngành CNTT, CNTT CLC, CNTT Việt-Nhật, KHMT, ATTT.</p>
            </span>
          </div>
        </div>
        </div>
        <div
        className='h-full w-full bg-[#040224] '>
            <IntroContent ></IntroContent>
        </div>
        <div className='w-full h-full relative -z-9'>
          <img src="/ITIS LA NHA.png" width={1920} alt="" className='absolute -top-6 lg:-top-8 z-10 rotate-20 w-full' />
          <img src="/section.svg" width={1920} alt="" className='rotate-180 mb-0 relative pt-4 lg:pt-8 w-full'/>
        </div>
        
    </section>
  )
}

export default Intro
