'use client';


import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import { FaAnglesRight  } from "react-icons/fa6";

interface RoomResultProps {
  user: SafeUser,
  description: string;
  title: string;
}


const RoomResult: React.FC<RoomResultProps> = ({
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
      <div className="flex justify-end flex-row items-center">
        <div
          className="
          text-gray-700
          dark:text-white
          text-2xl 
          font-semibold 
          font-light
          mr-20
          h-48
          flex justify-center
          center
          border-2
        "
        >
          <div>
            <Avatar src={user?.image} size={96} />
            <h1 className="mr-10">You</h1>
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


          border-2
        "
        >
          <div>
            
            <FaAnglesRight className="w-28 h-28" />
            <h1 className="mr-10">Give a gift to</h1>
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
          center

          border-2
        "
        >
          <div>
            <Avatar src={user?.image} size={96} />
            <h1 className="mr-10">Name <br/>Lastname</h1>
          </div>
        </div>
      </div>
      <hr />
      {/*<div
        className="
          text-gray-700
          dark:text-white
          text-xl 
          font-semibold 
          font-light
        "
      >
        <div className="flex text-right justify-center items-center">
          <h1 className="mr-10"> Preferred gifts</h1><br/>
          <p>Proin in nunc nisl. Integer eu finibus mauris. Suspendisse laoreet.</p>
        </div>
      </div>*/}
    </div>
  );
}

export default RoomResult;