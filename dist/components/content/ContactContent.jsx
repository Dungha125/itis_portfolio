"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
var ContactContent = function () {
    return (<div id='Contact' className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-20'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-center flex-wrap'>
          <img src="/logomain.svg" width={300} height={300} alt="Main Logo"/>
          <div className='w-auto h-auto md:mx-16 px-8'>
            <h3 className='font-bold text-[16px] lg:text-[24px] mb-4 w-full md:text-left text-center'>Liên hệ</h3>
            <span className='flex w-full mb-3 items-center flex-col md:flex-row gap-4'>
              <FontAwesomeIcon icon={faFacebook} width={20} height={20}/>
              <a href="https://www.facebook.com/lcdkhoacntt1.ptit" className='ml-4'>
                Liên chi Đoàn Khoa CNTT1 - PTIT
              </a>
            </span>
            <span className='flex w-full items-center mb-3'>
            <span className='flex w-full items-center justify-center mb-3 flex-col md:flex-row gap-5'>
                <FontAwesomeIcon icon={faPhone} width={20} height={20} className="flex justify-items-start"/>
                <span className="flex flex-col md:ml-4 md:flex-row gap-4">
                  <div className=" sm:ml-0 sm:mr-6 flex flex-col items-center md:items-start justify-center md:justify-start">
                    <p className="font-bold">033.585.0230</p>
                    <p>Hà Mạnh Dũng{" (Bí thư)"}</p>
                  </div>
                  <div className=" sm:ml-0 sm:mr-6 flex flex-col items-center md:items-start justify-center md:justify-start">
                    <p className="font-bold">039.454.4566</p>
                    <p>Nguyễn Nhật Thành{" (Phó Bí thư)"}</p>
                  </div>
                  <div className=" sm:ml-0 flex flex-col items-center justify-center md:items-start md:justify-start">
                    <p className="font-bold">098.842.9911</p>
                    <p>Nguyễn Thạc Anh{" (Phó Bí thư)"}</p>
                  </div>
                </span>
            </span>
            </span>            
            <span className='flex w-full items-center flex-col md:flex-row gap-4'>
                <FontAwesomeIcon icon={faEnvelope} width={20} height={20}/>
                <p className='ml-4'>bch.cntt.ptit@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>);
};
export default ContactContent;
