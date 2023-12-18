import prisma from "@/app/libs/prismadb";

export interface IMembersParams {
  id?: string[];
}

export default async function getMembers(
  params: IMembersParams
) {
  try {
    const {id} = params;

    const members = await prisma.user.findMany({
      where:{
        id: {in: id}
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    const safeMembers = members.map((member) => ({
      ...member,
      createdAt: member.createdAt.toISOString(),
      updatedAt: member.createdAt.toISOString()
    }));
    
    
    return safeMembers;
  } catch (error: any) {
    throw new Error(error);
  }
}
