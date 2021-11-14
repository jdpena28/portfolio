/** @format */
import Image from 'next/image'
import React, {useRef,useState} from 'react'
import {Parallax} from 'react-scroll-parallax'

import { TextField, Button,styled} from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

// React-Icons
import {GrMail} from 'react-icons/gr'
import {RiContactsBookFill} from 'react-icons/ri'
import {IoLocationSharp} from 'react-icons/io5'

//#region textfilled styles
const Multilines = styled(TextField)({
	'& .MuiFilledInput-root': {
		border: '1px solid white',
		overflow: 'hidden',
		borderRadius: 4,
		backgroundColor: '#f8f8ff',
	  },
})


const ValidationTextField = styled(TextField)({
	'& .MuiOutlinedInput-root': {
	  '& fieldset': {
		borderColor: '#f5f5f5',
	  },
	  '&.Mui-focused fieldset': {
		borderColor: '#f8f8ff',
	  },
	  '&:hover fieldset': {
		borderColor: '#f8f8ff',
	  },
	  '& input': {
		  color: '#f8f8ff'
	  },
	},
	'& input:valid:focus + fieldset': {
	  borderLeftWidth: 4,
	  padding: '4px !important', // override inline-style
	},
	' & label.Mui-focused': { 
	  color: '#f8f8ff'
	},
	' & label': {
	  color: '#f8f8ff'
	},
  });
//#endregion

//#region Alert & Snackbar Props
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
  ) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
//#endregion



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
					<form className='flex flex-col gap-y-3 my-auto sm:my-0'>
						<ValidationTextField
							className='w-72'
							label='Email'
							variant='outlined'
							type = 'email'
							required
						/>
						<ValidationTextField className='w-72' label='Name' variant='outlined' />
						<Multilines
							className='w-72'
							label='Message'
							multiline
							rows={6}
							variant='filled'
							required
						/>
						<Button className = 'w-72' variant='contained' size='medium' onClick = {handleClick}>
							Send
						</Button>
						<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        					<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          						Sorry this Function is not working right now :&#40;
        					</Alert>
      					</Snackbar>
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
