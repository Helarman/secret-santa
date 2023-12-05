'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeRoom, SafeUser } from "@/app/types";

import useRentModal from "@/app/hooks/useRentModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import RoomCard from "../../components/rooms/RoomCard";

interface YourRoomsProps {
  rooms: SafeRoom[],
  currentUser?: SafeUser | null,
}

const YourRooms: React.FC<YourRoomsProps> = ({
  rooms,
  currentUser
}) => {


  return (
    <div id="#YourRooms" className="pt-8">
      <Container>
        <Heading
          title="Your rooms"
          subtitle="The rooms you're in"
        />
        <div
          className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
        >
          {rooms.map((room: any) => (
            <RoomCard
              key={room.id}
              data={room}
              actionId={room.id}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default YourRooms;