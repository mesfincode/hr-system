import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { LoginValidator } from "@/validators/validator";
import { getJwtToken } from "@/lib/jwt-util";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body = req.body;
    const validatedFields = LoginValidator.safeParse(body);

    if (!validatedFields.success) {
      return res.status(500).json({ error: "Invalid data" });
    }

    const { email, password } = body;

    try {
      const user = await db.user.findUnique({ where: { email } });

      if (user) {
        const passwordsMatch = await bcrypt.compare(password, user.password || "");

        if (passwordsMatch) {
          // Perform deletion logic here
          // Example: await db.user.delete({ where: { email } });

          // Optionally, revoke session token if applicable
          // const session_token = await getJwtToken(user.id);
          // ...

          return res.status(200).json({ success: "Account deleted successfully" });
        } else {
          return res.status(404).json({ error: "Wrong password" });
        }
      } else {
        return res.status(404).json({ error: "Account not found" });
      }
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
