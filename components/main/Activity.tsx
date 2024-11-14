import React from 'react'
import AvtivityHomeContent from '../content/AvtivityHomeContent'

const Activity = () => {
  return (
    <>
    <section id='Activity'
    className='flex flex-col items-center justify-center h-full py-[2rem] relative bg-white overflow-hidden z-30'>
        <div className='w-full flex justify-center items-center lg:justify-start lg:px-24'>
          <img src="../SVG/slide.svg" width={400} alt="" />

        </div>
        <AvtivityHomeContent></AvtivityHomeContent>
    </section>
    </>
  )
}

export default Activity
