import Navbar from '../src/components/Navbar'
import Image from 'next/image'

const birthdayMessage = () => {
    return (
        <section className='h-screen mx-12 text-white font-secondary'>
            <Navbar/>
            <div className='container flex '>
                <div>
                    <h5 className='text-4xl font-bold'>Hi👋, Thank you for the Greetings</h5>
                    <p className='text-2xl font-light w-5/12'>I have some extra wishes for my <b>Birthday</b>. This will help me to attain my dream <u>Career</u></p>
                    <Image src='/Birthday/Gcash.png' width={240} height={302.4}/>
                </div>
                <div className='grid grid-cols-5 grid-rows-3'>
                    <div className='bg-[#36F88A] col-span-3 rows-span-3'>
                        <Image src="/Birthday/gift-box.png" width={200} height={200}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default birthdayMessage
