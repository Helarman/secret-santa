import prisma from "@/app/libs/prismadb";

export interface IRoomsParams {
  userId?: string;
}

export default async function getRooms(
  params: IRoomsParams
) {
  try {
    const {
      userId
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const rooms = await prisma.room.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeRooms = rooms.map((room) => ({
      ...room,
      createdAt: room.createdAt.toISOString(),
    }));

    return safeRooms;
  } catch (error: any) {
    throw new Error(error);
  }
}
