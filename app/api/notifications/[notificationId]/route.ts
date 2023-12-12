
import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  notificationId?: string;
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
    notificationId
  } = params;
  if (!notificationId || typeof notificationId !== 'string') {
    throw new Error('Invalid ID');
  }

  const room = await prisma.notification.update({
    where: {
      id: notificationId
    },
    data: {
      type:  'disabled'
    }
  });

  return NextResponse.json(room);
}