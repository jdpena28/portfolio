/** @format */
import React, { useState } from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi'

const NavLinks: React.FC<NavLinks> = ({ path, title, onClick,delay}) => {
	return (
		<Link href={path}>
			<motion.a 
			initial = {{y: -50}}
			animate={{y:0}}
			transition={{type:'spring', duration:.8 ,delay:delay, bounce:.5}}
			className = 'hover:bg-gray-600 bg-opacity-10 rounded-lg p-1 cursor-pointer' 
			onClick = {onClick}>{title} </motion.a>
		</Link>
	)
}

const Navbar: React.FC = () => {
	const [menu, setMenu] = useState<boolean>(false)
	const onClick = () => {
		setMenu(false)
	}

	const variants = {
		mobileHidden: {
			y: '-100vh'
		},
		mobileVisible: {
			y: 0,
			transition: {
				type:'spring',
				duration: .8,
				ease: 'easeInOut',
				bounce: .2,
			}
		},
		mobileExit: {
			y:'-100vh',
			opacity:0
		},
		menuInitial: {
			x: '150vw'
		},
		menuVisible: { 
			x: 0,
			transition: {
				type:'spring',
				duration: .8,
				bounce: .02
			}
		},
	}

	const svgVariants ={
		pathInitial: {
			pathLength: 0
		},
		pathVisible: {
			pathLength: 1,
			transition: {
				duration: 1.1,
				delay: .3,
				ease: 'easeInOut',
			}
		}
	}


	
	return (
		<nav className='sm:sticky top-0 z-50 bg-gray-900 text-gray-200 mx-12 sm:mx-3'>
			<div className='flex justify-between items-center text-lg py-3 overflow-x-hidden'>
				<motion.svg  
				variants={svgVariants}
				initial={'pathInitial'}
				animate={'pathVisible'}
				className='stroke-current text-white z-[51]'
				width="70" height="14" viewBox="0 0 70 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<motion.path variants={svgVariants} d="M9.03599 0.364014V8.96801C9.03599 10.3 8.65799 11.326 7.90199 12.046C7.15799 12.766 6.14999 13.126 4.87799 13.126C3.54599 13.126 2.47799 12.748 1.67399 11.992C0.869987 11.236 0.467987 10.162 0.467987 8.77001H3.52799C3.52799 9.29801 3.63599 9.70001 3.85199 9.97601C4.06799 10.24 4.37999 10.372 4.78799 10.372C5.15999 10.372 5.44799 10.252 5.65199 10.012C5.85599 9.77201 5.95799 9.42401 5.95799 8.96801V0.364014H9.03599Z"/>
					<motion.path variants={svgVariants} d="M16.2562 0.364014C17.5882 0.364014 18.7522 0.628014 19.7482 1.15601C20.7442 1.68401 21.5122 2.42801 22.0522 3.38801C22.6042 4.33601 22.8802 5.43401 22.8802 6.68201C22.8802 7.91801 22.6042 9.01601 22.0522 9.97601C21.5122 10.936 20.7382 11.68 19.7302 12.208C18.7342 12.736 17.5762 13 16.2562 13H11.5222V0.364014H16.2562ZM16.0582 10.336C17.2222 10.336 18.1282 10.018 18.7762 9.38201C19.4242 8.74601 19.7482 7.84601 19.7482 6.68201C19.7482 5.51801 19.4242 4.61201 18.7762 3.96401C18.1282 3.31601 17.2222 2.99201 16.0582 2.99201H14.6002V10.336H16.0582Z" />
					<motion.path variants={svgVariants} d="M34.2304 4.43201C34.2304 5.16401 34.0624 5.83601 33.7264 6.44801C33.3904 7.04801 32.8744 7.53401 32.1784 7.90601C31.4824 8.27801 30.6184 8.46401 29.5864 8.46401H27.6784V13H24.6004V0.364014H29.5864C30.5944 0.364014 31.4464 0.538014 32.1424 0.886014C32.8384 1.23401 33.3604 1.71401 33.7084 2.32601C34.0564 2.93801 34.2304 3.64001 34.2304 4.43201ZM29.3524 6.01601C29.9404 6.01601 30.3784 5.87801 30.6664 5.60201C30.9544 5.32601 31.0984 4.93601 31.0984 4.43201C31.0984 3.92801 30.9544 3.53801 30.6664 3.26201C30.3784 2.98601 29.9404 2.84801 29.3524 2.84801H27.6784V6.01601H29.3524Z" />
					<motion.path variants={svgVariants} d="M45.3008 7.81601C45.3008 8.10401 45.2828 8.40401 45.2468 8.71601H38.2808C38.3288 9.34001 38.5268 9.82001 38.8748 10.156C39.2348 10.48 39.6728 10.642 40.1888 10.642C40.9568 10.642 41.4908 10.318 41.7908 9.67001H45.0668C44.8988 10.33 44.5928 10.924 44.1488 11.452C43.7168 11.98 43.1708 12.394 42.5108 12.694C41.8508 12.994 41.1128 13.144 40.2968 13.144C39.3128 13.144 38.4368 12.934 37.6688 12.514C36.9008 12.094 36.3008 11.494 35.8688 10.714C35.4368 9.93402 35.2208 9.02201 35.2208 7.97801C35.2208 6.93401 35.4308 6.02201 35.8508 5.24201C36.2828 4.46201 36.8828 3.86201 37.6508 3.44201C38.4188 3.02201 39.3008 2.81201 40.2968 2.81201C41.2688 2.81201 42.1328 3.01601 42.8888 3.42401C43.6448 3.83201 44.2328 4.41401 44.6528 5.17001C45.0848 5.92601 45.3008 6.80801 45.3008 7.81601ZM42.1508 7.00601C42.1508 6.47801 41.9708 6.05801 41.6108 5.74601C41.2508 5.43401 40.8008 5.27801 40.2608 5.27801C39.7448 5.27801 39.3068 5.42801 38.9468 5.72801C38.5988 6.02801 38.3828 6.45401 38.2988 7.00601H42.1508Z"/>
					<motion.path variants={svgVariants} d="M53.0446 2.84801C54.2206 2.84801 55.1566 3.23201 55.8526 4.00001C56.5606 4.75601 56.9146 5.80001 56.9146 7.13201V13H53.8546V7.54601C53.8546 6.87401 53.6806 6.35201 53.3326 5.98001C52.9846 5.60801 52.5166 5.42201 51.9286 5.42201C51.3406 5.42201 50.8726 5.60801 50.5246 5.98001C50.1766 6.35201 50.0026 6.87401 50.0026 7.54601V13H46.9246V2.95601H50.0026V4.28801C50.3146 3.84401 50.7346 3.49601 51.2626 3.24401C51.7906 2.98001 52.3846 2.84801 53.0446 2.84801Z"/>
					<motion.path variants={svgVariants} d="M58.4415 7.96001C58.4415 6.92801 58.6335 6.02201 59.0175 5.24201C59.4135 4.46201 59.9475 3.86201 60.6195 3.44201C61.2915 3.02201 62.0415 2.81201 62.8695 2.81201C63.5775 2.81201 64.1955 2.95601 64.7235 3.24401C65.2635 3.53201 65.6775 3.91001 65.9655 4.37801V2.95601H69.0435V13H65.9655V11.578C65.6655 12.046 65.2455 12.424 64.7055 12.712C64.1775 13 63.5595 13.144 62.8515 13.144C62.0355 13.144 61.2915 12.934 60.6195 12.514C59.9475 12.082 59.4135 11.476 59.0175 10.696C58.6335 9.90401 58.4415 8.99201 58.4415 7.96001ZM65.9655 7.97801C65.9655 7.21001 65.7495 6.60401 65.3175 6.16001C64.8975 5.71601 64.3815 5.49401 63.7695 5.49401C63.1575 5.49401 62.6355 5.71601 62.2035 6.16001C61.7835 6.59201 61.5735 7.19201 61.5735 7.96001C61.5735 8.72801 61.7835 9.34001 62.2035 9.79601C62.6355 10.24 63.1575 10.462 63.7695 10.462C64.3815 10.462 64.8975 10.24 65.3175 9.79601C65.7495 9.35201 65.9655 8.74601 65.9655 7.97801Z"/>
				</motion.svg>
				<div className='flex gap-x-3 font-normal sm:hidden'>
					<NavLinks path={'/#home'} title={'Home'} delay = {.1} /> 
					<NavLinks path={'/#about'} title={'About'} delay = {.3}/> 
					<NavLinks path={'/#project'} title={'Projects'} delay = {.5}  /> 
					<NavLinks path={'/#contacts'} title={'Contacts'} delay = {.7}/>
				</div>
				<motion.div
				initial = 'menuInitial'
				animate= 'menuVisible'
				variants = {variants}
				className='cursor-pointer hidden sm:block z-[51]'
				>
					<BiMenuAltRight onClick={() => (menu ? setMenu(false) : setMenu(true))} size={32}/>
				</motion.div>
			</div>
			<AnimatePresence>
			{menu && (
				<motion.div 
				variants={variants}
				initial="mobileHidden"
				animate="mobileVisible"
				exit="mobileExit"
				className="hidden absolute sm:flex flex-col text-center w-full h-[110vh] mx-auto text-lg backdrop-filter backdrop-blur-md bg-gray-900 bg-opacity-30">
					<div className='w-full sm:flex flex-col mx-auto'>
					<NavLinks path={'/#home'} title={'Home'} className='py-2' onClick={onClick}/> 
					<NavLinks path={'/#about'} title={'About'} className='py-2' onClick={onClick}/> 
					<NavLinks path={'/#project'} title={'Projects'} className='py-2' onClick={onClick}/> 
					<NavLinks path={'/#contacts'} title={'Contacts'} className = 'pt-2' onClick={onClick} />
					</div>
				</motion.div>
			)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
