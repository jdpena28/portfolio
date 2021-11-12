/** @format */
import React from 'react'
import { techStacks } from '../data'
import Stacks from '../Stacks'
import { Parallax } from 'react-scroll-parallax'



const About = () => {
	let id = 20
	return (
		<section className='w-full min-h-screen relative' id='about'>
			<Parallax
			x={[-10, 3]}
            >
			<h3 className='font-secondary opacity-[3%] text-9xl sm:text-7xl  font-bold tracking-widest absolute -top-5  z-[1] cursor-default'>
				about
			</h3>
			</Parallax>
			
			<div className='container h-full flex flex-col  space-y-12'>
				<p 
				data-aos='slide-right'
				className='w-[75%] ml-11 sm:mx-auto text-justify sm:text-left text-xl sm:text-base mt-14'>
					I am John Henrich Dela Peña currently studying at Bataan Peninsula
					State University taking course of Computer Science major in Network
					and Data Communication. Im also into Music 🎶 as Bassist and Rythm
					Guitarist 🎸. Expertise at .NET framework integrated with MSAccess and
					Oracle Database. Currently, I am learning Front-End Development.
					Aspiring to be one of the Developers soon... Such as thus Programming
					isn't about what you know; it's about what you can figure out.
				</p>
				<h2 
				data-aos='slide-right'
				className='font-secondary text-4xl sm:text-3xl font-medium'>
					<span className='font-primary font-normal text-purple-600'>
						`&#123;&#36;
					</span>
					Tech Stacks
					<span className='font-primary font-normal text-purple-600'>
						&#125;`
					</span>
				</h2>
				<div className= 'space-y-16'>
					{techStacks.map(e => {
						return <Stacks key={id++} stacksTitle={e.techDesc} stacksUrl={e.stacksURL} flex={e.flex}
								aos={e.aos}/>
					})}
				</div>
			</div>
		</section>
	)
}

export default About
