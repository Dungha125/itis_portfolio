import React from 'react';
import RoomContent from '../content/RoomContent';
var Room = function () {
    return (<section id='Room' className='relative w-full overflow-hidden h-full flex flex-col pb-12 '>
        <RoomContent></RoomContent>
    </section>);
};
export default Room;
