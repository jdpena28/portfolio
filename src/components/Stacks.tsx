import React from 'react'
import Image from 'next/image'


const Stacks:React.FC<Stacks> = ({stacksTitle,stacksUrl,flex,aos}) => {
    let id = 0
    return (
        <div className={`flex flex-col mx-11 ${flex} overflow-x-hidden`}>
            <h4 
            data-aos={aos} 
            className = 'text-3xl sm:text-2xl font-secondary font-normal'><span className= "font-primary font-normal text-purple-600">.</span>
            {stacksTitle}
            <span className='font-primary font-normal text-purple-600'>&#40;&#41;</span></h4>
            <div className='flex gap-x-5 mt-4'>
                {stacksUrl.map((e,index) => {
                    return (
                            <div key={id+=1}
                            data-aos={aos} data-aos-delay={index*100}>
                                <Image 
                                key={id++}  src = {e.url} height = {69} width = {69} />
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Stacks
