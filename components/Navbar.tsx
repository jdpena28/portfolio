/** @format */
import React,{useState} from 'react'
import Link from 'next/link'
import {BiMenuAltRight} from 'react-icons/bi'


const NavLinks: React.FC<NavLinks> = ({ path, title }) => {
	return (
		<Link href = {path}>
			<a>{title}</a>
		</Link>
	)
}

const Navbar: React.FC = () => {
const [menu,setMenu] = useState<boolean>(false)
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
				<div className='hidden sm:block'>
					<BiMenuAltRight className='cursor-pointer' onClick={()=>menu?setMenu(true):setMenu(false)} size={32} />
					{menu?(
						<h3>Hello Woerld</h3>
					):<></>}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
