/** @format */

import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/Sections/About'
import Contact from '../components/Sections/Contact'
import Footer from '../components/Sections/Footer'
import Home from '../components/Sections/Home'
import Project from '../components/Sections/Project'

const App: React.FC = () => {
	return (
		<div className='font-primary text-gray-200 bg-gray-900 mx-12 sm:mx-1 space-y-11'>
			<Navbar />
			<Home />
			<About />
			<Project />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
