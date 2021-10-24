import React from 'react'
type btnProps = {
    btnClass: string|string[]
    text: string
}

const Button:React.FC<btnProps> = ({btnClass,text}) => {
    return (
        <div>
            <a href="#">
                <button className = {`${btnClass} w-36 h-14 rounded-md text-lg font-semibold text-white`}>{text}</button>
            </a>
        </div>
    )
}

export default Button
