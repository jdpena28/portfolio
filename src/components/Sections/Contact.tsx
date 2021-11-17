/** @format */
import Image from 'next/image'
import React from 'react'
import {Parallax} from 'react-scroll-parallax'

// React-Icons
import {GrMail} from 'react-icons/gr'
import {RiContactsBookFill} from 'react-icons/ri'
import {IoLocationSharp} from 'react-icons/io5'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



const Contact = () => {
	const notify = () => toast.error("Sorry this Function is not Working :<");
	return (
		<section className='w-full h-screen relative' id='contacts'>
			<Parallax x={[-10, 3]}>
			<h3 className='font-secondary opacity-[3%] text-9xl sm:text-7xl font-bold tracking-widest absolute top-0 sm:left-3 z-[1] cursor-default'>
				contact
			</h3>
			</Parallax>
			<div 
			data-aos='fade-up'
			className='container mt-14 h-full mx-auto flex items-center justify-center'>
				<div className='bg-gray-500 opacity-90 w-[75%] sm:w-full h-[69%] sm:h-[80%] z-30 rounded-3xl relative flex sm:flex-col sm:justify-evenly sm:items-center justify-around'>
					<div className='sm:hidden font-light absolute -bottom-3 right-0 w-80 h-80 flipImg'>
						<Image src={'/contact-us.svg'} layout='fill' />
					</div>
					<form className='flex flex-col gap-y-1 my-auto sm:my-0 font-primary'>
						<div className='flex flex-col gap-y-1'>
							<label htmlFor="email" className='font-medium  ml-1'>Email*</label>
							<input 
							className='w-72 h-10 pl-2 font-light text-sm outline-none text-white placeholder-gray-300 rounded-md bg-transparent border-[1px] border-white'
							type="text" id='email' required placeholder='johndoe@email.com' />
						</div>
						<div className='flex flex-col gap-y-1'>
							<label htmlFor="name" className='font-medium text-sm ml-1'>Name</label>
							<input 
							className='w-72  h-12 pl-2 font-light text-sm outline-none text-white placeholder-gray-300 rounded-md bg-transparent border-[1px] border-white '
							type="text" id='name' placeholder='John Doe ' />
						</div>
						<div className='flex flex-col gap-y-1'>
							<label htmlFor="message" className='font-medium  ml-1'>Message*</label>
							<textarea className='text-black placeholder-gray-600 outline-none rounded-md p-1 text-size' placeholder='Your Message' name="message" id="message" required cols={25} rows={8}></textarea>
						</div>
						<button type="button" onClick={notify} className='w-72  bg-blue-500 text-white h-9 font-medium rounded-sm mt-3 transition-colors active:bg-blue-600 '>Submit</button>
						<ToastContainer
						position="bottom-center"
						toastClassName={'sm:w-[90%] mx-auto'}
						autoClose={2000}
						closeOnClick
						pauseOnFocusLoss
						draggable
						pauseOnHover
						/>
					</form> 
					<div className='mt-8 sm:mt-0 font-normal'>
						<h4 className='text-2xl font-medium mb-2'>Interested in Working?</h4>
						<GrMail size={18} className = 'inline ml-3'/><p className='inline text-sm'>&emsp;johnhenrich1128@gmail.com</p><br/>
						<RiContactsBookFill size={18} className='inline ml-3'/><p className='inline text-sm'>&emsp;+639468083171</p><br/>
						<IoLocationSharp size={18}  className='inline ml-3'/><p  className='inline text-sm'>&emsp;Limay, Bataan &#40;2103&#41; PHL</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
