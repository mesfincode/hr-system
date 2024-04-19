import * as jose from 'jose'


export const verifyJwt = async (jwt:string)=>{
    try{
        // const user = await db.user.findUnique({where:{id}});
        // const jwt= request.headers.get("Authorization")||"";
        // console.log(jwt)
        const secret = new TextEncoder().encode(
          process.env.JWT_SECRET,
        )
        const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, {})
        console.log(payload.sub)
        if(payload.sub){
            return payload.sub;

        }

    }catch(e){
        console.log(e)
        return null;
    }
}

export const getJwtToken =async (userId:string)=>{
   try{
    const secret = new TextEncoder().encode(
        process.env.JWT_SECRET,
      )
      const alg = 'HS256'
      const session_token = await new jose.SignJWT({ 'urn:example:claim': true })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setSubject(userId)
        .setExpirationTime('1h')  //1h 1m 
        .sign(secret)
   return session_token;
   }catch(e){
    return null;
   }
}


