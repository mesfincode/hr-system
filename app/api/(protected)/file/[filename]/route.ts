import { join } from "path";

import fs from 'fs';
import { ImageResponse } from 'next/og'
import { NextResponse } from "next/server";
import { readFile } from "fs/promises";

export async function GET(request: Request) {
   try{
    console.log(request.url)
    const pathname = request.url;
      // Parse the URL
//   const parsedUrl = url.parse(pathname);

  // Get the file name
  const fileName = pathname.split('/').pop();

    const currentDirectory = process.cwd();

   if(fileName){
    const imagePath = join(currentDirectory, 'image',fileName);
    const data = await readFile(imagePath)
    if(data){
        return new Response(data, { headers: { 'content-type': 'image/png' } });

    }else{
        return NextResponse.json({success:false})

    }

   }else{
    return NextResponse.json({success:false})

   }
   }catch(e){
    return NextResponse.json({success:false})

   }

 

}