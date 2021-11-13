import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image'
import { Zoom } from '@mui/material';

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
                        <Tooltip TransitionComponent={Zoom} disableFocusListener title = {e.tooltipTitle} key={id+=1}>
                            <div
                            data-aos={aos} data-aos-delay={index*100}>
                                <Image 
                                key={id++}  src = {e.url} height = {69} width = {69} />
                            </div>
                        </Tooltip>
                    )
                })}
            </div>
        </div>
    )
}

export default Stacks
