"use client"
import { ActivitySpecialText } from '@/components/src'
import React from 'react'


const ActivitySpecialContent = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full bg-white z-[30] pb-[4rem]'>
      <span className='text-transparent font-bold text-2xl lg:text-4xl text-center bg-clip-text bg-gradient-to-r from-[#ce48a6] to-[#0f8eaa]'>
            SỰ KIỆN ĐẶC BIỆT
    </span>
    <div className='w-full flex flex-col items-center justify-center gap-4 px-10 lg:px-20'>
        {ActivitySpecialText.map((item)=>(
          <div key={item.id} className='w-full flex rounded-lg shadow-lg bg-orange-300 h-[20rem] relative'>
            <div className='inset-0 rounded-lg p-[2rem]'>
              <img src="/back.png" height={500} width={500} alt="" className='object-cover h-full rounded-lg' />
            </div>
            <div>
              <h1 className='w-full text-2xl font-bold'>{item.title}</h1>
            </div>
          </div>
          
        ))}
    </div>
    </div>
  )
}

export default ActivitySpecialContent
