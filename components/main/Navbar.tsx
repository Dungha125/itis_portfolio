"use client";

import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
    linkto: string;
};

const Navbar: React.FC<Props> = ({ linkto }) => {

    const pathname = usePathname();
    const router = useRouter();

    const isActivity = pathname === '/Activity';
    const isRegister = pathname === '/Register';
    const handleHomeClick = () => {
        router.push('/'); // Điều hướng đến trang chính
    };
    const handleBackClick = () => {
        router.back(); // Navigate back to the previous page
    };
    return (
        <div className={`w-full h-[65px] ${isRegister ? 'relative' : 'fixed'} top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#020213d2] md:bg-[#03001417] md:backdrop-blur-md z-50 px-10`}>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            {isRegister ? (
                  
                    <button onClick={handleBackClick} className='text-gray-300 font-bold ml-[10px] z-[30]'>
                        QUAY LẠI
                    </button>
                ) :(<>
                <a href={`#${linkto}`} className='h-full w-auto flex flex-row items-center'>
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                    <span className={`font-bold ml-[10px] hidden md:block ${isActivity ? 'text-neutral-200': 'text-neutral-800'} `}>
                        {isActivity ? 'HOẠT ĐỘNG':'LIÊN CHI ĐOÀN KHOA CÔNG NGHỆ THÔNG TIN 1'  }
                    </span>
                </a>
                <div className='w-[500px] h-full hidden lg:flex flex-row items-center justify-between md:mr-10'>
                    <div className='flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-50 gap-4 z-50'>
                    {isActivity ? (
                            <a
                                onClick={handleHomeClick} // Điều hướng đến trang chính khi nhấp vào 'Trang chủ'
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
                            {isActivity ? 'Thường niên':'Hoạt động' }
                        </Link>
                        <Link
                            to={isActivity ? 'main' : 'Room'}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className='cursor-pointer'
                        >
                            {isActivity ? 'Đặc biệt':'Phòng Ban' }
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
                </>)}
            </div>
        </div>
    );
};

export default Navbar;
