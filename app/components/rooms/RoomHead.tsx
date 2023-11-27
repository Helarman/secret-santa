'use client';

import Image from "next/image";

import { SafeUser } from "@/app/types";

import Heading from "../Heading";

interface RoomHeadProps {
  title: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null
}

const RoomHead: React.FC<RoomHeadProps> = ({
  title,
  imageSrc,
  id,
  currentUser
}) => {


  return ( 
    <>
     
      <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
         
        </div>
      </div>
    </>
   );
}
 
export default RoomHead;