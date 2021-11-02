/** @format */
import React, { useState } from 'react'
import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi'

const NavLinks: React.FC<NavLinks> = ({ path, title,className, onClick }) => {
	return (
		<Link href={path}>
			<a className = {className} onClick = {onClick}>{title}</a>
		</Link>
	)
}

const Navbar: React.FC = () => {
	const [menu, setMenu] = useState<boolean>(false)
	const onClick = () => {
		setMenu(false)
	}
	return (
		<nav className='sm:sticky top-0 z-50 bg-gray-900'>
			<div className='flex justify-between text-lg pt-3'>
				<p>jdpena</p>
				<div className='flex gap-x-3 font-normal sm:hidden'>
					<NavLinks path={'/#home'} title={'Home'} className = 'hover:bg-gray-600 bg-opacity-10 rounded-lg p-1' /> /
					<NavLinks path={'/#about'} title={'About'} className = 'hover:bg-gray-600 bg-opacity-10 rounded-lg p-1' /> /
					<NavLinks path={'/#project'} title={'Projects'} className = 'hover:bg-gray-600 bg-opacity-10 rounded-lg p-1'  /> /
					<NavLinks path={'/#contacts'} title={'Contacts'} className = 'hover:bg-gray-600 bg-opacity-10 rounded-lg p-1'/>
				</div>
				<BiMenuAltRight
					className='cursor-pointer hidden sm:block'
					onClick={() => (menu ? setMenu(false) : setMenu(true))}
					size={32}
				/>
			</div>
			{menu ? (
				<div className="hidden absolute sm:flex flex-col text-center w-[95%] h-screen mx-auto text-lg backdrop-filter backdrop-blur-md bg-gray-900 bg-opacity-30">
					<div className='w-full sm:flex flex-col mx-auto'>
					<NavLinks path={'/#home'} title={'Home'} className='py-2' onClick={onClick}/> 
					<NavLinks path={'/#about'} title={'About'} className='py-2' onClick={onClick}/> 
					<NavLinks path={'/#project'} title={'Projects'} className='py-2' onClick={onClick}/> 
					<NavLinks path={'/#contacts'} title={'Contacts'} className = 'pt-2' onClick={onClick} />
					</div>
				</div>
			): <></>}
		</nav>
	)
}

export default Navbar
