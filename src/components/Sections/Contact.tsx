/** @format */
import Image from 'next/image'
import React, {useRef,useState} from 'react'
import {Parallax} from 'react-scroll-parallax'

// React-Icons
import {GrMail} from 'react-icons/gr'
import {RiContactsBookFill} from 'react-icons/ri'
import {IoLocationSharp} from 'react-icons/io5'





const Contact = () => {
  //#region alert at snackbar
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  //#endregion




	return (
		<section className='w-full h-screen relative' id='contacts'>
			<Parallax x={[-10, 3]}>
			<h3 className='font-secondary opacity-[3%] text-9xl sm:text-7xl font-bold tracking-widest absolute top-0 sm:left-3 z-[1] cursor-default'>
				contact
			</h3>
			</Parallax>
			<div 
			data-aos='fade-up'
			className='container mt-14 h-[90%] mx-auto flex items-center justify-center'>
				<div className='bg-gray-500 opacity-90 w-[75%] sm:w-full h-[69%] sm:h-full z-30 rounded-3xl relative flex sm:flex-col sm:justify-evenly sm:items-center justify-around'>
					<div className='sm:hidden font-light absolute -bottom-3 right-0 w-80 h-80 flipImg'>
						<Image src={'/contact-us.svg'} layout='fill' />
					</div>
					<form className='flex flex-col gap-y-7 my-auto sm:my-0'>
						<div className="w-72 relative group">
							<input type="text" id="email" required className="w-full h-14 px-4 outline-none peer bg-transparent border-2 rounded-lg"/>
							<label htmlFor="email" className="transform transition-all absolute top-0 left-0 font-secondary h-full flex items-center pl-2 text-base group-focus-within:-top-1 group-focus-within:left-3 group-focus-within:text-base peer-valid:text-base group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Email*</label>
						</div>
						<div className="w-72 relative group">
							<input type="text" id="name"  className="w-full h-14 px-4 outline-none peer bg-transparent border-2 rounded-lg"/>
							<label htmlFor="name" className="transform transition-all absolute top-0 bottom-0 my-auto left-0 font-secondary h-full flex  pl-2 text-base group-focus-within:-top-6 group-focus-within:left-3 group-focus-within:text-base peer-valid:text-base group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full  group-focus-within:pl-0 ">Name</label>
						</div>
					</form>
					<div className='mt-5 font-normal'>
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
