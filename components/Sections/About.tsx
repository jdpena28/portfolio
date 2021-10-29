/** @format */

import React from 'react'
import { techStacks } from '../data'
import Stacks from '../Stacks'

const About = () => {
	return (
		<section className='w-full min-h-screen relative' id='about'>
			<h3 className='font-secondary opacity-[3%] text-9xl font-bold tracking-widest absolute -top-5 left-1 z-[1] cursor-default'>
				about
			</h3>
			<div className='container h-full flex flex-col space-y-12'>
				<p className='w-[75%] ml-11 text-justify text-xl mt-14'>
					I am John Henrich Dela Peña currently studying at Bataan Peninsula
					State University taking course of Computer Science major in Network
					and Data Communication. Im also into Music 🎶 as Bassist and Rythm
					Guitarist 🎸. Expertise at .NET framework integrated with MSAccess and
					Oracle Database. Currently, I am learning Front-End Development.
					Aspiring to be one of the Developers soon... Such as thus Programming
					isn't about what you know; it's about what you can figure out.
				</p>
				<h2 className='font-secondary text-4xl font-medium'>
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
						return <Stacks stacksTitle={e.techDesc} stacksUrl={e.techImg} flex={e.flex} />
					})}
				</div>
			</div>
		</section>
	)
}

export default About
