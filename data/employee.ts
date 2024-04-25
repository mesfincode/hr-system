import { db } from "@/lib/db"
import { Employee } from "@prisma/client"

export const createEmployee = (data:any)=>{
   try{
    const newEmployee = db.employee.create({
        data:data
    })
    return newEmployee;
   }catch(e){
    return null
   }
}