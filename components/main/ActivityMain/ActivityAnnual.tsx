import ActivityAnualContent from '@/components/content/ActivityContent/ActivityAnualContent'
import React from 'react'

const ActivityAnnual = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full z-20 overflow-hidden'>
        <img src="/section_white.png" width={1920} alt="" className='w-full relative' />
        <ActivityAnualContent></ActivityAnualContent>
        <img src="/section_white.png" width={1920} alt="" className='w-full rotate-180 relative -translate-y-1' />
    </section>
  )
}

export default ActivityAnnual
