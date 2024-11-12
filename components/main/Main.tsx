import React from 'react';
import MainContent from '../content/MainContent';

const Main = () => {
  return (
    <div className='relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-white lg:px-20 xl:px-32 2xl:px-40'>
      <MainContent /> 
      <div className="w-full md:w-1/2 flex justify-center items-center h-full">
        <img 
          src="./logo.svg" 
          alt="icon" 
          className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto" 
        />
      </div>
       
    </div>
  );
};

export default Main;
