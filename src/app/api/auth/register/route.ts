import { db } from "@/lib/db";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { RegsiterValidator } from "@/validators/validator";
export async function POST(request: Request) {
    console.log("d,fvnbjhv");
    // Read data off req body
    const body = await request.json()
    const validatedFields = RegsiterValidator.safeParse(body);

    if(!validatedFields.success){
        return Response.json({error:"Envalid data"},{status:500})
    }
    const { email, password , name} = body

    try {
        const user = await db.user.findUnique({ where: { email } });
        if (user) {
            return Response.json({error:"Email already exist"},{status:500})
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
          const user =  await db.user.create({
                data: {
                    email, password: hashedPassword,name
                }
            })
            const filteredUser = filterUserData(user);
        return Response.json({success:"Account created successfuly",data:filteredUser},{status:200})
        }
    } catch (e) {
        return Response.json({error:"Something went wrong"},{status:500})
    }

}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Handle GET request (dummy data for testing)
    res.status(200).json({ message: 'This is a dummy GET endpoint for testing!' });
  } else if (req.method === 'POST') {
    // Your existing registration logic here
  } else {
    // Handle other request methods (optional)
  }
}
function filterUserData(user: User): Omit<User, 'password'> {
    const { password, ...userData } = user;
    return userData;
  }
  