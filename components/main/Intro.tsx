import React from 'react'
import IntroContent from '../content/IntroContent'

const Intro = () => {
  return (
    <section 
    className='flex flex-col items-center justify-center relative z-30 '
    >
        <div id='Intro'
        className='h-max w-full bg-[#040224] py-6'>
            <IntroContent ></IntroContent>
        </div>
        
    </section>
  )
}

export default Intro
