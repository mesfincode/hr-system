import { db } from "@/lib/db";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { RegsiterValidator } from "@/validators/validator";
import { getJwtToken } from "@/lib/jwt-util";

export async function POST(request: Request) {
  // Read data off req body
  const body = await request.json();
  const validatedFields = RegsiterValidator.safeParse(body);

  if (!validatedFields.success) {
    return Response.json({ error: "Envalid data" }, { status: 500 });
  }
  const { email, password, name } = body;

  
  try {
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return Response.json({ error: "Email already exists" }, { status: 500 });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await db.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      });
      const session_token = await getJwtToken(newUser.id); // Using newUser.id after creation.
      const filteredUser = filterUserData(newUser);
      const responseHeaders = new Headers({
        "Content-Type": "application/json",
        "Set-Cookie": `session_token=${session_token}; Path=/; Max-Age=3600`, // Add your cookie details here
        // Add other headers here (e.g., 'Authorization': 'Bearer your_token')
      });

      if (session_token) {
        responseHeaders.append("Authorization", session_token);
      }
      return new Response(
        JSON.stringify({
          success: "Account created successfully",
          data: { ...filterUserData(newUser), session_token },
        }),
        {
          status: 200,
          headers: responseHeaders,
        }
      );
    
    }
  } catch (e) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
function filterUserData(user: User): Omit<User, "password"> {
  const { password, ...userData } = user;
  return userData;
}
