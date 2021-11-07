import React from 'react'
import Link from 'next/link'
type btnProps = {
    btnClass: string|string[]
    text: string
    btnPath: string
}

const Button:React.FC<btnProps> = ({btnClass,text,btnPath}) => {
    return (
        <div>
            <Link href={btnPath}>
                <button className = {`${btnClass} w-36 h-14 rounded-md text-lg font-semibold text-white`}>{text}</button>
            </Link>
        </div>
    )
}

export default Button
