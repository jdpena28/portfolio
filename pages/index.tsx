/** @format */

import React from 'react'
import Navbar from '../src/components/Navbar'
import About from '../src/components/Sections/About'
import Contact from '../src/components/Sections/Contact'
import Footer from '../src/components/Sections/Footer'
import Home from '../src/components/Sections/Home'
import Project from '../src/components/Sections/Project'

const App: React.FC = () => {
	return (
		<div className='font-primary text-gray-200 bg-gray-900 mx-12 sm:mx-3 space-y-11'>
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
