'use client';


import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import { FaAnglesDown, FaAnglesRight } from "react-icons/fa6";

interface RoomResultProps {
  id: string;
  user: SafeUser;
  description: string;
  title: string;
  currentUser: SafeUser;
  recipient:  SafeUser | undefined
}


const RoomResult: React.FC<RoomResultProps> = ({
  id,
  user,
  title,
  currentUser,
  recipient
}) => {
  return (
    <div
      className="
        flex 
        flex-col 
        gap-8 
        bg-white
        dark:bg-[#1E2746] 
        dark:text-white
        p-5 
        w-full 
        text-right
      "
    >
      <div
        className="
          flex 
          flex-col
          gap-2
        "
      >
        <div
          className="
            text-gray-700
            dark:text-white
            text-xl 
            font-semibold 
            flex 
            flex-row
            items-center 
            justify-end
            text-right
            gap-2
          "
        >
          <div className="text-right">
            Room by {user?.name}
          </div>
          <Avatar src={user?.image} size={45} />

        </div>
      </div>
      <hr />

      <div
        className="
          text-gray-700
          dark:text-white
          text-xl 
          font-semibold 
          font-light
        "
      >
        {title}
      </div>
      <hr />

      <div className="flex flex-col lg:flex-row text-center items-center h-full text-gray-700
            dark:text-white
            text-xl 
            font-semibold 
            font-light">
        <div className="flex flex-col text-center items-center md:w-4/12 w-full">
          <Avatar src={currentUser?.image} size={96} />
          <h1 className="mt-5">You</h1>
        </div>

        <div className="flex flex-col text-center items-center md:w-4/12 w-full">
          <FaAnglesRight className="w-24 h-24 rotate-90 lg:rotate-0" />
          <h1 className="mt-5">give a gift to</h1>
        </div>

        <div className="flex flex-col text-cente items-center md:w-4/12 w-full">
          <Avatar src={recipient?.image} size={96} />
          <h1 className="mt-5">{recipient?.name}</h1>
        </div>
      </div>

    </div>
  );
}

export default RoomResult;