import upload, { uploadHandler } from "@/lib/upload";
import { fail } from "assert";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { join ,parse} from "path";

import { rename } from "fs/promises";
export async function POST(request: Request) {
    console.log("upload")
    const data = await request.formData();
    const file:File | null = data.get('file') as unknown as File 
    console.log(file)

    if(!File){
        console.log(file)
        return NextResponse.json({success:false})
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    // const path = join('/','tmp',file.name)
    const currentDirectory = process.cwd();

    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const { name, ext } = parse(file.name);
const fileName = `${name}-${uniqueSuffix}${ext}`
    // const filename = await rename(file.name, `${name}-${uniqueSuffix}${ext}`)
    const path = join(currentDirectory, 'image', fileName);
    await writeFile(path,buffer);
    console.log(`open ${path} to see the uploaded file`)
  
    return Response.json({success:"File Uploaded",data:fileName},{status:200})

}