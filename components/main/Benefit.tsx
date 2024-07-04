import React from 'react'
import BenefitContent from '../content/BenefitContent'

const Benefit = () => {
  return (
    <section
    className='flex flex-col items-center justify-center h-full relative overflow-hidden z-30'
    >
        <BenefitContent></BenefitContent>
        <img src="/section_white.png" width={1920} alt="" className='w-full relative' />
    </section>
  )
}

export default Benefit
