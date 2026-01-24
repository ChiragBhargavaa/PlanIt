import { prisma } from "../config/prisma.js";

export const cityDetailsService = async (name: string) => {
    type City = {
        name: string;
        state: string;
        country: string;
        latitude: number;
        longitude: number;
        timezone: string;
        popularity: number;
        average_time_spent: number;
        vibe: string;
    }

    try{
    const cityDetails: City | null = await prisma.city.findFirst({
        where: {
            name: name
        }
    });
    return cityDetails;
    }
    catch(error){
        throw new Error("Failed to get city details");  
        return null;
    }
}