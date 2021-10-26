import React from 'react'
import Image from 'next/image'

const Stacks:React.FC<Stacks> = ({stacksTitle,stacksUrl}) => {
    return (
        <div>
            <h4><span className= "font-primary font-normal text-purple-600">.</span>
            {stacksTitle}
            <span className='font-primary font-normal text-purple-600'>&#40;&#41;</span></h4>
            <div className='flex gap-x-2'>
                {stacksUrl.map(e => {
                    return (
                        <Image src = {e} height = {32} width = {32}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Stacks
