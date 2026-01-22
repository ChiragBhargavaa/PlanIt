import  {prisma} from "../config/prisma.js"

export const getCityDataService = async (vibe: String) => {
    const cityData = await prisma.city.findMany({
      where: { vibe: vibe }
    });
    return cityData;
  };