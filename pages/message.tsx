import React, { FormEvent, useState } from "react";
import MessageCard from "../src/components/MessageCard";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import Layout from "../src/components/Layout";
import { auth } from "../src/firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Message = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openMessages, setOpenMessages] = useState<boolean>(false);

  const [messages, setMessages] = useState<message>('client_message');

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
                <button className={`h-10 w-24 rounded-lg font-semibold ${messages === 'client_message' ? 'bg-green-600' : 'bg-blue-600'}`} 
                onClick={()=>setMessages("client_message")}>
                  Client
                </button>
                <button className={`w-24 h-10 rounded-lg font-semibold ${messages === 'birthday_message'? 'bg-green-600' : 'bg-blue-600'}`}
                onClick={()=>setMessages('birthday_message')}>
                  Birthday
                </button>
              </div>
            </div>
          )}
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
