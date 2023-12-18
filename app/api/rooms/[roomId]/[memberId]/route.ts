
import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  roomId?: string;
  memberId?: string;
}

export async function PUT(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const {
    roomId,
    memberId
  } = params;
  if (!roomId || typeof roomId !== 'string') {
    throw new Error('Invalid ID');
  }

  if (!memberId || typeof memberId !== 'string') {
    throw new Error('Invalid User ID');
  }

  console.log('members')

  
  const room = await prisma.room.update({
    where: {
      id: roomId
    },
    data: {
      membersIDs: {
        push: currentUser.id
      }
    }
  });

  return NextResponse.json(room);
}