
import ActivityAnnual from '@/components/main/ActivityMain/ActivityAnnual'
import ActivitySpecial from '@/components/main/ActivityMain/ActivitySpecial'
import Main from '@/components/main/ActivityMain/Main'
import Contact from '@/components/main/Contact'
import React from 'react'
const page = () => {
  return (
    <main className="h-full w-full kanit-regular">
      <div className="flex flex-col">
        <Main></Main>
        <ActivityAnnual></ActivityAnnual>
        <ActivitySpecial></ActivitySpecial>
        <Contact></Contact>
      </div>
    </main>
  )
}

export default page
