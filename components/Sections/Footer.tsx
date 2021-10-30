import React from 'react'
import {FaFacebookF,FaLinkedinIn,FaInstagram,FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className = 'flex justify-between items-center p-4 border-t-2 border-white'>
            <div>
                <p className='text-base'>&#9400; John Henrich Dela Peña</p>
                <p>All Rights Reserved.</p>
            </div>
            <div className="flex gap-x-2">
                <a href="#" target = '_blank'><FaFacebookF size ={22}/></a>
                <a href="#" target = '_blank'><FaLinkedinIn size ={22}/></a>
                <a href="#" target = '_blank'><FaInstagram size ={22}/></a>
                <a href="#" target = '_blank'><FaGithub size ={22}/></a>
            </div>
        </footer>
    )
}

export default Footer