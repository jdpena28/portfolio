import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image'
import { Zoom } from '@mui/material';

const Stacks:React.FC<Stacks> = ({stacksTitle,stacksUrl,flex}) => {
    let id = 0
    return (
        <div className={`flex flex-col mx-11 ${flex}`}>
            <h4 className = 'text-3xl sm:text-2xl font-secondary font-normal'><span className= "font-primary font-normal text-purple-600">.</span>
            {stacksTitle}
            <span className='font-primary font-normal text-purple-600'>&#40;&#41;</span></h4>
            <div className='flex gap-x-5 mt-4'>
                {stacksUrl.map(e => {
                    return (
                        <Tooltip TransitionComponent={Zoom} title = {e.tooltipTitle}>
                            <div>
                                <Image  src = {e.url} height = {69} width = {69} />
                            </div>
                        </Tooltip>
                    )
                })}
            </div>
        </div>
    )
}

export default Stacks
