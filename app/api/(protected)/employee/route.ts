import { error } from 'console';
import * as jose from 'jose'

export async function GET(request: Request) {
    const jwt= request.headers.get("Authorization")||"";
  console.log(jwt)
  const secret = new TextEncoder().encode(
    process.env.JWT_SECRET,
  )
 
  try{
    const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, {})
    console.log(payload)
      return Response.json({success:"Account created successfuly",data:{}},{status:200})

  }catch(e){
    return Response.json({error:"Unauthorized",data:{}},{status:400})

  }

}