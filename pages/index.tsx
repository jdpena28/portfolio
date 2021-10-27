/** @format */

import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/Sections/About'
import Home from '../components/Sections/Home'
import Project from '../components/Sections/Project'

const App: React.FC = () => {
	return (
		<div className='font-primary text-gray-200 bg-gray-900 mx-12 space-y-11'>
				<Navbar />
				<Home />
				<About />
				<Project/>
		</div>
	)
}

export default App
