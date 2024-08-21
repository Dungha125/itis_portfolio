import React from 'react'
import IntroContent from '../content/IntroContent'

const Intro = () => {
  return (
    <section id='Intro' 
    className='flex flex-col items-center justify-center h-full relative overflow-hidden z-30 pb-10'
    >
        <div className='h-full w-full bg-[#efeeff] flex flex-col items-center'>
        <img src="/title.png" width={720} alt="" className='mt-[4rem]'/>
        <div className='w-full px-10 flex flex-col items-center'>
          <h1 className='w-full text-center text-neutral-800 font-semibold text-xl lg:text-2xl '>Liên chi Đoàn Khoa Công nghệ Thông tin 1 tuyển Cộng tác viên năm học 2024-2025</h1>
          <div className='w-full flex gap-4 flex-col items-center justify-center my-[2rem]'>
            <span className=' rounded-md border-gray-800 border-solid '>
              <ul className='flex flex-col lg:flex-row gap-4'>
              <li className='px-4 py-3 bg-[#fcc0c0] border-[#b16969] border-2 rounded-md font-bold text-center'>Nhận CV: 05/09 - 12h00 18/09</li>
              <li className='px-4 py-3 bg-[#bcdafc] border-[#698bb1] border-2 rounded-md font-bold text-center'>Phỏng vấn: 22/09</li>
              <li className='px-4 py-3 bg-[#c2ffc5] border-[#69b195] border-2 rounded-md font-bold text-center'>Traning: tháng 10/2024 - tháng 01/2025</li>
              </ul>
            </span>
            <span className='text-center'>
              <p>Đối tượng: Tất cả sinh viên Khóa D23 và D24 ngành CNTT, CNTT CLC, CNTT Việt-Nhật, KHMT, ATTT.</p>
            </span>
          </div>
        
        <div className='mb-[4rem] flex lg:px-16 xl:px-20 2xl:px-24 w-full items-center justify-center relative'>
          <button type='button' className='w-[12rem] xl:w-[14rem] 2xl:w-[16rem] h-[3rem] xl:h-[3.5rem] 2xl:h-[4rem] bg-gradient-to-r from-[#af4496] to-[#43139c] hover:bg-gradient-to-l font-medium text-xl xl:text-xl 2xl:text-2xl text-center text-white rounded-2xl'>
          <a href="/Register">Ứng tuyển ngay</a>
          </button>
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
