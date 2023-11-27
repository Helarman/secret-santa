'use client';

import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeRoom, SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import RoomHead from "@/app/components/rooms/RoomHead";
import RoomInfo from "@/app/components/rooms/RoomInfo";

interface RoomClientProps {
  room: SafeRoom & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const RoomClient: React.FC<RoomClientProps> = ({
  room,
  currentUser
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);



  return ( 
    <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <RoomHead
            title={room.title}
            imageSrc={room.imageSrc}
            id={room.id}
            currentUser={currentUser}
          />
          <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <RoomInfo
              user={room.user}
              description={room.description}
            />
            <div 
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
             
            </div>
          </div>
        </div>
      </div>
    </Container>
   );
}
 
export default RoomClient;
