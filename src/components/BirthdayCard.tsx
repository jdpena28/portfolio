import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { MdDelete } from "react-icons/md";

import {db} from '../firebase-config'


const ClientCard:React.FC<BirthdayMessages> = ({id,birthday_message, birthday_name}) => {
  const deleteMessage = (id:string) => {
    const ref = doc(db,'Client_Messages',id)
    deleteDoc(ref)
  }
  return (
    <div className="relative h-56 max-h-56 w-full bg-[#E5E7EB] rounded-md text-black text-lg font-secondary p-2 overflow-auto">
      <div className="absolute top-1 right-2">
        <MdDelete
          className="fill-current text-blue-700 cursor-pointer"
          size={25}
          onClick={() => {deleteMessage(id)}}
        />
      </div>
      <div className="flex items-center gap-x-3">
        <p className="font-semibold">{birthday_name}</p>
      </div>
      <p className="whitespace-pre-line">
        {birthday_message}
      </p>
    </div>
  );
};

export default ClientCard;
