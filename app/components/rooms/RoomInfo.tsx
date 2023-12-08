'use client';


import { SafeUser } from "@/app/types";
import { FaUserPlus } from "react-icons/fa";

import Avatar from "../Avatar";
import Countdown from "react-countdown";
import Button from "../Button";

interface RoomInfoProps {
  user: SafeUser,
  description: string;
  title: string;
}

type RendererType = { days: number, hours: number, minutes: number, seconds: number, completed: boolean }

const RoomInfo: React.FC<RoomInfoProps> = ({
  user,
  title,
  description,
}) => {

  return (
    <div className="
        flex 
        flex-col 
        
        bg-white
        dark:bg-[#1E2746] 
        dark:text-white  w-full 
        text-right">
      <div className="p-5 gap-8  flex 
        flex-col ">
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

        <div
          className="
          text-lg 
          font-light 
          text-neutral-500
          dark:text-white
        "
        >
          {description}
        </div>

        <hr />

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
            items-start 
            justify-end
            text-right
            gap-2
          "
          >
            <button
              title="Add member"
              className="
                hover:opacity-75 
                opacity-100
                w-16 
                h-16 
                bg-gray-700 
                text-white 
                flex 
                justify-center 
                items-center 
                rounded-full
              "
            >
              <FaUserPlus className="w-6 h-6 " />
            </button>

            <Avatar src={user?.image} size={64} hover title='emailsososolong@domain.com'/>
            <Avatar src={user?.image} size={64} hover title='emailsososolong@domain.com'/>
            <Avatar src={user?.image} size={64} hover title='emailsososolong@domain.com'/>
            <Avatar src={user?.image} size={64} hover title='emailsososolong@domain.com'/>

          </div>

        </div>

      </div>
    </div >
  );
}

export default RoomInfo;