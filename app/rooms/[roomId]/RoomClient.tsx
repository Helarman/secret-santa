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
import { finished } from "stream";

interface RoomClientProps {
  room: SafeRoom & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
  users?: SafeUser[]
  members?: SafeUser[]
}

const RoomClient: React.FC<RoomClientProps> = ({
  room,
  users,
  currentUser,
  members
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [isResult, changeState] = useState(false);

  const toggleState = () => {
    changeState(!isResult)
  }

  const [addMember, setAddMember] = useState(false)

  const toggleAddUser = () => {
    setAddMember(!addMember)
  }

  const hideAddUser = () => {
    setAddMember(false)
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
          {room.finished ?
            <RoomResult
              id={room.id}
              user={room.user}
              description={room.description}
              title={room.title}
            />
            :
            <RoomInfo
              finished={room.finished}
              currentUser={currentUser as SafeUser}
              members={members}
              onClick={toggleAddUser}
              id={room.id}
              user={room.user}
              description={room.description}
              title={room.title}
            />
          }
        </div>

      </div>
        {addMember ? <RoomAddUsers onClick={hideAddUser} users={users} roomId={room.id} roomName={room.title} /> : ''}
    </Container>
  );
}

export default RoomClient;
