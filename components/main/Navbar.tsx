"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


type Props = {
    linkto: string;
};

const Navbar: React.FC<Props> = ({ linkto }) => {
    const [showPopup, setShowPopup] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const isActivity = pathname === '/Activity';
    const isRegister = pathname === '/Register';

    const handleHomeClick = () => {
        router.push('/');
    };

    const handleBackClick = () => {
        if (isRegister) {
            router.push('/');
        } else {
            router.back();
        }
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className={`w-full h-[65px] ${isRegister ? 'fixed' : 'fixed'} top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#020213d2] md:bg-[#03001417] md:backdrop-blur-md z-50 px-10`}>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                {isRegister ? (
                    <button onClick={handleBackClick} className='text-gray-300 font-bold ml-[10px] z-[30]'>
                        <img src="/logo.svg" width={40} height={40} alt="" />
                    </button>
                ) : (
                    <>
                        <a href={`#${linkto}`} className='h-full w-auto flex flex-row items-center'>
                            <Image
                                src="/logo.svg"
                                alt="logo"
                                width={40}
                                height={40}
                            />
                            <span className={`font-bold ml-[10px] hidden md:block ${isActivity ? 'text-neutral-200' : 'text-blue-950'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
                                {isActivity ? 'HOẠT ĐỘNG' : 'LIÊN CHI ĐOÀN KHOA CÔNG NGHỆ THÔNG TIN 1'}
                            </span>
                        </a>
                        <div className='hidden lg:flex w-[500px] h-full flex-row items-center justify-between md:mr-10'>
                            <div className='flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-50 gap-4 z-50'>
                                {isActivity ? (
                                    <a
                                        onClick={handleHomeClick}
                                        className='cursor-pointer'
                                    >
                                        Trang chủ
                                    </a>
                                ) : (
                                    <Link
                                        to="Intro"
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className='cursor-pointer'
                                    >
                                        Giới thiệu
                                    </Link>
                                )}
                                <Link
                                    to={isActivity ? 'annual' : 'Activity'}
                                    smooth={true}
                                    duration={500}
                                    offset={isActivity ? -70 : 0}
                                    className='cursor-pointer'
                                >
                                    {isActivity ? 'Thường niên' : 'Hoạt động'}
                                </Link>
                                <Link
                                    to={isActivity ? 'special' : 'Room'}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    className='cursor-pointer'
                                >
                                    {isActivity ? 'Đặc biệt' : 'Phòng Ban'}
                                </Link>
                                <Link
                                    to="Contact"
                                    smooth={true}
                                    duration={500}
                                    className='cursor-pointer'
                                >
                                    Liên hệ
                                </Link>
                            </div>
                        </div>
                        <div className='lg:hidden flex items-center'>
                            <button onClick={togglePopup} className='text-gray-300'>
                            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff", fontSize:"20px"}}  />
                            </button>
                            {showPopup && (
                                <div className='absolute top-[65px] right-0 bg-[#020213d2] border border-[#7042f861] w-[250px] p-4 rounded-lg shadow-lg'>
                                    {isActivity ? (
                                        <a
                                            onClick={handleHomeClick}
                                            className='block py-2 cursor-pointer text-white'
                                        >
                                            Trang chủ
                                        </a>
                                    ) : (
                                        <Link
                                            to="Intro"
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            className='block py-2 cursor-pointer text-white'
                                            onClick={togglePopup}
                                        >
                                            Giới thiệu
                                        </Link>
                                    )}
                                    <Link
                                        to={isActivity ? 'annual' : 'Activity'}
                                        smooth={true}
                                        duration={500}
                                        offset={isActivity ? -70 : 0}
                                        className='block py-2 cursor-pointer text-white'
                                        onClick={togglePopup}
                                    >
                                        {isActivity ? 'Thường niên' : 'Hoạt động'}
                                    </Link>
                                    <Link
                                        to={isActivity ? 'special' : 'Room'}
                                        smooth={true}
                                        duration={500}
                                        offset={-100}
                                        className='block py-2 cursor-pointer text-white'
                                        onClick={togglePopup}
                                    >
                                        {isActivity ? 'Đặc biệt' : 'Phòng Ban'}
                                    </Link>
                                    <Link
                                        to="Contact"
                                        smooth={true}
                                        duration={500}
                                        className='block py-2 cursor-pointer text-white'
                                        onClick={togglePopup}
                                    >
                                        Liên hệ
                                    </Link>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
