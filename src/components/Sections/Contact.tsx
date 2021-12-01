/** @format */
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import {Parallax} from 'react-scroll-parallax'

// React-Icons
import {GrMail} from 'react-icons/gr'
import {RiContactsBookFill} from 'react-icons/ri'
import {IoLocationSharp} from 'react-icons/io5'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import {db} from '../../firebase-config'
import { addDoc, collection,Timestamp } from 'firebase/firestore'



const Contact = () => {
	const [clientMessage, setClientMessage] = useState<clientMessage|null>(null);
	const birthdayCollection = collection(db,"Client_Messages")
	
	const sucessToast = () => toast.success("Message Sent");
  	const errorToast = () => toast.error("Error, Message not sent (Database Error)");
	const addClientMessage = async (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await addDoc(birthdayCollection,{
			client_message: clientMessage?.clientMessage,
			client_name: clientMessage?.clientName,
			email: clientMessage?.clientEmail,
			time: Timestamp.now(),
			mark_as_read: false
		})
		.then(()=>{
		  sucessToast()
		  setClientMessage(null);
		  /*Shortcut to reset all input element in form and use the target
		  as htmlformelement since we declare it as formevent*/
		  (e.target as HTMLFormElement).reset()
		})
		.catch(err=>{
			console.log(err.message)
			errorToast()
		})
	}

	const isEmpty = () => {
		if(!!clientMessage?.clientMessage?.trim() && !!clientMessage?.clientEmail?.trim()) {
			return false
		}
		return true
	}
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
				<div className='bg-gray-500 opacity-90 w-[75%] sm:w-full h-[71%] sm:h-auto sm:py-10 z-30 rounded-3xl relative flex sm:flex-col sm:items-center sm:gap-y-4 justify-around'>
					<div className='sm:hidden font-light absolute -bottom-3 right-0 w-80 h-80 flipImg'>
						<Image src={'/contact-us.svg'} layout='fill' />
					</div>
					<form 
					onSubmit={(e)=>addClientMessage(e)}
					className='flex flex-col gap-y-1 my-auto sm:my-0 font-primary'>
						<div className='flex flex-col gap-y-1'>
							<label htmlFor="email" className='font-medium ml-1'>Email*</label>
							<input 
							className='w-72 sm:w-80 h-12 pl-2 font-light text-sm outline-none text-white placeholder-gray-300 rounded-md bg-transparent border-[1px] border-white'
							type="email" id='email' required placeholder='johndoe@email.com' 
							onChange={(e)=>{setClientMessage({...clientMessage,clientEmail:e.target.value})}}/>
						</div>
						<div className='flex flex-col gap-y-1'>
							<label htmlFor="name" className='font-medium ml-1'>Name</label>
							<input 
							className='w-72 sm:w-80  h-12 pl-2 font-light text-sm outline-none text-white placeholder-gray-300 rounded-md bg-transparent border-[1px] border-white '
							type="text" id='name' placeholder='John Doe ' 
							onChange={(e)=>{setClientMessage({...clientMessage,clientName:e.target.value})}}/>
						</div>
						<div className='flex flex-col gap-y-1'>
							<label htmlFor="message" className='font-medium  ml-1'>Message*</label>
							<textarea className='text-black placeholder-gray-600 outline-none rounded-md p-1 text-size' placeholder='Your Message' name="message" id="message" required cols={25} rows={8}
							onChange={(e)=>{setClientMessage({...clientMessage,clientMessage:e.target.value})}}/>
						</div>
						<button type="submit" 
						disabled={isEmpty()}
						className={`w-72 sm:w-80  bg-blue-500 text-white h-9 font-medium rounded-sm mt-3 transition-colors active:bg-blue-600 
						${isEmpty()?'cursor-not-allowed opacity-70': 'opacity-100'}`}>Submit</button>
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
