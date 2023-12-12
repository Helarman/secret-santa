import prisma from "@/app/libs/prismadb";

export interface IRoomsParams {
  userId: string;
}

export default async function getNotifications(
  params: IRoomsParams
) {
  try {

    let query: any = {};

    query.userId = params;
    
    const notifications = await prisma.notification.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });
    const safeNotifications = notifications.map((notification) => ({
      ...notification,
      createdAt: notification.createdAt.toISOString(),
    }));

    return safeNotifications;
  } catch (error: any) {
    throw new Error(error);
  }
}
