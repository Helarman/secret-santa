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
import RoomCard from "../components/rooms/RoomCard";

interface PropertiesClientProps {
  rooms: SafeRoom[],
  currentUser?: SafeUser | null,
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
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
  
  return ( 
    <Container>
      <Heading
        title="Properties"
        subtitle="List of your properties"
      />
      <div 
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Create new room
        </div>
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
   );
}
 
export default PropertiesClient;