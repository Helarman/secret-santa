'use client';

import { FaXmark } from "react-icons/fa6";

import { SafeUser } from "@/app/types";
import RoomDelete from "../actions/deleteRoomById";

interface DeleteButtonProps {
    listingId: string
    currentUser?: SafeUser | null
}
type HandleDeleteProps = string;

const DeleteButton: React.FC<DeleteButtonProps> = ({
    listingId,
    currentUser
}) => {

   
    
    const handleDelete: React.FC<HandleDeleteProps> = (id) => {
        RoomDelete(id);
        return null;
    }

    return (
        <div
            onClick={(e: any) => handleDelete(listingId)}
            className="
            relative
            hover:opacity-80
            transition
            cursor-pointer
        "
        >
            <FaXmark
                size={28}
                className="
          fill-white
          border-2
          absolute
          -top-[2px]
          -right-[2px]
        "
            />
        </div>
    );
}

export default DeleteButton;