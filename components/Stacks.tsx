import React from 'react'
import Image from 'next/image'

const Stacks:React.FC<Stacks> = ({stacksTitle,stacksUrl,flex}) => {
    return (
        <div className={`flex flex-col ${flex}`}>
            <h4 className = 'text-2xl'><span className= "font-primary font-normal text-purple-600">.</span>
            {stacksTitle}
            <span className='font-primary font-normal text-purple-600'>&#40;&#41;</span></h4>
            <div className='flex gap-x-2 mt-4'>
                {stacksUrl.map(e => {
                    return (
                        <Image src = {e} height = {64} width = {64}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Stacks
