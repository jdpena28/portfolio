/** @format */
import React,{useState} from 'react'
import {BiLinkExternal} from 'react-icons/bi'
import {VscGithub} from 'react-icons/vsc'
import Image from 'next/image'

const EachProject:React.FC<EachProject> = ({flex,title,desc,src,color,num,titleClass,descClass,hoverClass,hoverDesc,github,link}) => {
	const [imgHover,setImgHover] = useState<boolean>(false)
	return (
		<div>
			<div className = {`relative sm:block flex items-center gap-x-6 sm:space-y-3 ${flex}`}>
				<div className="relative z-20 h-[315px] w-[600px]" onMouseEnter={()=>setImgHover(true)} onMouseLeave={()=>setImgHover(false)}>
					<Image src={src} layout='fill'/>					
					{imgHover && 
	
					<div className = 'absolute w-full h-full bg-gray-700 bg-opacity-60'>
						<div className={`${hoverClass} w-full h-full flex items-end p-2 gap-x-7`}>
							<p>{hoverDesc}</p>
							<div className='flex gap-x-1'>
								<a href={github}><VscGithub size ={30} /></a>
								<a href={link}><BiLinkExternal size={30}/></a>
							</div>
						</div>
					</div>
					}
				</div>
                <h4 className={`absolute sm:static z-30 font-secondary font-semibold text-5xl sm:text-3xl ${titleClass}`}>{title}</h4>
                <p className={`sm:hidden absolute -bottom-3 z-20 underline text-8xl  font-secondary font-semibold ${color}`}>{num}</p>
                <p className ={`text-xl font-light w-[30%] sm:w-full ${descClass}`}>{desc}</p>
			</div>

		</div>
	)
}

export default EachProject
