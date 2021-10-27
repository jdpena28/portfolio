/** @format */

import React from 'react'
import Image from 'next/image'

const EachProject:React.FC<EachProject> = ({flex,title,desc,src,color,num}) => {
	return (
		<div>
			<div className = {`w-full h-max relative flex items-center gap-x-6 ${flex}`}>
				<Image src={src} className='z-20' height={420} width={420}/>
                <h4 className='absolute top-[20%] left-[23%] z-30 font-secondary font-semibold text-5xl'>{title}</h4>
                <p className={`absolute -bottom-3 z-20 underline text-8xl font-secondary font-semibold ${color}`}>{num}</p>
                <p className ='text-xl w-[30%]'>{desc}</p>
			</div>

		</div>
	)
}

export default EachProject
