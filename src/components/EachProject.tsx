/** @format */

import React from 'react'
import Image from 'next/image'

const EachProject:React.FC<EachProject> = ({flex,title,desc,src,color,num,titleClass,descClass}) => {
	return (
		<div>
			<div className = {`w-full h-max relative sm:block flex items-center gap-x-6 sm:space-y-3 ${flex}`}>
				<Image src={src} className='z-20' height={315} width={600}/>
                <h4 className={`absolute sm:static z-30 font-secondary font-semibold text-5xl sm:text-3xl ${titleClass}`}>{title}</h4>
                <p className={`sm:hidden absolute -bottom-3 z-20 underline text-8xl  font-secondary font-semibold ${color}`}>{num}</p>
                <p className ={`text-xl font-light w-[30%] sm:w-full ${descClass}`}>{desc}</p>
			</div>

		</div>
	)
}

export default EachProject
