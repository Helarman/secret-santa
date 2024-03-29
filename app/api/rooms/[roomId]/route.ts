
import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  roomId?: string;
  finished?: boolean;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { roomId } = params;

  if (!roomId || typeof roomId !== 'string') {
    throw new Error('Invalid ID');
  }

  const room = await prisma.room.deleteMany({
    where: {
      id: roomId,
      userId: currentUser.id
    }
  });

  return NextResponse.json(room);
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
  } = params;
  if (!roomId || typeof roomId !== 'string') {
    throw new Error('Invalid ID');
  }


  
  const room = await prisma.room.update({
    where: {
      id: roomId
    },
    data: {
      finished: true
    }
  });

  return NextResponse.json(room);
}