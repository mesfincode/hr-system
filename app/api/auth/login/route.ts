import { db } from "@/lib/db";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { LoginValidator } from "@/validators/validator";
import * as jose from 'jose'

export async function POST(request: Request) {
  const body = await request.json()
  const validatedFields = LoginValidator.safeParse(body);

  if (!validatedFields.success) {
    return Response.json({ error: "Envalid data" }, { status: 500 })
  }
  const { email, password } = body

  try {
    const user = await db.user.findUnique({ where: { email } });

    if (user) {
      const passwordsMatch = await bcrypt.compare(
        password, user.password || ""
      )
      if (passwordsMatch) {
        const secret = new TextEncoder().encode(
          process.env.JWT_SECRET,
        )
        const alg = 'HS256'
        const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
          .setProtectedHeader({ alg })
          .setIssuedAt()
          .setIssuer('urn:example:issuer')
          .setAudience('urn:example:audience')
          .setSubject(user.id)
          .setExpirationTime('2h')
          .sign(secret)

        console.log(jwt)
        const responseHeaders = new Headers({
          'Content-Type': 'application/json',
          'Authorization': jwt
          // Add other headers here (e.g., 'Authorization': 'Bearer your_token')
        });

        return new Response(JSON.stringify({ success: "Your account exists", data: filterUserData(user) }), {
          status: 200,
          headers: responseHeaders,
        });

        // return Response.json({success:"Your account exists",data:filterUserData(user)},{status:200})

      } else {
        return Response.json({ error: "Wrong password" }, { status: 404 })

      }
    } else {

      return Response.json({ error: "Account not found" }, { status: 404 })
    }
  } catch (e) {
    return Response.json({ error: "Something went wrong" }, { status: 500 })
  }

}
function filterUserData(user: User): Omit<User, 'password'> {
  const { password, ...userData } = user;
  return userData;
}
