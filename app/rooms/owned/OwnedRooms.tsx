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
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');
  const rentModal = useRentModal();
  const loginModal = useLoginModal();

  const onDelete = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/rooms/${id}`)
      .then(() => {
        toast.success('Room deleted');
        router.refresh();
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error)
      })
      .finally(() => {
        setDeletingId('');
      })
  }, [router]);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  if (rooms.length < 1) {
    return (
      <div id="#OwnedRooms">
        <Container>
          <Heading
            title="Owned rooms"
            subtitle="List of owned rooms"
          />
          <h1>Empty State</h1>
        </Container>
      </div>
    )
  }

  return (
    <div id="#OwnedRooms">
      <Container>
        <Heading
          title="Owned rooms"
          subtitle="List of owned rooms"
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
              onAction={onDelete}
              disabled={deletingId === room.id}
              actionLabel="Delete property"
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default YourRooms;