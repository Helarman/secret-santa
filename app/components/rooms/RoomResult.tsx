'use client';


import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import { FaAnglesRight } from "react-icons/fa6";

interface RoomResultProps {
  id: string;
  user: SafeUser;
  description: string;
  title: string;
}


const RoomResult: React.FC<RoomResultProps> = ({
  id,
  user,
  title,
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


      <div className="grid grid-cols-3 items-center h-full">
        <div
          className="
          text-gray-700
          dark:text-white
          text-2xl 
          font-semibold 
          font-light
          mr-20
          h-48
          text-center
          grid 
          justify-center
          items-center
        "
        >
          <div>
            <Avatar src={user?.image} size={96} />
            <h1 className="mt-5">You</h1>
          </div>
        </div>
        <div
          className="
          text-gray-700
          dark:text-white
          text-2xl 
          font-semibold 
          font-light
          h-48
          text-center
          grid 
          justify-center
          items-center
        "
        >
          <div>

            <FaAnglesRight className="w-28 h-28" />
            <h1 className="mt-5">Gift to</h1>
          </div>
        </div>
        <div
          className="
          text-gray-700
          dark:text-white
          text-2xl 
          font-semibold 
          font-light
          ml-20
          h-48
          flex
          text-center
          grid 
          justify-center
          items-center
        "
        >
          <div>
            <Avatar src={user?.image} size={96} />
            <h1 className="mt-5">Name <br />Lastname</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomResult;