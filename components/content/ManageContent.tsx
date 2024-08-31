"use client";

import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import {motion} from "framer-motion";
import { slideInFromBottom, slideInFromBottomtime } from '@/ulti/motion';
import { manager } from '../src';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  imageSrc: string;
  className:string;
}

const ContactCard: React.FC<ContactCardProps>= ({ name, role, phone, email, imageSrc, className }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
      <motion.div variants={slideInFromBottomtime(0.6)} className={`${className} md:order-1 w-full h-[20rem] drop-shadow shadow-lg shadow-slate-400 bg-white rounded-lg flex flex-col items-center `}>
          <div className='rounded-[50%] bg-black w-[8rem] h-[8rem] relative mt-8'>
              <img src={imageSrc} alt="" className='w-full h-full object-cover absolute rounded-[50%]' />
          </div>
          <h1 className='font-bold text-xl text-neutral-900 w-full text-center mt-2'>{name}</h1>
          <h3 className='font-base text-base text-neutral-500 w-full text-center'>{role}</h3>
          <div className='flex mt-4 space-x-4'>
              <FontAwesomeIcon 
                  icon={faPhone} 
                  className='text-neutral-700 cursor-pointer' 
                  onClick={() => setShowPhone(!showPhone)} 
              />
              {showPhone && <span className='text-sm text-neutral-700'>{phone}</span>}
              <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className='text-neutral-700 cursor-pointer' 
                  onClick={() => setShowEmail(!showEmail)} 
              />
              {showEmail && <span className='text-sm text-neutral-700'>{email}</span>}
          </div>
      </motion.div>
  );
};

const ManageContent = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
      });
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      };

  return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className='flex flex-col items-center justify-center w-full gap-4 '>
            <motion.h3 variants={slideInFromBottom} className='font-base text-xs lg:text-xl text-neutral-400 text-center w-full'>
                Điều hành
            </motion.h3>
            <motion.h1 variants={slideInFromBottom} className='font-bold text-2xl lg:text-4xl text-neutral-50 text-center w-full'>
                Ban chấp hành
            </motion.h1>
            <motion.h3 variants={slideInFromBottom} className='font-base text-xs lg:text-[1rem] text-neutral-400 text-center w-full'>
                Giới thiệu Ban chấp hành nhiệm kỳ 2024 - 2026
            </motion.h3>
            <div className='flex flex-col md:flex-row w-full items-center justify-center pb-4 px-10 lg:px-20 gap-3 md:gap-8'>
            <ContactCard 
            name="Nguyễn Nhật Thành" 
            role="PHÓ BÍ THƯ" 
            phone="039.454.4566" 
            email="thanhtobot159@gmail.com" 
            imageSrc="/NNT.png" 
            className='order-2 md:mt-[8rem]'
        />
        <ContactCard 
            name="Hà Mạnh Dũng" 
            role="BÍ THƯ" 
            phone="033.585.0230" 
            email="dungha122405@gmail.com" 
            imageSrc="/HMD.JPG" 
            className='order-1'
        />
        <ContactCard 
            name="Nguyễn Thạc Anh" 
            role="PHÓ BÍ THƯ" 
            phone="098.842.9911" 
            email="thacanh04@gmail.com" 
            imageSrc="/NTA.png" 
            className='order-3 md:mt-[8rem]'
        />
              
        
               
            </div>

    </motion.div>
  )
}

export default ManageContent
