import { getAllUser, getUserById } from '@/data/user';
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
    console.log(payload.sub)
    if(payload.sub){
        const user = await getUserById(payload.sub)
        console.log(user)
        if(user?.role === "ADMIN"){
            const data = await getAllUser();
            return Response.json({success:"Account created successfuly",data:data},{status:200})

        }else{
            return Response.json({success:"You are not allowed to get this data",data:{}},{status:400})
        }

    }else{
        return Response.json({error:"User does not exist",data:{}},{status:400})

    }

  }catch(e){
    return Response.json({error:"Unauthorized",data:{}},{status:400})

  }

}