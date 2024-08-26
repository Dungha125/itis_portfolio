import React from 'react'

import FormRegister from '@/components/src/FormRegister'

const Main = () => {
  return (
    <div className='flex flex-col h-full w-full px-2 lg:px-[4rem] bg-transparent'
    style={{
      backgroundImage: 'url(/back.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed' 
    }}>
    
        <FormRegister/>
    </div>
  )
}

export default Main