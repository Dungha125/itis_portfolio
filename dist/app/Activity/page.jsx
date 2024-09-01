import ActivityAnnual from '@/components/main/ActivityMain/ActivityAnnual';
import ActivitySpecial from '@/components/main/ActivityMain/ActivitySpecial';
import Main from '@/components/main/ActivityMain/Main';
import Contact from '@/components/main/Contact';
import React from 'react';
var page = function () {
    return (<main className="h-full w-full">
      <div className="flex flex-col">
        <Main></Main>
        <ActivityAnnual></ActivityAnnual>
        <ActivitySpecial></ActivitySpecial>
        <Contact></Contact>
      </div>
    </main>);
};
export default page;
