import prisma from "@/app/libs/prismadb";

interface IParams {
  roomId?: string;
}

export default async function getRoomById(
  params: IParams
) {
  try {
    const { roomId } = params;

    const room = await prisma.room.findUnique({
      where: {
        id: roomId,
      },
      include: {
        user: true
      }
    });

    if (!room) {
      return null;
    }

    return {
      ...room,
      createdAt: room.createdAt.toString(),
      user: {
        ...room.user,
        createdAt: room.user.createdAt.toString(),
        updatedAt: room.user.updatedAt.toString(),
        emailVerified: 
          room.user.emailVerified?.toString() || null,
      }
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
