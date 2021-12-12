import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import {db} from '../firebase-config'

interface toggleProps{
  id: string,
  mark_as_read: boolean|undefined
}

const ToggleSwitch:React.FC<toggleProps> = ({id,mark_as_read}) => {
  const [read,setRead] = useState(mark_as_read)
  const ref = doc(db,'Client_Messages',id)
  return (
    <div
      className={`w-12 h-6 flex ${
        !read ? "bg-blue-700" : "bg-green-500"
      } items-center rounded-full p-1 cursor-pointer`}
      onClick={() => {
        setRead(!read)
        updateDoc(ref, {mark_as_read: !read})
        .then(() => console.log(id))
      }}
    >
      {/* Switch */}
      <div
        className={
          "bg-white h-4 w-4 rounded-full shadow-md transform" +
          (!read? null : "transform translate-x-6")
        }
      ></div>
    </div>
  );
};

const MessageCard:React.FC<ClientMessages> = ({client_message,client_name,time, id,mark_as_read}) => {
  const deleteMessage = (id:string) => {
    const ref = doc(db,'Client_Messages',id)
    deleteDoc(ref)
  }
  return (
    <div className="relative h-56 max-h-56 w-full bg-[#E5E7EB] rounded-md text-black text-lg font-secondary p-2 overflow-auto">
      <div className="absolute top-1 right-2 flex items-center">
        <ToggleSwitch id = {id} mark_as_read = {mark_as_read} />
        <MdDelete
          className="fill-current text-blue-700 cursor-pointer"
          size={25}
          onClick={() => {deleteMessage(id)}}
        />
      </div>
      <div className="flex items-center gap-x-3">
        <p className="font-semibold">{client_name}</p>
        <div className="bg-gray-400 w-3 h-3 rounded-[50%]"></div>
        <p>{time}</p>
      </div>
      <p className="whitespace-pre-line">
        {client_message}
      </p>
    </div>
  );
};

export default MessageCard;
