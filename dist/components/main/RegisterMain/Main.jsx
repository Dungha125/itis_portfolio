import React from 'react';
import FormRegister from '@/components/src/FormRegister';
var Main = function () {
    return (<div className='flex flex-col h-full w-full px-2 lg:px-[4rem] bg-transparent' style={{
            backgroundImage: 'url(/back.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
    
        <FormRegister />
    </div>);
};
export default Main;
