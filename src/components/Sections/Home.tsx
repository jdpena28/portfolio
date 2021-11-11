import React from 'react'
import Image from 'next/image'
import Button from '../Button'


const Home = () => {
    return (
        <section className = 'w-full h-screen relative' id = 'home'>
            <h3 className='font-secondary opacity-[3%] text-9xl sm:text-7xl font-bold tracking-widest absolute top-[15%]  sm:-top-7 sm:left-3 z-[1] cursor-default'>home</h3>
            <div className="container h-full mx-auto flex justify-around items-center font-secondary sm:flex-col-reverse"> 
                <div className='text-right sm:text-center space-y-3'>
                    <h1 className = 'text-6xl sm:text-4xl font-semibold'>John Henrich Dela Peña</h1>
                    <h2 className='font-primary text-2xl sm:text-xl text-gray-400'>//Aspiring .NET / Front-End Developer</h2>
                    <p className='text-xl sm:text-lg'>I build Windows Applications <br  className='sm:hidden' /> and Serverless Websites</p>
                    <div className = 'flex justify-end sm:justify-evenly gap-x-5 sm:gap-x-0'>
                        <Button btnPath='#project' btnClass = 'bg-pink-500 ring-pink-300' text = "Projects"/>
                        <Button btnPath='#contacts' btnClass = 'bg-blue-600 rink-blue-400' text = "Contacts"/>
                    </div>
                </div>
                <div>
                    <div className = 'relative'>
                        <Image 
                        className = 'rounded-2xl z-30'
                        src = '/portrait.webp'
                        alt = 'Portrait Photo of the Author'
                        width = {300}
                        height = {300}/>
                        <div className = 'w-[300px] h-[300px]  absolute top-2 left-2 bg-gray-300 filter blur-md opacity-70'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
