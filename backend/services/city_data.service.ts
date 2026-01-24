import  {prisma} from "../config/prisma.js"

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