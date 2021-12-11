import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={`w-12 h-6 flex ${
        toggle ? "bg-blue-700" : "bg-green-500"
      } items-center rounded-full p-1 cursor-pointer`}
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      {/* Switch */}
      <div
        className={
          "bg-white h-4 w-4 rounded-full shadow-md transform" +
          (toggle ? null : "transform translate-x-6")
        }
      ></div>
    </div>
  );
};

const MessageCard:React.FC<ClientMessages> = ({client_message,client_name,time,mark_as_read}) => {
  return (
    <div className="relative h-56 max-h-56 w-full bg-[#E5E7EB] rounded-md text-black text-lg font-secondary p-2">
      <div className="absolute top-1 right-2 flex items-center">
        <ToggleSwitch />
        <MdDelete
          className="fill-current text-blue-700 cursor-pointer"
          size={25}
        />
      </div>
      <div className="flex items-center gap-x-3">
        <p className="font-semibold">{client_name}</p>
        <div className="bg-gray-400 w-3 h-3 rounded-[50%]"></div>
        <p>{time}</p>
      </div>
      <p className="break-all overflow-ellipsis overflow-hidden">
        {client_message}
      </p>
    </div>
  );
};

export default MessageCard;
