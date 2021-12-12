import React, { FormEvent, useState, useEffect } from "react";
import { useUpdateEffect } from "usehooks-ts";
import MessageCard from "../src/components/MessageCard";
import Layout from "../src/components/Layout";

import {db} from "../src/firebase-config";
import { auth } from "../src/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";


const Message = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openMessages, setOpenMessages] = useState<boolean>(false);

  const [messagesType, setMessagesType] = useState<messagesType>('Client_Messages');
  const [messages, setMessages] = useState<ClientMessages[]>([]);

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        (e.target as HTMLFormElement).reset();
        setOpenMessages(true);
      })
      .catch(() => {
        toast.error("Invalid credentials");
      });
  };

  const logout = async () => {
    await signOut(auth).then(() => {
      setOpenMessages(false);
    });
  };


 

  const getMessage = async () => {
    let message:any[] = []
    const messageRef = collection(db, messagesType)
    await getDocs(messageRef)
    .then(data => {
        data.docs.map(doc => {
          message.push({...doc.data(), id: doc.id} as ClientMessages)
        }
    )
    setMessages(message)
  })}

  useUpdateEffect(() => {
    getMessage()
  }, [messagesType,openMessages])
  
 

  return (
    <Layout>
      <section className="w-full h-screen container mx-auto text-gray-100">
        <div className="container w-full h-full">
          {!openMessages && (
            <form
              onSubmit={(e) => {
                login(e);
              }}
              className="flex flex-col gap-y-3 max-w-md  p-5 rounded-xl mx-auto mt-28 bg-gray-400"
            >
              <label htmlFor="email">
                Email
                <br />
                <input
                  className="text-black placeholder-gray-400 pl-1 w-full"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  required
                  placeholder="johndoe@gmail.com"
                />
              </label>
              <label htmlFor="password">
                Password
                <br />
                <input
                  className="text-black pl-1 w-full"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  required
                />
              </label>
              <button type="submit" className="bg-blue-500">
                Login
              </button>
            </form>
          )}
          {openMessages && (
            <div className="mt-3 space-y-4">
              <button
                className="h-12 w-52 text-black font-bold bg-gray-100 rounded-xl"
                onClick={logout}
              >
                Log Out
              </button>
              <div className="flex gap-x-3">
                <button className={`h-10 w-24 rounded-lg font-semibold ${messagesType === 'Client_Messages' ? 'bg-green-600' : 'bg-blue-600'}`} 
                onClick={()=>setMessagesType("Client_Messages")}>
                  Client
                </button>
                <button className={`w-24 h-10 rounded-lg font-semibold ${messagesType === 'Birthday_Messages'? 'bg-green-600' : 'bg-blue-600'}`}
                onClick={()=>setMessagesType('Birthday_Messages')}>
                  Birthday
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3 mx-5">
                {messages.map(m => {
                  return (
                  <MessageCard key={m.id} id = {m.id} client_name={m.client_name} 
                  client_message={m.client_message} email={m.email} 
                  time={m.time.toDate().toDateString()} mark_as_read={m.mark_as_read} />)
                })}
              </div>
            </div>
          )
          
          }
          <ToastContainer
            position="bottom-center"
            toastClassName={"sm:w-[90%] mx-auto"}
            autoClose={2000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>     
      </section>
    </Layout>
  );
};

export default Message;
