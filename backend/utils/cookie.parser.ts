import jwt from "jsonwebtoken";

export const parseToken = (token: string) => {
    try{
        type decodedType = {
            id: string;
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        return decoded as decodedType;
    }catch(err){
        return null;
    }
}