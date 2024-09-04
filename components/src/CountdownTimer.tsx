import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { slideInFromBottom } from '@/ulti/motion';

interface CountdownTimerProps {
  openingTime: Date;
  closingTime: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ openingTime, closingTime }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null); // Initialize as null
  const [showButton, setShowButton] = useState(false);
  const [phase, setPhase] = useState<'opening' | 'closing'>('opening');

  useEffect(() => {
    const timer = setInterval(() => {
      let currentTimeLeft: TimeLeft;

      if (phase === 'opening') {
        currentTimeLeft = calculateTimeLeft(openingTime);
        if (currentTimeLeft.total <= 0) {
          setPhase('closing');
          currentTimeLeft = calculateTimeLeft(closingTime);
          setShowButton(true);
        }
      } else {
        currentTimeLeft = calculateTimeLeft(closingTime);
        if (currentTimeLeft.total <= 0) {
          setShowButton(false);
          clearInterval(timer);
        }
      }

      setTimeLeft(currentTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [openingTime, closingTime, phase]);

  function calculateTimeLeft(targetTime: Date): TimeLeft {
    const difference = +new Date(targetTime) - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        total: 0,
      };
    }
  }

  // Initial render logic
  if (timeLeft === null) {
    return <div>Loading...</div>; // Render a loading state initially
  }

  return (
    <div className='flex flex-col items-center justify-center w-auto lg:px-16 xl:px-20 2xl:px-24'>
      <div className='text-center text-xl font-semibold w-full'>
        {phase === 'opening' ? (
          <div className='bg-slate-100 text-red-600 rounded-xl px-2 py-2 '>
            Mở đơn sau: {timeLeft.days} ngày {timeLeft.hours} giờ {timeLeft.minutes} phút {timeLeft.seconds} giây
          </div>
        ) : (
          <div className='bg-slate-100 text-green-600 rounded-xl px-2 py-2'>
            Đóng đơn sau: {timeLeft.days} ngày {timeLeft.hours} giờ {timeLeft.minutes} phút {timeLeft.seconds} giây
          </div>
        )}
      </div>
      {showButton && (
        <motion.div
          variants={slideInFromBottom}
          className='my-4 flex lg:px-16 xl:px-20 2xl:px-24 w-full items-center justify-center relative'
        >
          <button
            type='button'
            className='w-[12rem] xl:w-[14rem] 2xl:w-[16rem] h-[3rem] xl:h-[3.5rem] 2xl:h-[4rem] bg-gradient-to-r from-[#af4496] to-[#43139c] hover:bg-gradient-to-l font-medium text-xl xl:text-xl 2xl:text-2xl text-center text-white rounded-2xl'
          >
            <a href="/Register">Ứng tuyển ngay</a>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CountdownTimer;
