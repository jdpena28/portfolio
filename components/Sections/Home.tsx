import React from 'react'
import Image from 'next/image'
import Button from '../Button'

const Home = () => {
    return (
        <section className = 'w-full h-screen relative' id = 'home'>
            <h3 className='font-secondary opacity-[3%] text-9xl font-bold tracking-widest absolute top-[15%] left-11 z-[1] cursor-default'>home</h3>
            <div className="container h-full mx-auto flex justify-around items-center font-secondary">
                <div className='text-right space-y-3'>
                    <h1 className = 'text-6xl font-semibold'>John Henrich Dela Peña</h1>
                    <h2 className='font-primary text-2xl text-gray-400'>//Aspiring .NET / Front-End Developer</h2>
                    <p className='text-xl'>I build Windows Applications <br /> and Serverless Websites</p>
                    <div className = 'flex justify-end gap-x-5'>
                        <Button btnClass = 'bg-pink-500' text = "Projects"/>
                        <Button btnClass = 'bg-blue-600' text = "Contacts"/>
                    </div>
                </div>
                <div>
                    <div className = 'relative'>
                        <Image 
                        className = 'rounded-2xl z-30'
                        src = '/portrait.jpg'
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
