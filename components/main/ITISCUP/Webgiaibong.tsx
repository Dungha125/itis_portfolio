import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Dir } from 'fs';


const matches = [
  //LUOT TRAN 1
  { id: 1,type: 'Bảng A', team1: 'GV-CNTT', team2: 'FC Thổi Bọt', time: '09:00', date: '2025-02-23', result: '1 - 6'},
  { id: 2,type: 'Bảng A', team1: 'D24CN02', team2: 'FC NGHỆ', time: '09:00', date: '2025-02-23', result: '0 - 2'},
  { id: 3,type: 'Bảng B', team1: 'FC Lock', team2: 'FC Nhặt', time: '09:00', date: '2025-02-23', result: '2 - 0'},
  { id: 4,type: 'Bảng B', team1: 'Vinamilk FC', team2: 'VN02', time: '09:00', date: '2025-02-23' , result: '6 - 1'},
  { id: 5,type: 'Bảng C', team1: 'CE01', team2: 'CE04-24', time: '13:30', date: '2025-02-23' , result: '1 - 5'},
  { id: 6,type: 'Bảng C', team1: 'FC Dưỡng Sinh', team2: 'BallHub', time: '13:30', date: '2025-02-23' , result: '3 - 0'},
  { id: 7,type: 'Bảng D', team1: 'CNTT-03B', team2: 'FC Low Tech', time: '13:30', date: '2025-02-23' , result: '0 - 2'},
  { id: 8,type: 'Bảng E', team1: 'FC Tứ Quý', team2: 'ITIS YOUNG', time: '13:30', date: '2025-02-23' , result: '1 - 2'},
  { id: 9,type: 'Bảng F', team1: 'D23KH02', team2: 'D22KH02', time: '14:30', date: '2025-02-23' , result: '1 - 1'},
  //LUOT TRAN 2
  { id: 1,type: 'Bảng A', team1: 'GV-CNTT', team2: 'FC NGHỆ', time: '13:30', date: '2025-03-02', result: '3 - 3'},
  { id: 2,type: 'Bảng A', team1: 'D24CN02', team2: 'FC Thổi Bọt', time: '13:30', date: '2025-03-02', result: '2 - 2'},
  { id: 3,type: 'Bảng B', team1: 'FC Lock', team2: 'VN02', time: '13:30', date: '2025-03-02', result: '1 - 2'},
  { id: 4,type: 'Bảng B', team1: 'Vinamilk FC', team2: 'FC Nhặt', time: '13:30', date: '2025-03-02' , result: '6 - 1'},
  { id: 5,type: 'Bảng C', team1: 'CE01', team2: 'BallHub', time: '14:30', date: '2025-03-02', result: '1 - 5'},
  { id: 6,type: 'Bảng C', team1: 'FC Dưỡng Sinh', team2: 'CE04-24', time: '14:30', date: '2025-03-02', result: '4 - 4'},
  { id: 7,type: 'Bảng D', team1: 'CNTT-03B', team2: 'CE03', time: '14:30', date: '2025-03-02', result: '2 - 0'},
  { id: 8,type: 'Bảng E', team1: 'D24CQCE06-B', team2: 'ITIS YOUNG', time: '14:30', date: '2025-03-02', result: '0 - 4'},
  { id: 9,type: 'Bảng F', team1: 'FC Bóng Hồng', team2: 'D22KH02', time: '15:30', date: '2025-03-02', result: '3 - 0'},
  //LUOT TRAN 3
  { id: 1,type: 'Bảng A', team1: 'GV-CNTT', team2: 'D24CN02', time: '13:30', date: '2025-03-09', result: '2 - 4'},
  { id: 2,type: 'Bảng A', team1: 'FC NGHỆ', team2: 'FC Thổi Bọt', time: '13:30', date: '2025-03-09', result: '1 - 1'},
  { id: 3,type: 'Bảng B', team1: 'FC Lock', team2: 'Vinamilk FC', time: '13:30', date: '2025-03-09', result: '1 - 0'},
  { id: 4,type: 'Bảng B', team1: 'VN02', team2: 'FC Nhặt', time: '13:30', date: '2025-03-09' , result: '4 - 6'},
  { id: 5,type: 'Bảng C', team1: 'CE01', team2: 'FC Dưỡng Sinh', time: '14:30', date: '2025-03-09', result: '0 - 12'},
  { id: 6,type: 'Bảng C', team1: 'CE04-24', team2: 'BallHub', time: '14:30', date: '2025-03-09', result: '0 - 1'},
  { id: 7,type: 'Bảng D', team1: 'CE03', team2: 'FC Low Tech', time: '14:30', date: '2025-03-09', result: '0 - 6'},
  { id: 8,type: 'Bảng E', team1: 'FC Tứ Quý', team2: 'D24CQCE06-B', time: '14:30', date: '2025-03-09', result: '4 - 1'},
  { id: 9,type: 'Bảng F', team1: 'D23KH02', team2: 'FC Bóng Hồng', time: '15:30', date: '2025-03-09', result: '2 - 0'},
  //TỨ Kết
  { id: 1,type: 'Tứ kết', team1: 'FC Vinamilk', team2: 'FC Low Tech', time: '15:00', date: '2025-03-16', result: '0 - 0'},
  { id: 2,type: 'Tứ kết', team1: 'FC Tứ Quý', team2: 'FC Dưỡng sinh', time: '15:00', date: '2025-03-16', result: '0 - 0'},
  { id: 3,type: 'Tứ kết', team1: 'FC Thổi bọt', team2: 'D23KH02', time: '15:00', date: '2025-03-16', result: '0 - 0'},
  { id: 4,type: 'Tứ kết', team1: 'ITIS YOUNG', team2: 'FC BallHub', time: '15:00', date: '2025-03-16' , result: '0 - 0'},

];

