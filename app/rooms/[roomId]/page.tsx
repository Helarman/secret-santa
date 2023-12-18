
import getCurrentUser from "@/app/actions/getCurrentUser";
import getRoomById from "@/app/actions/getRoomById";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import RoomClient from "./RoomClient";
import getUsers, { IUsersParams } from "@/app/actions/getUsers";
import Avatar from "@/app/components/Avatar";
import getMembers from "@/app/actions/getMembers";
import { SafeUser } from "@/app/types";

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
  const users = await getUsers(searchParams as any);
  const membersIDs = room?.membersIDs;
  const id = membersIDs && membersIDs.map(id => ({ id }))

  const members = await getMembers({ id: membersIDs })



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
        users={users as SafeUser[]}
        room={room}
        currentUser={currentUser as SafeUser}
        members={members as SafeUser[]}
      />
    </ClientOnly>
  );
}

export default RoomPage;
