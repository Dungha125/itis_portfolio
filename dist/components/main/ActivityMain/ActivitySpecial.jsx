import ActivitySpecialContent from '@/components/content/ActivityContent/ActivitySpecialContent';
import React from 'react';
var ActivitySpecial = function () {
    return (<>
    <div className='w-full bg-white '>
      <img src="/section_white.png" width={1920} alt="" className='w-full rotate-180 relative -translate-y-1'/>
      <ActivitySpecialContent />
    </div>
    <img src="/section_white.png" width={1920} alt="" className='w-full rotate-180 relative -translate-y-1'/>
    </>);
};
export default ActivitySpecial;