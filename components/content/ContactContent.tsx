"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const ContactContent = () => {
  return (
    <div id='Contact' className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-20'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-center flex-wrap'>
          <img src="/logomain.svg" width={300} height={300} alt="Main Logo" />
          <div className='w-auto h-auto md:mx-16 px-8'>
            <h3 className='font-bold text-[16px] lg:text-[24px] mb-4'>Liên hệ</h3>
            <span className='flex w-full mb-3'>
              <img src="/facebook.svg" width={20} height={20} alt="Facebook" />
              <a href="https://www.facebook.com/lcdkhoacntt1.ptit" className='ml-4'>
                Liên chi Đoàn Khoa CNTT1 - PTIT
              </a>
            </span>
            <span className='flex w-full items-center mb-3'>
                <FontAwesomeIcon icon={faPhone} width={20} height={20}/>
              <span>
                <p className='ml-4'>033.585.0230 - Hà Mạnh Dũng - Bí thư</p>
                <p className='ml-4'>039.454.4566 - Nguyễn Nhật Thành - Phó Bí thư</p>
                <p className='ml-4'>098.842.9911 - Nguyễn Thạc Anh - Phó Bí thư</p>
              </span>
            </span>
            
            
            <span className='flex w-full items-center'>
                <FontAwesomeIcon icon={faEnvelope} width={20} height={20}/>
                <p className='ml-4'>bch.cntt.ptit@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
