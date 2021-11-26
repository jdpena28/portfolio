/** @format */

import React,{useEffect} from 'react'
import Navbar from '../src/components/Navbar'
import About from '../src/components/Sections/About'
import Contact from '../src/components/Sections/Contact'
import Footer from '../src/components/Sections/Footer'
import Home from '../src/components/Sections/Home'
import Project from '../src/components/Sections/Project'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from '../src/components/Layout'

const App: React.FC = () => {
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 800,
		})
	},[])

	 return (
	 <Layout>
		<Navbar />
		<div className='overflow-x-hidden font-primary text-gray-200 mx-12 sm:mx-3 space-y-11'>
			<Home />
			<About />
			<Project />
			<Contact />
			<Footer />
		</div>
	</Layout>
	)
}

export default App
