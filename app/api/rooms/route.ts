import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { 
    title,
    description,
    imgNum
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const room = await prisma.room.create({
    data: {
      title,
      description,
      finished: false,
      imgNum,
      userId: currentUser.id,
      membersIDs: currentUser.id
    }
  });

  return NextResponse.json(room);
}
