import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const matches = [
  { id: 1,type: 'Bảng A', team1: 'Team A', team2: 'Team B', time: '14:00', date: '2025-02-23', result: '0 - 0'},
  { id: 2,type: 'Bảng A', team1: 'Team C', team2: 'Team D', time: '16:00', date: '2025-02-23', result: '0 - 0' },
  { id: 3,type: 'Bảng B', team1: 'Team E', team2: 'Team F', time: '18:00', date: '2025-02-23', result: '0 - 0'},
  { id: 4,type: 'Bảng B', team1: 'Team G', team2: 'Team H', time: '20:00', date: '2025-02-23' , result: '0 - 0'},
  { id: 5,type: 'Bảng C', team1: 'Team I', team2: 'Team J', time: '14:00', date: '2025-02-23' , result: '0 - 0'},
  { id: 6,type: 'Bảng C', team1: 'Team K', team2: 'Team L', time: '16:00', date: '2025-02-23' , result: '0 - 0'},
  { id: 7,type: 'Bảng D', team1: 'Team M', team2: 'Team N', time: '18:00', date: '2025-02-23' , result: '0 - 0'},
  { id: 8,type: 'Bảng D', team1: 'Team O', team2: 'Team P', time: '20:00', date: '2025-02-23' , result: '0 - 0'},
  { id: 9,type: 'Tứ Kết', team1: 'Team Q', team2: 'Team R', time: '14:00', date: '2025-02-23' , result: '0 - 0'},
  { id: 10,type: 'Bán Kết', team1: 'Team S', team2: 'Team T', time: '16:00', date: '2025-02-23' , result: '0 - 0'},
  { id: 11,type: 'Tranh 3-4', team1: 'Team U', team2: 'Team V', time: '18:00', date: '2025-02-23' , result: '0 - 0'},
  { id: 12,type: 'Chung kết', team1: 'Team W', team2: 'Team X', time: '20:00', date: '2025-02-23' , result: '0 - 0'}
]

const Webgiaibong = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      {/*MAIN*/}
      <div className='h-screen w-full items-center flex flex-col bg-[#e4e4e4]'>
        <img src="/itiscup/cover-01.svg" alt="Cover" className='object-cover w-full mt-[65px]' />
        {/* Slider trận đấu */}
        <div className="w-full max-w-6xl px-8">
            <Slider {...settings}>
            {matches.map((match) => (
                <div key={match.id} className="px-4 py-1">
                <div className="bg-white shadow-lg rounded-lg px-4 py-[0.2rem] text-center">
                    <p className='text-xs text-gray-500'>{match.type}</p>
                    <p className="text-lg font-bold">{match.team1} vs {match.team2}</p>
                    <p className="text-sm text-gray-500">{match.date} - {match.time}</p>
                </div>
                </div>
            ))}
            </Slider>
        </div>
      </div>
      {/*NAVBAR*/}
      <div className='w-full h-[3rem] border-t-2 border-b-2 border-red-700 flex flex-row justify-center'>
          <a href="" className='w-full  text-center font-bold text-red-500 hover:border-b-4 hover:border-red-400 flex items-center justify-center'>LỊCH THI ĐẤU</a>
          <a href="" className='w-full  text-center font-bold text-red-500 hover:border-b-4 hover:border-red-400 flex items-center justify-center'>BẢNG XẾP HẠNG</a>
          <a href="" className='w-full  text-center font-bold text-red-500 hover:border-b-4 hover:border-red-400 flex items-center justify-center'>THÀNH TÍCH</a>
      </div>
      {/*CONTENT*/}
      <div className='w-full p-4 flex h-full mt-2'>
        {/*LỊCH THI ĐẤU*/}
        <div className='w-full h-full border-r-2 border-gray-400 px-4'>
            <h1 className='text-xl text-red-600 font-bold my-4'>LỊCH THI ĐẤU</h1>
            <div className='w-full px-4 gap-2'>
              {matches.map((match)=>(
                <div className='w-full flex justify-between items-center border-b-2'>
                  <p className='w-full text-gray-500 text-base'>{match.date} | {match.time}</p>
                  <span className='w-full flex items-center justify-center flex-col'>
                    <p className='text-gray-500 text-base'>{match.type}</p>
                    <p className='text-gray-800 text-base font-bold'>{match.team1} - {match.team2}</p>
                  </span>
                  <p className='w-full text-gray-800 text-base text-center'>{match.result}</p>
                </div>
              ))}
            </div>
        </div>
        {/*TAB*/}
        <div className='w-[30%] h-full hidden md:block'>
            {/*BẢNG XẾP HẠNG*/}
            <div className='w-full px-4'>
              Bảng xếp hạng
            </div>
            {/*TOP*/}
            <div className='w-full px-4'>
              Vua phá lưới
            </div>
        </div>    
      </div>
    </div>
  )
}

export default Webgiaibong
