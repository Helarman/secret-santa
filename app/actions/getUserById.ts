import prisma from "@/app/libs/prismadb";

interface IParams {
  id: string;
}

export default async function getUserById(
  params: IParams
) {
  try {
    const { id } = params;

    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
      createdAt: user.createdAt.toString(),
      updatedAt: user.updatedAt.toString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}