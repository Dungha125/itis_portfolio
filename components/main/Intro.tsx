import React from 'react'
import IntroContent from '../content/IntroContent'

const Intro = () => {
  return (
    <section
    className='flex flex-col items-center justify-center my-2 h-full relative overflow-hidden z-30'
    >
        <img src="/section.svg" width={1920} alt="" className='mb-0'/>
        <div
        className='h-full w-full bg-[#040224] '>
            <IntroContent ></IntroContent>
        </div>
        <img src="/section.svg" width={1920} alt="" className='rotate-180 mb-0 relative'/>
    </section>
  )
}

export default Intro
