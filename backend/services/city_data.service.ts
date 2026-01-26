import  {prisma} from "../config/prisma.js"

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

export const getCityDataService = async (vibe: String) => {
  try{
    const cityData = await prisma.city.findMany({
      where: { vibe: vibe }
    });
    return cityData;
  }
  catch(error){
    throw new Error("Failed to get city data");
  }
};

export const cityDetailsService = async (name: string) => {
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
  }
};