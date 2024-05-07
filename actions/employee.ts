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
export const updateEmployee = async (data:any)=>{
  try{
    const {
      id,
      firstName,
      lastName,
      email,
      phone,
     age,
     sex,
     bankAccount,
     education,
    } = data;

    const updateEmployee = await db.employee.update({
      where: {
        id,
      },
      data: {
        // updatedBy: userId,        
        firstName,
        lastName,
        email,
        // position,
        phone,
        age,
        sex,
        bankAccount,
        education,
       
      },
    });

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


interface ErrorRespones {
  error: string;
}

type GetEmployeeWithPaginationResponse = PaginationResponse | ErrorRespones;

 interface PaginationOptions {
  page: number;
  pageSize: number;
}

interface PaginationResponse {
  data: Employee[];
  page: number;
  pageSize: number;
  totalPages: number;
  totalEmployees: number;
  error:String;
}
export const getEmployeeWithPagination = async (paginationOptions: PaginationOptions): Promise<PaginationResponse> => {
  try {
    const { page, pageSize } = paginationOptions;
    const skip = (page - 1) * pageSize;

    const totalEmployees = await db.employee.count();
    const totalPages = Math.ceil(totalEmployees / pageSize);

    const employees = await db.employee.findMany({
      take: pageSize,
      skip: skip,
    });

    return {
      data: employees,
      page: page,
      pageSize: pageSize,
      totalPages: totalPages,
      totalEmployees: totalEmployees,
      error:"",
    };
  } catch (error) {
    console.error('Error fetching employee data:', error);
    return { 
      data: [],
      page: 0,
      pageSize: 0,
      totalPages: 0,
      totalEmployees: 0,
      error: 'Error fetching employee data' };
  } 
};
export const getFilteredEmployee = async (
  searchString: string = '',
  page: number = 1,
  pageSize: number = 10
): Promise<PaginationResponse> => {
  try {
    const totalEmployees = await db.employee.count({
      where: {
        OR: [
          { firstName: { contains: searchString, mode: 'insensitive' } },
          { lastName: { contains: searchString, mode: 'insensitive' } },
          { email: { contains: searchString, mode: 'insensitive' } },

          { phone: { contains: searchString, mode: 'insensitive' } },

          // Add more fields as needed
        ],
      },
    });
    const totalPages = Math.ceil(totalEmployees / pageSize);

    const employees = await db.employee.findMany({
      where: {
        OR: [
          { firstName: { contains: searchString, mode: 'insensitive' } },
          { lastName: { contains: searchString, mode: 'insensitive' } },
          { email: { contains: searchString, mode: 'insensitive' } },
          { phone: { contains: searchString, mode: 'insensitive' } },

          // Add more fields as needed
        ],
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
   
    return {
      data: employees,
      page: page,
      pageSize: pageSize,
      totalPages: totalPages,
      totalEmployees: totalEmployees,
      error:"",
    };
  } catch (e) {
    return { 
      data: [],
      page: 0,
      pageSize: 0,
      totalPages: 0,
      totalEmployees: 0,
      error: 'Error fetching employee data' };
  }
};

 export const getEmployeesWithId = async (employeeId: number) => {
  const data = await db.employee.findFirst({
    where: {
      id: employeeId,
    },     
  });
  return data;
};