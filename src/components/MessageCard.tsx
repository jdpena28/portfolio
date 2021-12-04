import React from 'react'

const MessageCard = () => {
    return (
        <div className='h-44 w-96 bg-[#E5E7EB] rounded-md text-black text-lg font-secondary p-2'>
            <div className='flex items-center gap-x-3'>
                <p className='font-semibold'>John Does Legaspi</p>
                <div className='bg-gray-300 w-3 h-3 rounded-[50%]'></div>
                <p>09/28/2021</p>
            </div>
            <p className='overflow-ellipsis'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quos quod incidunt, dolorum possimus architecto ut? Ut quas ratione est dolorem magni, recusandae at? Nesciunt facilis provident voluptates magnam sed consequatur cupiditate.
            </p>
        </div>
    )
}

export default MessageCard
