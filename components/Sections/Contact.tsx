import React from 'react'
import Image from 'next/image'

const Contact = () => {
    return (
        <section className = 'w-full h-screen relative' id = 'contacts'>
            <h3 className='font-secondary opacity-[3%] text-9xl font-bold tracking-widest absolute top-[15%] left-11 z-[1] cursor-default'>contact</h3>
            <div className="container h-full mx-auto flex items-center justify-center">
                <div className="bg-gray-500 opacity-70 w-[75%] h-[69%] z-30 rounded-3xl relative">
                    <div className = 'absolute -bottom-3 right-0 w-80 h-80 flipImg'>
                        <Image src={'/contact-us.svg'} layout='fill'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
