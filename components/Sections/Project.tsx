/** @format */

import React from 'react'
import { project } from '../data'
import EachProject from '../EachProject'

const Project = () => {
	return (
		<section className='w-full min-h-screen pb-6 relative' id='project'>
			<h3 className='font-secondary opacity-[3%] text-9xl font-bold tracking-widest absolute top-[20%] left-1 z-[1] cursor-default'>
				projects
			</h3>
			<div className='container h-full flex flex-col space-y-12'>
				{project.map(e => {
					return (
						<EachProject
							src={e.src}
							flex={e.flex}
							title={e.title}
							desc={e.desc}
                            color={e.color}
                            num={e.num}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Project
