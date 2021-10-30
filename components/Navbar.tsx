/** @format */
import React, { useState } from 'react'
import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi'

const NavLinks: React.FC<NavLinks> = ({ path, title,className }) => {
	return (
		<Link href={path}>
			<a className = {className}>{title}</a>
		</Link>
	)
}

const Navbar: React.FC = () => {
	const [menu, setMenu] = useState<boolean>(true)
	return (
		<nav>
			<div className='flex justify-between text-lg p-5'>
				<p>jdpena</p>
				<div className='flex gap-x-3 font-normal sm:hidden'>
					<NavLinks path={'/#home'} title={'Home'} /> /
					<NavLinks path={'/#about'} title={'About'} /> /
					<NavLinks path={'/#project'} title={'Projects'} /> /
					<NavLinks path={'/#contacts'} title={'Contacts'} />
				</div>
				<BiMenuAltRight
					className='cursor-pointer hidden sm:block'
					onClick={() => (menu ? setMenu(false) : setMenu(true))}
					size={32}
				/>
			</div>
			{menu ? (
				<div className="absolute flex flex-col text-center h-screen w-full text-lg">
					<NavLinks path={'/#home'} title={'Home'} className='border-b-2 py-2 border-gray-800'/> 
					<NavLinks path={'/#about'} title={'About'} className='border-b-2 py-2 border-gray-800'/> 
					<NavLinks path={'/#project'} title={'Projects'} className='border-b-2 py-2 border-gray-800'/> 
					<NavLinks path={'/#contacts'} title={'Contacts'} className = 'pt-2' />
				</div>
			): <></>}
		</nav>
	)
}

export default Navbar
