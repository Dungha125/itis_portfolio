import React from 'react'
import IntroContent from '../content/IntroContent'

const Intro = () => {
  return (
    <section 
    className='flex flex-col items-center justify-center relative z-30 '
    >
        <div id='Intro'
        className='h-full w-full bg-[#040224] py-6 md:py-10'>
            <IntroContent ></IntroContent>
        </div>
        
    </section>
  )
}

export default Intro
