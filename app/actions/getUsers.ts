import prisma from "@/app/libs/prismadb";

export interface IUsersParams {
  name?: string;
  id?: string[];
}

export default async function getUsers(
  params: IUsersParams
) {
  try {
    const {
      name,
      id,
    } = params;

    let query: any = {};

    if (name) {
      query.name = {
        startsWith: name,
        mode: 'insensitive'
      }
    }

    if (id) {
      query.id = id;
    }

    const users = await prisma.user.findMany({
      where:query,
      orderBy: {
        createdAt: 'desc'
      }
    });
    const safeUsers = users.map((user) => ({
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.createdAt.toISOString()
    }));
    
    
    return safeUsers;
  } catch (error: any) {
    throw new Error(error);
  }
}
