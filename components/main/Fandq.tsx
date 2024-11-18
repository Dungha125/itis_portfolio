import React from 'react'
import FandqContent from '../content/FandqContent'

const Fandq = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center px-[2rem] z-[30] pb-[2rem] bg-white'>
        <div className='w-full bg-slate-100 rounded-lg pb-8'><FandqContent/></div>
    </div>
  )
}

export default Fandq