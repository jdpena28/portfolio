/** @format */

import React from 'react'
import { project } from '../data'
import EachProject from '../EachProject'

const Project = () => {
	let num = 11
	return (
		<section className='w-full min-h-screen pb-6 relative' id='project'>
			<h3 className='font-secondary opacity-[3%] text-9xl sm:text-7xl font-bold tracking-widest absolute top-2 left-1 z-[1] cursor-default'>
				projects
			</h3>
			<div className='container h-full flex flex-col gap-y-32 pt-28'>
				{project.map(e => {
					return (
						<EachProject
							flex = {e.flex}
							src={e.src}
							title={e.title}
							desc={e.desc}
                            color={e.color}
                            num={e.num}
							titleClass={e.titleClass}
							descClass={e.descClass}
							key = {num+=1}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Project