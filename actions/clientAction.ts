"use server"

import { db } from "@/lib/db"
import { Client, Prisma } from "@prisma/client"


export const createClient = async (data: any) => {
    try {
        await db.client.create({
            data: data
        })
        return { success: "Client created successfully" }

    } catch (e) {

        console.log(e);
        return { error: "Error Creating Client" }
    }
}
interface PaginationOptions {
    page: number;
    pageSize: number;
  }
  
  interface PaginationResponse {
    data: Client[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalEmployees: number;
    error:String;
  }
export const getClientWithPagination = async (paginationOptions: PaginationOptions): Promise<PaginationResponse> => {
    try {
      const { page, pageSize } = paginationOptions;
      const skip = (page - 1) * pageSize;
  
      const totalEmployees = await db.client.count();
      const totalPages = Math.ceil(totalEmployees / pageSize);
  
      const clients = await db.client.findMany({
        take: pageSize,
        skip: skip,
      });
  
      return {
        data: clients,
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

  export const getFilteredClient = async (
    searchString: string = '',
    page: number = 1,
    pageSize: number = 10
  ): Promise<PaginationResponse> => {
    try {
      const totalEmployees = await db.client.count({
        where: {
          OR: [
            { clientName: { contains: searchString, mode: 'insensitive' } },
            // { lastName: { contains: searchString, mode: 'insensitive' } },
            // { email: { contains: searchString, mode: 'insensitive' } },
  
            // { phone: { contains: searchString, mode: 'insensitive' } },
  
            // Add more fields as needed
          ],
        },
      });
      const totalPages = Math.ceil(totalEmployees / pageSize);
  
      const employees = await db.client.findMany({
        where: {
          OR: [
            { clientName: { contains: searchString, mode: 'insensitive' } },
            // { lastName: { contains: searchString, mode: 'insensitive' } },
            // { email: { contains: searchString, mode: 'insensitive' } },
            // { phone: { contains: searchString, mode: 'insensitive' } },
  
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
  