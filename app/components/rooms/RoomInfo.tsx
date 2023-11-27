'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";

interface RoomInfoProps {
  user: SafeUser,
  description: string;

}

const RoomInfo: React.FC<RoomInfoProps> = ({
  user,
  description,
}) => {

 

  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
      </div>
      <hr />
      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
    </div>
   );
}
 
export default RoomInfo;