const matchRounds = {
  '2025-02-23': 'Lượt trận 1',
  '2025-03-02': 'Lượt trận 2',
  '2025-03-09': 'Lượt trận 3',
  '2025-03-16': 'Tứ kết'
};

const loaitructiep = {
  quarterFinals: [
    { team1: "FC Thổi Bọt", score1: 0, team2: "D23KH02", score2: 0, time: '16-03-2025', type:'Tứ kết' },
    { team1: "Vinamilk FC", score1: 0, team2: "FC Lowtech", score2: 0, time: '06-04-2025', type:'Tứ kết' },
    { team1: "BallHub", score1: 0, team2: "ITIS YOUNG", score2: 0, time: '06-04-2025', type:'Tứ kết' },
    { team1: "FC Tứ Quý", score1: 0, team2: "FC Dưỡng sinh", score2: 0, time: '06-04-2025', type:'Tứ kết' },
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

const groups = {A: [{'id': 1,
   'team': 'FC Thổi Bọt',
   'played': 3,
   'win': 1,
   'draw': 2,
   'loss': 0,
   'gd': 5,
   'points': 5},
  {'id': 2,
   'team': 'FC NGHỆ',
   'played': 3,
   'win': 1,
   'draw': 2,
   'loss': 0,
   'gd': 2,
   'points': 5},
  {'id': 3,
   'team': 'D24CN02',
   'played': 3,
   'win': 1,
   'draw': 1,
   'loss': 1,
   'gd': 0,
   'points': 4},
  {'id': 4,
   'team': 'GV-CNTT',
   'played': 3,
   'win': 0,
   'draw': 1,
   'loss': 2,
   'gd': -7,
   'points': 1}],
 B: [{'id': 1,
   'team': 'Vinamilk FC',
   'played': 3,
   'win': 2,
   'draw': 0,
   'loss': 1,
   'gd': 9,
   'points': 6},
  {'id': 2,
   'team': 'FC Lock',
   'played': 3,
   'win': 2,
   'draw': 0,
   'loss': 1,
   'gd': 2,
   'points': 6},
  {'id': 3,
   'team': 'FC Nhặt',
   'played': 3,
   'win': 1,
   'draw': 0,
   'loss': 2,
   'gd': -5,
   'points': 3},
  {'id': 4,
   'team': 'VN02',
   'played': 3,
   'win': 1,
   'draw': 0,
   'loss': 2,
   'gd': -6,
   'points': 3}],
 C: [{'id': 1,
   'team': 'FC Dưỡng Sinh',
   'played': 3,
   'win': 2,
   'draw': 1,
   'loss': 0,
   'gd': 15,
   'points': 7},
  {'id': 2,
   'team': 'BallHub',
   'played': 3,
   'win': 2,
   'draw': 0,
   'loss': 1,
   'gd': 2,
   'points': 6},
  {'id': 3,
   'team': 'CE04-24',
   'played': 3,
   'win': 1,
   'draw': 1,
   'loss': 1,
   'gd': 3,
   'points': 4},
  {'id': 4,
   'team': 'CE01',
   'played': 3,
   'win': 0,
   'draw': 0,
   'loss': 3,
   'gd': -20,
   'points': 0}],
 D: [{'id': 1,
   'team': 'FC Low Tech',
   'played': 2,
   'win': 2,
   'draw': 0,
   'loss': 0,
   'gd': 8,
   'points': 6},
  {'id': 2,
   'team': 'CNTT-03B',
   'played': 2,
   'win': 1,
   'draw': 0,
   'loss': 1,
   'gd': 0,
   'points': 3},
  {'id': 3,
   'team': 'CE03',
   'played': 2,
   'win': 0,
   'draw': 0,
   'loss': 2,
   'gd': -8,
   'points': 0}],
 E: [{'id': 1,
   'team': 'ITIS YOUNG',
   'played': 2,
   'win': 2,
   'draw': 0,
   'loss': 0,
   'gd': 5,
   'points': 6},
  {'id': 2,
   'team': 'FC Tứ Quý',
   'played': 2,
   'win': 1,
   'draw': 0,
   'loss': 1,
   'gd': 2,
   'points': 3},
  {'id': 3,
   'team': 'D24CQCE06-B',
   'played': 2,
   'win': 0,
   'draw': 0,
   'loss': 2,
   'gd': -7,
   'points': 0}],
 F: [{'id': 1,
   'team': 'D23KH02',
   'played': 2,
   'win': 1,
   'draw': 1,
   'loss': 0,
   'gd': 2,
   'points': 4},
  {'id': 2,
   'team': 'FC Bóng Hồng',
   'played': 2,
   'win': 1,
   'draw': 0,
   'loss': 1,
   'gd': 1,
   'points': 3},
  {'id': 3,
   'team': 'D22KH02',
   'played': 2,
   'win': 0,
   'draw': 1,
   'loss': 1,
   'gd': -3,
   'points': 1}]};

const topScorers = [
  { id: 1, player: 'CXĐ', team: 'CXĐ', goals: 0 },

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

  const [selectedGroup, setSelectedGroup] = useState<'A' | 'B' | 'C' | 'D' | 'E' | 'F'>('A')
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
            <p className="font-bold">{match.team2}</p>
            <p className="text-lg text-gray-800  py-1">{match.score2}</p>
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
                    <p className="text-base font-bold">{match.team1} vs {match.team2}</p>
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
            {Object.entries(matchRounds).map(([date, roundName]) => (
              <div key={date} className="mb-6">
                <h2 className="text-lg text-blue-600 font-bold my-2">{roundName} - {date}</h2>
                {matches
                  .filter((match) => match.date === date)
                  .map((match) => (
                    <div key={`${match.date}-${match.id}`} className='w-full flex justify-between items-center border-b-2'>
                      <p className='w-full text-gray-500 text-base'>{match.time}</p>
                      <span className='w-full flex items-center justify-center flex-col'>
                        <p className='text-gray-500 text-base'>{match.type}</p>
                        <p className='text-gray-800 text-base font-bold'>{match.team1} - {match.team2}</p>
                      </span>
                      <p className='w-full text-gray-800 text-base text-center'>{match.result}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        {/*TAB*/}
        <div className='w-full lg:w-[40%] h-full flex items-center justify-center flex-col'>
            {/*BẢNG XẾP HẠNG*/}
            <div className='w-full p-2'>
          <h1 className='text-xl text-red-600 font-bold my-4'>BẢNG XẾP HẠNG</h1>
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value as 'A' | 'B' | 'C' | 'D' | 'E' | 'F')}
            className='mb-4 p-2 border rounded'>
            {Object.keys(groups).map((group) => (
              <option key={group} value={group}>Bảng {group}</option>
            ))}
          </select>
          <table className='w-full border-collapse border border-gray-400'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-400 p-2 max-w-[150px]'>Team</th>
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
                  <td className='border border-gray-400 p-2 max-w-[150px]'>{team.team}</td>
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
