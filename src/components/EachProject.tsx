/** @format */
import React,{useState} from 'react'
import {BiLinkExternal} from 'react-icons/bi'
import {VscGithub} from 'react-icons/vsc'
import Image from 'next/image'
import {AnimatePresence, motion} from 'framer-motion'

const EachProject:React.FC<EachProject> = ({flex,title,desc,src,color,num,titleClass,descClass,hoverClass,hoverDesc,github,link,imgAOS,textAOS}) => {
	const [imgHover,setImgHover] = useState<boolean>(false)

	const variants = {
		hidden: {
				scale: 0
			},
		visible: {
			scale:1,
			transition: {
				duration: .3,
				delay: .1,
				ease: 'easeInOut',
			}
		},
		exit: {
			scale:0,
		}
	}

	return (
		<div>
			<div className = {`relative sm:block flex items-center gap-x-6 sm:space-y-3 ${flex}`}>
				<div 
				data-aos={imgAOS}
				className="relative z-20 h-full w-[full]" 
				onMouseEnter={()=>setImgHover(true)} onMouseLeave={()=>setImgHover(false)} 
				onClick ={()=>imgHover?setImgHover(false):setImgHover(true)}>
					<Image src={src} width={600} height={315}/>		
					<AnimatePresence>			
					{imgHover && 
					<motion.div 
						initial='hidden'
						animate ='visible'
						variants={variants}
						exit ='exit'
						key = {link}
						className = 'absolute top-0 w-full h-full bg-gray-700 bg-opacity-60'>
						<div className={`${hoverClass} w-full h-full flex items-end justify-end sm:justify-between p-2  gap-x-7 sm:gap-x-0 sm:text-sm`}>
							<p>{hoverDesc}</p>
							<div className='flex gap-x-1'>
								<a href={github}><VscGithub size ={26} /></a>
								<a href={link}><BiLinkExternal size={26}/></a>
							</div>
						</div>
					</motion.div>}
					</AnimatePresence>
				</div>
                <h4 data-aos = {textAOS} className={`absolute sm:static z-30 font-secondary font-semibold text-5xl sm:text-3xl ${titleClass}`}>{title}</h4>
                <p data-aos={imgAOS} className={`sm:hidden absolute -bottom-3 z-20 underline text-8xl  font-secondary font-semibold ${color}`}>{num}</p>
                <p data-aos = {textAOS} className ={`text-xl sm:text-lg font-normal w-[30%] sm:w-full ${descClass}`}>{desc}</p>
			</div>

		</div>
	)
}

export default EachProject
