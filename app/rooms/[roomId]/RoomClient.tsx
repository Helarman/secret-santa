'use client';

import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeRoom, SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import Image from "next/image";
import RoomInfo from "@/app/components/rooms/RoomInfo";
import RoomResult from "@/app/components/rooms/RoomResult";
import RoomAddUsers from "@/app/components/rooms/RoomAddUsers";

interface RoomClientProps {
  room: SafeRoom & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
  users?: SafeUser[]
}

const RoomClient: React.FC<RoomClientProps> = ({
  room,
  users,
  currentUser
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [isResult, changeState] = useState(false);

  const toggleState = () => {
    changeState(!isResult)
  }

  return (
    <Container>
      <div className="flex flex-col lg:flex-row h-[70vh]">
        <div className="
          lg:w-4/12
          aspect-ratio-[2/3]
          w-full
          h-full
          overflow-hidden 
          relative
        "
        >
          <Image
            loading='lazy'
            src={`/images/cards/card-${room.imgNum}.png`}
            fill
            className="object-cover w-full "
            alt="Image"
          />
        </div>
        <div
          className="
            flex lg:w-8/12 w-full
            "
        >
          {isResult ?
            <RoomResult
              user={room.user}
              description={room.description}
              title={room.title}
            />
            :
            <RoomInfo
              user={room.user}
              description={room.description}
              title={room.title}
            />
          }
        </div>

      </div>
      <RoomAddUsers users={users} roomId={room.id} roomName={room.title}/>
      <button onClick={toggleState} className="p-3 border-2">Change state</button>
    </Container>
  );
}

export default RoomClient;
