import React, { FormEvent, useState } from 'react'
import {signInWithEmailAndPassword,signOut} from 'firebase/auth'
import Layout from '../src/components/Layout'
import { auth } from '../src/firebase-config'

const Message = () => {
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [openMessages,setOpenMessages] = useState<boolean>(false)

    const login = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth,email, password)
        .then(() => {
            (e.target as HTMLFormElement).reset()
            setOpenMessages(true)
        })
        .catch((error) => {
            
        })
    }

    const logout = async () => {
        await signOut(auth)
        .then(() => {
            setOpenMessages(false)
        })
    }

    return (
        <Layout>
           <section className='w-full h-screen container mx-auto text-gray-100'>
               {!openMessages&&<form 
               onSubmit={(e) => {login(e)}}
               className='flex flex-col gap-y-3 max-w-md  p-5 rounded-xl mx-auto mt-28 bg-gray-400'>
                   <label htmlFor="email">Email<br />
                       <input className='text-black placeholder-gray-400 pl-1 w-full' 
                       onChange={(e)=>setEmail(e.target.value)}
                       type="email" id='email' required placeholder='johndoe@gmail.com' />
                   </label>
                   <label htmlFor="password">Password<br />
                       <input className='text-black pl-1 w-full' 
                       onChange={(e)=>setPassword(e.target.value)}
                       type='password' id='password' required />
                   </label>
                   <button type='submit' className='bg-blue-500'>Login</button>
               </form>}
               {openMessages && <>
               <button className='w-36 h-12 my-auto bg-purple-500 rounded-xl'
               onClick={logout}
               >Log Out</button>
               <div className='mx-auto h-full max-w-md flex justify-around'>
                    <button className='h-12 w-36 my-auto bg-blue-500 rounded-xl'>Client Message</button>
                    <button className='w-36 h-12 my-auto bg-pink-500 rounded-xl'>Birthday Message</button>
               </div>
               </>
               }
           </section>
        </Layout>
    )
}

export default Message
