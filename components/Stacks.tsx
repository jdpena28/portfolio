import React from 'react'
import Image from 'next/image'

const Stacks:React.FC<Stacks> = ({stacksTitle,stacksUrl,flex}) => {
    return (
        <div className={`flex flex-col ml-11 mr-11 ${flex}`}>
            <h4 className = 'text-3xl font-secondary font-normal'><span className= "font-primary font-normal text-purple-600">.</span>
            {stacksTitle}
            <span className='font-primary font-normal text-purple-600'>&#40;&#41;</span></h4>
            <div className='flex gap-x-5 mt-4'>
                {stacksUrl.map(e => {
                    return (
                        <Image  src = {e} height = {69} width = {69}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Stacks
