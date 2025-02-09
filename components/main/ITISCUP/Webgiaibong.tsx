import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Dir } from 'fs';


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
];


const loaitructiep = {
  quarterFinals: [
    { team1: "CXĐ", score1: 0, team2: "CXĐ", score2: 0, time: '06-04-2025', type:'Tứ kết' },
    { team1: "CXĐ", score1: 0, team2: "CXĐ", score2: 0, time: '06-04-2025', type:'Tứ kết' },
    { team1: "CXĐ", score1: 0, team2: "CXĐ", score2: 0, time: '06-04-2025', type:'Tứ kết' },
    { team1: "CXĐ", score1: 0, team2: "CXĐ", score2: 0, time: '06-04-2025', type:'Tứ kết' },
  ],
  semiFinals: [
    { team1: "CXĐ", score1: 0, team2: "CXĐ", score2: 0 },
    { team1: "CXĐ", score1: 0, team2: "CXĐ", score2: 0 },
  ],
  finals: [
    { team1: "CXĐ", score1: 0, team2: "CXĐ", score2: 0 },
  ],
  champion: "🏆 CXĐ",
};

const groups = {
  A: [
    { id: 1, team: 'Team A', played: 3, win: 2, draw: 0, loss: 1, gd: 5, points: 6 },
    { id: 2, team: 'Team B', played: 3, win: 1, draw: 1, loss: 1, gd: 2, points: 4 },
    { id: 3, team: 'Team C', played: 3, win: 1, draw: 0, loss: 2, gd: -1, points: 3 },
    { id: 4, team: 'Team D', played: 3, win: 0, draw: 1, loss: 2, gd: -6, points: 1 },
  ],
  B: [
    { id: 1, team: 'Team A', played: 3, win: 2, draw: 0, loss: 1, gd: 5, points: 7 },
    { id: 2, team: 'Team B', played: 3, win: 1, draw: 1, loss: 1, gd: 2, points: 4 },
    { id: 3, team: 'Team C', played: 3, win: 1, draw: 0, loss: 2, gd: -1, points: 3 },
    { id: 4, team: 'Team D', played: 3, win: 0, draw: 1, loss: 2, gd: -6, points: 1 },
  ], // Thêm dữ liệu bảng B
  C: [
    { id: 1, team: 'Team A', played: 3, win: 2, draw: 0, loss: 1, gd: 5, points: 8 },
    { id: 2, team: 'Team B', played: 3, win: 1, draw: 1, loss: 1, gd: 2, points: 4 },
    { id: 3, team: 'Team C', played: 3, win: 1, draw: 0, loss: 2, gd: -1, points: 3 },
    { id: 4, team: 'Team D', played: 3, win: 0, draw: 1, loss: 2, gd: -6, points: 1 },
  ], // Thêm dữ liệu bảng C
  D: [
    { id: 1, team: 'Team A', played: 3, win: 2, draw: 0, loss: 1, gd: 5, points: 9 },
    { id: 2, team: 'Team B', played: 3, win: 1, draw: 1, loss: 1, gd: 2, points: 4 },
    { id: 3, team: 'Team C', played: 3, win: 1, draw: 0, loss: 2, gd: -1, points: 3 },
    { id: 4, team: 'Team D', played: 3, win: 0, draw: 1, loss: 2, gd: -6, points: 1 },
  ], // Thêm dữ liệu bảng D
};

