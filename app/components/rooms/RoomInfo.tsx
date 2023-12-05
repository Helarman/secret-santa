'use client';


import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import Countdown from "react-countdown";

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

  const Date = '2024-01-01T00:00:00'

  const renderer: React.FC<RendererType> = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p>vse</p>
    } else {
      // Render a countdown
      return <span>Until the end left {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</span>;
    }
  };
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
      <div
        className="
          text-gray-700
          dark:text-white
          text-xl 
          font-semibold 
          font-light
        "
      >
        <Countdown date={Date} renderer={renderer} />
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
          <Avatar src={user?.image} size={70} hover>emailsososolong@domain.com</Avatar>
          <Avatar src={user?.image} size={70} hover>emailsososolong@domain.com</Avatar>
          <Avatar src={user?.image} size={70} hover>emailsososolong@domain.com</Avatar>
          <Avatar src={user?.image} size={70} hover>emailsososolong@domain.com</Avatar>
          <Avatar src={user?.image} size={70} hover>emailsososolong@domain.com</Avatar>

        </div>
      </div>

    </div>
  );
}

export default RoomInfo;