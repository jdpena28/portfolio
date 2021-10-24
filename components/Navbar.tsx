/** @format */

import React from 'react'

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50">
			<div className='flex justify-between mx-12 text-lg p-5'>
				<p>jdpena</p>
                <div className='flex gap-x-3 font-normal'>
                    <a href="#">Home</a> /
                    <a href="#">About</a> /
                    <a href="#">Projects</a> /
                    <a href="#">Contacts</a> 
                </div>
			</div>
		</nav>
	)
}

export default Navbar
