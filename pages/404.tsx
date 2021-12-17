import React from 'react'
import Image from 'next/image'

const error = () => {
    return (
        <section id='404' className='w-full h-screen bg-gradient-to-r from-gray-700 via-purple-700 to-indigo-700'>
            <div className='container h-full mx-auto text-white font-secondary'>
                <div className='w-full h-full px-16 flex justify-center items-center'>
                    <div className='ml-21'>
                        <h6 className='text-3xl font-semibold'>Somethings wrong here ...</h6>
                        <p className='text-lg font-light'>I think I did not create this link ?<br/> For betterment, please head back to home</p>
                        <button className='w-32 h-12 bg-indigo-400'>HOME</button>
                    </div>
                    <Image src={'/404_Character.png'} height={558} width={774}/>
                </div>
            </div>
        </section>
    )
}

export default error
