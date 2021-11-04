import React from 'react'
import {FaFacebookF,FaLinkedinIn,FaInstagram,FaGithub,FaRegCopyright} from 'react-icons/fa'
import {MdCopyright} from 'react-icons/md'
const Footer = () => {
    return (
        <footer className = 'flex sm:flex-col-reverse justify-between items-center p-4 border-t-2 border-white sm:text-center sm:gap-y-3 font-light'>
            <div>
                <p className='text-base inline'><span><FaRegCopyright size={17} className='inline -mt-1'/></span> 2021 John Henrich Dela Peña</p>
                <p>All Rights Reserved.</p>
            </div>
            <div className="flex gap-x-2 sm:gap-x-4">
                <a href="#" target = '_blank'><FaFacebookF size ={22}/></a>
                <a href="#" target = '_blank'><FaLinkedinIn size ={22}/></a>
                <a href="#" target = '_blank'><FaInstagram size ={22}/></a>
                <a href="#" target = '_blank'><FaGithub size ={22}/></a>
            </div>
        </footer>
    )
}

export default Footer
