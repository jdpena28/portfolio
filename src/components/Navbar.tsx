/** @format */
import React, { useState } from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi'

const NavLinks: React.FC<NavLinks> = ({ path, title,className, onClick,delay}) => {
	return (
		<Link href={path}>
			<motion.a 
			initial = {{y: -50}}
			animate={{y:0}}
			transition={{type:'spring', duration:.8 ,delay:delay, bounce:.5}}
			className = {className} onClick = {onClick}>{title} </motion.a>
		</Link>
	)
}

const Navbar: React.FC = () => {
	const [menu, setMenu] = useState<boolean>(false)
	const onClick = () => {
		setMenu(false)
	}

	const variants = {
		hidden: {
			y: '-100vh'
		},
		visible: {
			y: 0,
			transition: {
				type:'spring',
				duration: .8,
				ease: 'easeInOut',
				bounce: .2,
			}
		},
		exit: {
			y:'-100vh',
			opacity:0
		}
	}

	return (
		<nav className='sm:sticky top-0 z-50 bg-gray-900'>
			<div className='flex justify-between text-lg py-3'>
				<p className='z-[51]'>jdpena</p>
				<div className='flex gap-x-3 font-normal sm:hidden'>
					<NavLinks path={'/#home'} title={'Home'} className = 'hover:bg-gray-600 bg-opacity-10 rounded-lg p-1' delay = {.1} /> 
					<NavLinks path={'/#about'} title={'About'} className = 'hover:bg-gray-600 bg-opacity-10 rounded-lg p-1' delay = {.3}/> 
					<NavLinks path={'/#project'} title={'Projects'} className = 'hover:bg-gray-600 bg-opacity-10 rounded-lg p-1' delay = {.5}  /> 
					<NavLinks path={'/#contacts'} title={'Contacts'} className = 'hover:bg-gray-600 bg-opacity-10 rounded-lg p-1' delay = {.7}/>
				</div>
				<BiMenuAltRight
					className='cursor-pointer hidden sm:block z-[51]'
					onClick={() => (menu ? setMenu(false) : setMenu(true))}
					size={32}
				/>
			</div>
			<AnimatePresence>
			{menu && (
				<motion.div 
				variants={variants}
				initial="hidden"
				animate="visible"
				exit="exit"
				className="hidden z-[3] absolute sm:flex flex-col text-center w-full h-screen mx-auto text-lg backdrop-filter backdrop-blur-md bg-gray-900 bg-opacity-30">
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
