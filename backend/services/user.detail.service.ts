import { prisma } from "../config/prisma.js";

export const getUserById = async (id: string) => {
    try{
        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                email: true,
                first_name: true,
                last_name: true,
                id: true
            }
        });

        return user;

    }catch(err){
        throw new Error("Failed to get user details");
    }
    
}