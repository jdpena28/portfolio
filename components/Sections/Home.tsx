import React from 'react'
import Button from '../Button'

const Home = () => {
    return (
        <section className = 'w-full h-screen relative'>
            <h5 className='font-secondary opacity-10 text-9xl font-bold tracking-widest absolute top-11 left-11 z-[-1]'>home</h5>
            <div className="container h-full mx-auto flex items-center font-secondary">
                <div className='text-right space-y-3'>
                    <h1 className = 'text-6xl font-semibold'>John Henrich Dela Peña</h1>
                    <h3 className='font-primary text-2xl text-gray-400'>//Aspiring .NET / Front-End Developer</h3>
                    <p className='text-xl'>I build Windows Applications <br /> and Serverless Websites</p>
                    <div className = 'flex justify-end gap-x-5'>
                        <Button btnClass = 'bg-pink-500' text = "Projects"/>
                        <Button btnClass = 'bg-blue-600' text = "Contacts"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
