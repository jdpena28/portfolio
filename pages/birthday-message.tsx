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
                <div className='grid grid-cols-4 grid-rows-4 gap-3 w-full h-[87vh] text-center'>
                    {/* gift-box */}
                    <div className='bg-[#36F88A] w-full h-full col-span-2 row-span-2 rounded-3xl'>
                        <Image className='align-middle' src="/Birthday/gift-box.png" width={200} height={200}/>
                    </div>
                    {/* Keyboard */}
                    <div className='bg-[#543BFE] w-full h-full row-start-1 col-start-3 col-span-3 rows-span-1 rounded-3xl'>
                        <Image className='' src="/Birthday/keyboard.png" width={180} height={180}/>
                    </div>
                    {/* Webcam */}
                    <div className='bg-[#F7AFE7] w-full h-full col-start-3 row-start-2 col-span-1 rows-span-1 rounded-3xl'>
                        <Image src="/Birthday/Webcam.png" width={200} height={200}/>
                    </div>
                    <div className='bg-[#F7AFE7] w-full h-full col-start-4 row-start-2 col-span-1 rows-span-1 rounded-3xl'>
                        <Image src="/Birthday/Webcam.png" width={200} height={200}/>
                    </div>
                    {/* Message */}
                    <div className='bg-[#682AE9] w-full h-full row-start-3 col-span-1 row-span-2 rounded-3xl'>
                        <p className='text-gray-300 font-bold text-xl text-left  my-auto'>HAPPY TO HAVE ATLEAST ONE OF THESE</p>
                    </div>
                    {/* Monitor */}
                    <div className='bg-[#DF398D] w-full h-full row-start-3 col-span-4 row-span-2 rounded-3xl'>
                        <Image className='' src="/Birthday/Monitor.png" width={211.85} height={275.54}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default birthdayMessage
