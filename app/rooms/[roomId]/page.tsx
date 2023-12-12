
import getCurrentUser from "@/app/actions/getCurrentUser";
import getRoomById from "@/app/actions/getRoomById";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import RoomClient from "./RoomClient";
import getUsers, { IUsersParams } from "@/app/actions/getUsers";

interface UsersPageProps {
  searchParams: IUsersParams
};


interface IParams {
  roomId?: string;
}

interface RoomPageProps {
  params: IParams
  searchParams: UsersPageProps
}
const RoomPage = async ({ params, searchParams }: { params: IParams, searchParams: UsersPageProps }) => {

  const room = await getRoomById(params);
  const currentUser = await getCurrentUser();
  const users = await getUsers(searchParams as any)

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
        users={users as any}
        room={room}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default RoomPage;
