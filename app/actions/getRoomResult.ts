import prisma from "@/app/libs/prismadb";

interface IParams {
  roomId: string;
  giverId: string;
}


export default async function getRoomById(
  params: IParams
) {
  try {
    const {
      roomId,
      giverId
    } = params;

    const query: any = {};


    query.roomId = roomId;
    query.giverId = giverId;


    const giving = await prisma.giving.findFirst({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    if (!giving) {
      return null;
    }

    const safeGivings = {
      id: giving.id,
      roomId: giving.roomId,
      giverId: giving.giverId,
      recipientId: giving.recipientId,
      createdAt: giving.createdAt.toISOString(),
    };


    return safeGivings;
  } catch (error: any) {
    throw new Error(error);
  }
}
