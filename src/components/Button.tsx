import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

type btnProps = {
    btnClass: string|string[]
    text: string
    btnPath: string
}

const variants = {
    initialScale:{
        scale: 0,
    },
    animateScale:() => ({
        scale:1,
        transition :{
            duration: .4,
            delay: .3,
            bounce: .1,
            ease: 'easeOut',
        }
    }),
}

const Button:React.FC<btnProps> = ({btnClass,text,btnPath}) => {
    return (
        <div>
            <Link href={btnPath}>
                <motion.button 
                initial='initialScale'
                animate= 'animateScale'
                variants={variants}
                className = {`${btnClass} hover:ring-4 ring-offset-1 ring-offset-gray-900 w-36 h-14 rounded-md text-lg font-semibold text-white`}>{text}</motion.button>
            </Link>
        </div>
    )
}

export default Button
