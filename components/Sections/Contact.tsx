/** @format */
import Image from 'next/image'
import { TextField, Button,styled, OutlinedInputProps, TextFieldProps } from '@mui/material'
import {GrMail} from 'react-icons/gr'
import {RiContactsBookFill} from 'react-icons/ri'
import {IoLocationSharp} from 'react-icons/io5'

const Multilines = styled(TextField)({
	'& .MuiFilledInput-root': {
		border: '1px solid white',
		overflow: 'hidden',
		borderRadius: 4,
		backgroundColor: '#f8f8ff',
	  },
	  '& .MuiFilledInput': {
		borderColor: '#f8f8ff',
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

const Contact = () => {
	return (
		<section className='w-full h-screen relative' id='contacts'>
			<h3 className='font-secondary opacity-[3%] text-9xl font-bold tracking-widest absolute top-0 left-11 z-[1] cursor-default'>
				contact
			</h3>
			<div className='container mt-14 h-full mx-auto flex items-center justify-center'>
				<div className='bg-gray-500 opacity-90 w-[75%] h-[69%] z-30 rounded-3xl relative flex justify-around'>
					<div className='absolute -bottom-3 right-0 w-80 h-80 flipImg'>
						<Image src={'/contact-us.svg'} layout='fill' />
					</div>
					<form className='flex flex-col gap-y-3 my-auto'>
						<ValidationTextField
							className='w-72'
							label='Email'
							variant='outlined'
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
						<Button className = 'w-72' variant='contained' size='medium'>
							Send
						</Button>
					</form>
					<div className='mt-[4.8%]'>
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