const topScorers = [
  { id: 1, player: 'Player 1', team: 'Team A', goals: 5 },
  { id: 2, player: 'Player 2', team: 'Team B', goals: 4 },
  { id: 3, player: 'Player 3', team: 'Team C', goals: 3 },
];

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

  const [selectedGroup, setSelectedGroup] = useState<'A' | 'B' | 'C' | 'D'>('A')
  const [statusTongquan, setStatusTongquan] = useState<boolean>(false);

  const handleclick = (status:boolean) => {
    setStatusTongquan(status);
  };
  
  const MatchBox = ({ match, bgColor }: { match: any; bgColor: string }) => {
    return (
      <div className={`relative flex flex-col border rounded-md ${bgColor} w-[22rem] text-center shadow-md p-2 mb-4`}>
          <h2 className='w-full text-center text-sm '>{match.type}</h2>
          <span className='w-full flex flex-row items-center justify-between border-b-2'>
            <p className="font-bold">{match.team1}</p>
            <p className="text-lg  text-gray-800  py-1">{match.score1}</p>
          </span>
          <span className='w-full flex flex-row items-center justify-between'>
            <p className="font-bold">{match.team1}</p>
            <p className="text-lg text-gray-800  py-1">{match.score1}</p>
          </span>
        
      </div>
    );
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      {/*MAIN*/}
      <div className='h-full w-full items-center flex flex-col bg-[#e4e4e4]'>
        <img src="/itiscup/cover-01.svg" alt="Cover" className='object-cover w-full mt-[65px]' />
        {/* Slider trận đấu */}
        </div>
        <div className="w-full max-w-6xl p-4 my-2">
            <Slider {...settings}>
            {matches.map((match) => (
                <div key={match.id} className="px-2 sm:px-3">
                  <div className="bg-white shadow-lg rounded-lg px-4 py-2 text-center">
                    <p className="text-[10px] sm:text-xs text-gray-500">{match.type}</p>
                    <p className="text-sm sm:text-lg font-bold">{match.team1} vs {match.team2}</p>
                    <p className="text-[10px] sm:text-sm text-gray-500">{match.date} - {match.time}</p>
                  </div>
                </div>
            ))}
            </Slider>
        </div>
      
      {/*NAVBAR*/}
      <div className='w-full h-[3rem] border-t-2 border-b-2 border-red-700 flex flex-row justify-center'>
          <span onClick={() => handleclick(false)} className='w-full  text-center font-bold text-red-500 hover:border-b-4 hover:border-red-400 flex items-center justify-center'>TỔNG QUAN</span>
          <span onClick={() => handleclick(true)} className='w-full  text-center font-bold text-red-500 hover:border-b-4 hover:border-red-400 flex items-center justify-center'>VÒNG LOẠI TRỰC TIẾP</span>
     </div>
      {/*CONTENT*/}
      {
        statusTongquan ? (
          <div className="w-full p-6 flex flex-col items-center mt-4">
      <h1 className="text-2xl font-bold text-red-600 mb-6">VÒNG LOẠI TRỰC TIẾP</h1>

      <div className="flex items-center gap-8 p-5 overflow-x-hidden bg-gray-100 flex-col lg:flex-row">
      {/* Quarter Finals */}
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold text-blue-600 mb-4">Tứ Kết</h2>
        {loaitructiep.quarterFinals.map((match, index) => (
          <MatchBox key={index} match={match} bgColor="bg-white-300" />
        ))}
      </div>

      {/* Semi Finals */}
      <div className="flex flex-col items-center ">
        <h2 className="text-lg font-semibold text-green-600 mb-4">Bán Kết</h2>
        {loaitructiep.semiFinals.map((match, index) => (
          <MatchBox key={index} match={match} bgColor="bg-white-200" />
        ))}
      </div>

      {/* Final */}
      <div className="flex flex-col items-center ">
        <h2 className="text-lg font-semibold text-yellow-600 mb-4">Chung Kết</h2>
        {loaitructiep.finals.map((match, index) => (
          <MatchBox key={index} match={match} bgColor="bg-white-200" />
        ))}
      </div>
    </div>
    </div>
          ):(
      <div className='w-full p-4 flex lg:flex-row flex-col h-full mt-2'>
        {/*LỊCH THI ĐẤU*/}
        <div className='w-full h-full border-r-2 border-gray-400 px-4'>
            <h1 className='text-xl text-red-600 font-bold my-4'>LỊCH THI ĐẤU</h1>
            <div className='w-full px-4 gap-2'>
              {matches.map((match)=>(
                <div key={match.id} className='w-full flex justify-between items-center border-b-2'>
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
        <div className='w-full lg:w-[30%] h-full flex items-center justify-center flex-col'>
            {/*BẢNG XẾP HẠNG*/}
            <div className='w-full p-4'>
          <h1 className='text-xl text-red-600 font-bold my-4'>BẢNG XẾP HẠNG</h1>
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value as 'A' | 'B' | 'C' | 'D')}
            className='mb-4 p-2 border rounded'>
            {Object.keys(groups).map((group) => (
              <option key={group} value={group}>Bảng {group}</option>
            ))}
          </select>
          <table className='w-full border-collapse border border-gray-400'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-400 p-2'>Team</th>
                <th className='border border-gray-400 p-2'>Trận</th>
                <th className='border border-gray-400 p-2'>W</th>
                <th className='border border-gray-400 p-2'>D</th>
                <th className='border border-gray-400 p-2'>L</th>
                <th className='border border-gray-400 p-2'>H/s</th>
                <th className='border border-gray-400 p-2'>Point</th>
        
              </tr>
            </thead>
            <tbody>
              {groups[selectedGroup].map((team) => (
                <tr key={team.id} className={`text-center ${team.id == 1 ? 'bg-green-200' : team.id == 2 ? 'bg-green-100' : ''}`}>
                  <td className='border border-gray-400 p-2'>{team.team}</td>
                  <td className='border border-gray-400 p-2'>{team.played}</td>
                  <td className='border border-gray-400 p-2'>{team.win}</td>
                  <td className='border border-gray-400 p-2'>{team.draw}</td>
                  <td className='border border-gray-400 p-2'>{team.loss}</td>
                  <td className='border border-gray-400 p-2'>{team.gd}</td>
                  <td className='border border-gray-400 p-2 font-bold'>{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Vua Phá Lưới */}
        <div className='w-full  p-4'>
          <h1 className='text-xl text-red-600 font-bold my-4'>TOP VUA PHÁ LƯỚI</h1>
          <table className='w-full border-collapse border border-gray-400'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-400 p-2'>Cầu thủ</th>
                <th className='border border-gray-400 p-2'>Đội</th>
                <th className='border border-gray-400 p-2'>Bàn thắng</th>
              </tr>
            </thead>
            <tbody>
              {topScorers.map((player) => (
                <tr key={player.id} className='text-center'>
                  <td className='border border-gray-400 p-2'>{player.player}</td>
                  <td className='border border-gray-400 p-2'>{player.team}</td>
                  <td className='border border-gray-400 p-2 font-bold'>{player.goals}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>    
      </div>
          )
      }
      
    </div>
  )
}

export default Webgiaibong
