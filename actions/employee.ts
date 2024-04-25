"use server"

import { db } from "@/lib/db"
import { Employee, Prisma } from "@prisma/client"

export const createEmployee = async (data:any)=>{
   try{
     await db.employee.create({
        data:data
    })
   return {success:"Employee created successfully"}
   }catch(e){
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
        //   console.log(
        //     'There is a unique constraint violation, a new user cannot be created with this email'
        //   )
        return {error:"Email already exists"}

        }
      }
    return {error:"Error Creating employee"}
   }
}

export const getAllEmployee = async ()=>{
    try{
   const allEmployee = await db.employee.findMany({})
     return allEmployee;
    }catch(e){
     console.log(e)
     return {error:"Error Creating employee"}
    }
 }