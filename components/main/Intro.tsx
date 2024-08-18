import React from 'react'
import IntroContent from '../content/IntroContent'

const Intro = () => {
  return (
    <section id='Intro' 
    className='flex flex-col items-center justify-center h-full relative overflow-hidden z-30 pb-10'
    >
        <div className='h-full w-full bg-[#efeeff]'>
        <img src="/SVG/tittle.svg" width={1920} alt="" className='w-full my-[4rem]'/>
        </div>
        <div
        className='h-full w-full bg-[#040224] '>
            <IntroContent ></IntroContent>
        </div>
        <div className='w-full h-full relative -z-9'>
          <img src="/ITIS LA NHA.png" width={1920} alt="" className='absolute -top-6 lg:-top-8 z-10 rotate-20 w-full' />
          <img src="/section.svg" width={1920} alt="" className='rotate-180 mb-0 relative pt-4 lg:pt-8 w-full'/>
        </div>
        
    </section>
  )
}

export default Intro
