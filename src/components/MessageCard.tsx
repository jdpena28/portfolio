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

const MessageCard = () => {
  return (
    <div className="relative h-max w-4/12 bg-[#E5E7EB] rounded-md text-black text-lg font-secondary p-2">
      <div className="absolute top-1 right-2 flex items-center">
        <ToggleSwitch />
        <MdDelete
          className="fill-current text-blue-700 cursor-pointer"
          size={25}
        />
      </div>
      <div className="flex items-center gap-x-3">
        <p className="font-semibold">John Does Legaspi</p>
        <div className="bg-gray-400 w-3 h-3 rounded-[50%]"></div>
        <p>09/28/2021</p>
      </div>
      <p className="break-all overflow-ellipsis">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        corporis veritatis nihil quam, unde soluta earum, non maiores ea fugiat
        accusantium porro? Recusandae nulla dolorum ullam quisquam quibusdam
        enim sapiente! Saepe fuga reiciendis dignissimos eius. Nesciunt
        cupiditate quia ipsum ut autem veritatis molestias.
      </p>
    </div>
  );
};

export default MessageCard;
