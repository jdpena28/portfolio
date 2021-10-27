/** @format */
import React from 'react'
import Link from 'next/link'

const NavLinks: React.FC<NavLinks> = ({ path, title }) => {
	return (
		<Link href = {path}>
			<a>{title}</a>
		</Link>
	)
}

const Navbar: React.FC = () => {
	return (
		<nav>
			<div className='flex justify-between mx-12 text-lg p-5'>
				<p>jdpena</p>
				<div className='flex gap-x-3 font-normal'>
					<NavLinks path={'/#home'} title={'Home'} /> /
					<NavLinks path={'/#about'} title={'About'} /> /
					<NavLinks path={'/#project'} title={'Projects'} /> /
					<NavLinks path={'/#contacts'} title={'Contacts'} />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
