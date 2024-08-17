import React from 'react';
import MainContent from '../content/MainContent';

interface MainProps {
  onClick: () => void;  
}

const Main: React.FC<MainProps> = ({ onClick }) => {
  return (
    <div className='relative flex flex-col items-center justify-center w-full min-h-screen bg-white'>
      <div className='absolute inset-0'>
        <img src="/back.png" height={1500} alt="" className='object-cover h-full w-full' />
      </div>
      <MainContent onClick={onClick} /> 
    </div>
  );
};

export default Main;
