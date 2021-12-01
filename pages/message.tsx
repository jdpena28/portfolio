import React, { FormEvent, useState } from 'react'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import Layout from '../src/components/Layout'

const Message = () => {
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const signIn = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const auth = getAuth()
        await signInWithEmailAndPassword(auth,email, password)
        .then((user) => {
            console.log(user)
            console.log('sign in success')
        })
        .catch((error) => {
            console.log(error)
            console.log('sign in failed')
        })
    }

    return (
        <Layout>
           <section className='w-full h-screen container mx-auto text-gray-200'>
               <form 
               onSubmit={(e) => {signIn(e)}}
               className='flex flex-col gap-y-3 max-w-md  p-5 rounded-xl mx-auto mt-28 bg-gray-400'>
                   <label htmlFor="email">Email<br />
                       <input className='text-black placeholder-gray-600 pl-1 w-full' 
                       onChange={(e)=>setEmail(e.target.value)}
                       type="email" id='email' required placeholder='johndoe@gmail.com' />
                   </label>
                   <label htmlFor="password">Password<br />
                       <input className='text-black pl-1 w-full' 
                       onChange={(e)=>setPassword(e.target.value)}
                       type='password' id='password' required />
                   </label>
                   <button type='submit' className='bg-blue-500'>Login</button>
               </form>
           </section>
        </Layout>
    )
}

export default Message
