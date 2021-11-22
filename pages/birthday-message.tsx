import Navbar from '../src/components/Navbar'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ConfettiEffect from '../src/components/ConfettiEffect';


const birthdayMessage = () => {
    const notify = () => toast.error("Sorry this Function is not Working :<");
    return (
        <>
           <ConfettiEffect/>
            <section id='wishlist' className='h-screen mx-12 text-white font-secondary'>
                <Navbar/>
                <div className='container mx-auto flex sm:flex-col  items-center'>
                    <div className='sm:flex '>
                        <div>
                            <h5 className='text-3xl sm:text-lg font-bold'>Hi👋, Thank you for the Greetings</h5>
                            <p className='text-xl sm:text-base font-light w-[88%] mb-8'>I have some extra wishes for my <b>Birthday</b>. This will help me to attain my dream <u>Career</u></p>
                        </div>
                        <Image src='/Birthday/Gcash.png' width={260} height={329}/>
                    </div>
                    <div className='grid grid-cols-4 grid-rows-4 gap-3 w-full h-[87vh] text-black font-medium'>
                        {/* gift-box */}
                        <div className='bg-[#36F88A] w-full h-full col-span-2 row-span-2 rounded-3xl flex justify-center items-center'>
                            <Image src="/Birthday/gift-box.png" width={165} height={181}/>
                        </div>
                        {/* Keyboard */}
                        <div className='bg-[#543BFE] w-full h-full row-start-1 col-start-3 col-span-3 rows-span-1 rounded-3xl flex flex-col justify-around'>
                            <Image className='object-contain' src="/Birthday/keyboard.png" width={214} height={70}/>
                            <div className='flex justify-around'>
                                <p>Ajazz KB</p>
                                <p>₱1079.00</p>
                            </div>
                        </div>
                        {/* Webcam */}
                        <div className='bg-[#F7AFE7] w-full h-full col-start-3 row-start-2 col-span-1 rows-span-1 rounded-3xl flex justify-center items-center'>
                            <Image src="/Birthday/Webcam.png" width={84} height={73}/>
                        </div>
                        <div className='bg-[#F7AFE7] w-full h-full col-start-4 row-start-2 col-span-1 rows-span-1 rounded-3xl space-y-1'>
                            <p className='text-lg pl-5 pt-4'>Xiaovv <br /> Webcam</p>
                            <p className='text-lg pl-5'>₱749.00</p>
                        </div>
                        {/* Message */}
                        <div className='bg-[#682AE9] w-full h-full row-start-3 col-span-1 row-span-2 rounded-3xl flex justify-center items-center'>
                            <p className='text-gray-300 w-[80%] font-bold text-xl'>HAPPY TO HAVE ATLEAST ONE OF THESE</p>
                        </div>
                        {/* Monitor */}
                        <div className='bg-[#DF398D] w-full h-full row-start-3 col-span-4 row-span-2 rounded-3xl flex flex-col justify-around'>
                            <Image className='object-contain' src="/Birthday/Monitor.png" width={218} height={172}/>
                            <div className='flex justify-around text-lg'>
                                <p>Xiaomi 1C 23"</p>
                                <p>₱6999.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='message' className='h-screen mx-12 font-secondary text-white'>
                <div className='container mx-auto px-32'>
                        <p className='mt-40 mb-4 font-bold text-3xl'>Leave a message for me.</p>
                        <div className='bg-gray-300 h-full rounded-lg mx-auto py-5'>
                            <form className='flex flex-col items-center gap-y-1 sm:my-0'>
                                <div className='flex flex-col gap-y-1 w-full px-6'>
                                    <label htmlFor="name" className='font-medium  ml-1 text-black text-xl'>Name</label>
                                    <input 
                                    className='w-full h-12 pl-2 font-normal text-base outline-none text-black placeholder-gray-400 rounded-md bg-[#F6F8FC]'
                                    type="text" id='name' placeholder='(Optional)' />
                                </div>
                                <div className='flex flex-col gap-y-1 w-full px-6'>
                                    <label htmlFor="message" className='font-medium  ml-1 text-black text-xl'>Message*</label>
                                    <textarea className='text-black placeholder-gray-400 bg-[#F6F8FC] outline-none rounded-md p-1' placeholder='Birthday Message' name="message" id="message" required cols={25} rows={8}></textarea>
                                </div>
                                <div className='px-6 w-full mt-3'>
                                    <button type="button" onClick={notify} className='w-full  bg-blue-500 text-white h-9  rounded-sm transition-colors active:bg-blue-600 '>Submit</button>
                                </div>
                                <ToastContainer
                                position="bottom-center"
                                toastClassName={'sm:w-[90%] mx-auto'}
                                autoClose={2000}
                                closeOnClick
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                />
                            </form>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default birthdayMessage
