'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from 'date-fns';

import {
  SafeRoom,
  SafeUser
} from "@/app/types";

import Button from "../Button";
import ClientOnly from "../ClientOnly";
import DeleteButton from "../DeleteButton";

interface RoomCardProps {
  data: SafeRoom;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null
};

const RoomCard: React.FC<RoomCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();


  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId)
    }, [disabled, onAction, actionId]);

  return (
    <div

      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div

          className="
            aspect-[2/3]
            w-full 
            relative 
            overflow-hidden 
            bg-white
          "
        >
          <Image
            fill
            onClick={() => router.push(`/rooms/${data.id}`)}
            className="
            
              w-full 
              group-hover:scale-110 
              transition
            "
            src={`/images/cards/card-${data.imgNum}.png`}
            alt="Room"
          />
          <div
            className="
          absolute 
          top-3 
          right-3"
          >
            <DeleteButton
              listingId={data.id}
              currentUser={currentUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;