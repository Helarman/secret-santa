
import getCurrentUser from "@/app/actions/getCurrentUser";
import getRoomById from "@/app/actions/getRoomById";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import RoomClient from "./RoomClient";
import getUsers, { IUsersParams } from "@/app/actions/getUsers";
import Avatar from "@/app/components/Avatar";
import getMembers from "@/app/actions/getMembers";
import { SafeUser } from "@/app/types";
import getRoomResult from "@/app/actions/getRoomResult";
import getUserById from "@/app/actions/getUserById";

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
  const members = await getMembers({ id: membersIDs })
  const result = await getRoomResult({ roomId: room?.id as string, giverId: currentUser?.id as string})
  const recipient = await getUserById({id: result?.recipientId as string})

  if(!membersIDs || !currentUser){
    return;
  }

  const isMember = membersIDs.includes(currentUser?.id)
  
  if (!room) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  if(!isMember) {
    return(
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <RoomClient
        users={users as SafeUser[]}
        room={room}
        currentUser={currentUser as SafeUser}
        members={members as SafeUser[]}
        recipient={recipient as SafeUser}
      />
    </ClientOnly>
  );
}

export default RoomPage;
