"use client";

import { useEffect, useState, useTransition } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import RightViewModal from "@/components/modals/right-view-modal";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

// import { columns } from "../table-components/columns";
import { NewEmployeeForm } from "./NewEmployeeForm";
import { EmployeeDataTable } from "../table-components/data-table";
import { useRouter } from "next/navigation";
import { DialogForm } from "@/components/dialog/DialogComp";
import { useForm } from "react-hook-form";
import { EmployeeFormValidator } from "@/validators/validator";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreateButton from "@/components/create-button";
import { Employee } from "@prisma/client";
import { getEmployeeWithPagination, getFilteredEmployee } from "@/actions/employee";
import { PaginationOptions } from "@/interfaces/interfaces";
import { columns } from "../table-components/columns";

const EmployeesView = ({employee}:any) => {
 
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);  
  const [page,setPage] = useState(0);
  const [pageSize,setPageSize] = useState(5);
  const [totalPages,setTotalPages] = useState(0);
  const [totalEmployees,setTotalEmployees] = useState(0)

  // const {data,  page,
  //   pageSize,
  //   totalPages,
  //   totalEmployees} = employee;
  // console.log("Employee--",employee)

  useEffect(() => {
    setIsMounted(true);
    getEmploye()
  }, []);

 const getEmploye =async()=>{
  let pagenationOption = {page:1,pageSize:pageSize}
  const employeeData = await getEmployeeWithPagination(pagenationOption)
  setEmployeeList(employeeData.data)
  setPage(employeeData.page)
  setPageSize(employeeData.pageSize)
  setTotalPages(employeeData.totalPages)
  setTotalEmployees(employeeData.totalEmployees)

  console.log(employeeData)
  
 }
  if (!isMounted) {
    return null;
  }

const printMe = async({page,pageSize}:PaginationOptions)=>{
  console.log("fetching employee")
  let pagenationOption = {page:page,pageSize:pageSize}
  const employeeData = await getEmployeeWithPagination(pagenationOption)
  setEmployeeList(employeeData.data)
  setPage(employeeData.page)
  // setPageSize(employeeData.pageSize)
  setTotalPages(employeeData.totalPages)
  setTotalEmployees(employeeData.totalEmployees)

}
const getFilteredEmp = async(searchCriteria: string ,
  page: number ,
  pageSize: number )=>{
  console.log("filter emp---->",searchCriteria)
  let pagenationOption = {page:page,pageSize:pageSize}
  const employeeData = await getFilteredEmployee(searchCriteria,page,pageSize)
  console.log(employeeData)
  setEmployeeList(employeeData.data)
  setPage(employeeData.page)
  // setPageSize(employeeData.pageSize)
  setTotalPages(employeeData.totalPages)
  setTotalEmployees(employeeData.totalEmployees)

}

const updatePageSize= (pageSize:number)=>{
  setPageSize(pageSize);
}
  

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between">
          <div>
            <CardTitle
              onClick={() => router.push("/employees")}
              className="cursor-pointer"
            >
              Employees
            </CardTitle>
            <CardDescription></CardDescription>
          </div>
          {/* <div className="flex space-x-2">
             <CreateButton/>
          </div> */}
        </div>
        <Separator />
      </CardHeader>

      <CardContent>
      <EmployeeDataTable fetchNext={printMe} getFilteredEmp={getFilteredEmp} updatePageSize ={updatePageSize}  data={ employeeList} page={page} pageSize={pageSize} totalPages={ totalPages}  columns={columns} totalEmployees={totalEmployees} />

      </CardContent>
    </Card>
  );
};

export default EmployeesView;