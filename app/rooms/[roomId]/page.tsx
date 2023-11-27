
import getCurrentUser from "@/app/actions/getCurrentUser";
import getRoomById from "@/app/actions/getRoomById";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import RoomClient from "./RoomClient";

interface IParams {
  roomId?: string;
}

const RoomPage = async ({ params }: { params: IParams }) => {

  const room = await getRoomById(params);
  const currentUser = await getCurrentUser();

  if (!room) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <RoomClient
        room={room}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default RoomPage;
