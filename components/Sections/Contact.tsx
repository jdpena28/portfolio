/** @format */
import Image from 'next/image'
import { TextField, Button,styled } from '@mui/material'

const ValidationTextField = styled(TextField)({
	'& .MuiOutlinedInput-root': {
	  '& fieldset': {
		borderColor: 'white',
	  },
	  '&.Mui-focused fieldset': {
		borderColor: 'white',
	  },
	  '&:hover fieldset': {
		borderColor: 'white',
	  },
	},
	'& input:valid:focus + fieldset': {
	  borderLeftWidth: 4,
	  padding: '4px !important', // override inline-style
	},
	' & label.Mui-focused': { 
	  color: 'white'
	},
	' & label': {
	  color: 'white'
	},
  });

const Contact = () => {
	return (
		<section className='w-full h-screen relative' id='contacts'>
			<h3 className='font-secondary opacity-[3%] text-9xl font-bold tracking-widest absolute top-[15%] left-11 z-[1] cursor-default'>
				contact
			</h3>
			<div className='container h-full mx-auto flex items-center justify-center'>
				<div className='bg-gray-500 opacity-80 w-[75%] h-[69%] z-30 rounded-3xl relative'>
					<div className='absolute -bottom-3 right-0 w-80 h-80 flipImg'>
						<Image src={'/contact-us.svg'} layout='fill' />
					</div>
					<form className='flex flex-col gap-y-3'>
						<ValidationTextField
							className='w-72'
							label='Email'
							variant='outlined'
							required
						/>
						<ValidationTextField className='w-72' label='Name' variant='outlined' />
						<TextField
							className='w-72'
							label='Message'
							multiline
							rows={6}
							variant='filled'
							required
						/>
						<Button className = 'w-72' variant='contained' size='medium'>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
