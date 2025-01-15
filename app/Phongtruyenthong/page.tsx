import Contact from '@/components/main/Contact'
import Main from '@/components/main/TranditionalRoom/Main'
import React from 'react'

const page = () => {
  return (
    <main className="h-full w-full kanit-regular">
      <div className="flex flex-col">
        <Main />
        <Contact/>
      </div>
    </main>
  )
}

export default page