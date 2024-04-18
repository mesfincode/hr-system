import { db } from "@/lib/db";

export const getUserByEmail = async (email:string)=>{
    try{
        const user = await db.user.findUnique({where:{email}});
        return user;
    }catch{
        return null;
    }
}

export const getUserById = async (id:string)=>{
    try{
        const user = await db.user.findUnique({where:{id}});
        
        return user;

    }catch{
        return null;
    }
}

export const getAllUser = async ()=>{
    try{
        const user = await db.user.findMany({
            select: {
              email: true,
              name: true,
            },
          });
        
        return user;

    }catch{
        return null;
    }
}