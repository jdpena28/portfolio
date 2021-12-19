import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const error = () => {
    return (
        <section id='404' className='w-full h-screen bg-gradient-to-r from-gray-700 via-purple-700 to-indigo-700'>
            <div className='container h-full mx-auto text-white font-secondary'>
                <div className='w-full h-full px-16 sm:px-1 flex justify-center sm:justify-between items-center'>
                    <div className='ml-21 sm:ml-0 space-y-3'>
                        <h6 className='text-3xl sm:text-lg font-semibold'>Somethings wrong here ...</h6>
                        <p className='text-lg sm:text-sm font-light'>I think I did not create this link ?<br/> For betterment, please head back to home</p>
                        <div className ="w-max h-max p-1 bg-gradient-to-r from-[#ACACAC] to-[#7B3DFD]">
                        <Link href={'/'} >
                            <button className='w-32 sm:w-24 h-12 sm:h-8 bg-indigo-900 font-bold'>HOME</button>
                        </Link>
                        </div>
                    </div>
                    <Image src={'/404_Character.png'} height={401.8} width={557.28}/>
                </div>
            </div>
        </section>
    )
}

export default error
