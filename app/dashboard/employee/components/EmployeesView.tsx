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

import { columns } from "../table-components/columns";
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
import { getEmployeeWithPagination } from "@/actions/employee";
const EmployeesView = ({employee}:any) => {
 
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [employeeData,setEmployeeData] = useState({});
  const {data,  page,
    pageSize,
    totalPages,
    totalEmployees} = employee;
  // console.log("Employee--",employee)

  useEffect(() => {
    setIsMounted(true);
    getEmploye()
  }, []);
 const getEmploye =async()=>{
  let pagenationOption = {page:1,pageSize:5}
  const employeeData = await getEmployeeWithPagination(pagenationOption)
  setEmployeeData(employeeData)
  console.log(employeeData)
  
 }
  if (!isMounted) {
    return null;
  }
const printMe = ()=>{
  console.log("fetching employee")
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
        {!data || data.length === 0 ? (
          "No assigned employees found"
        ) : (
          <EmployeeDataTable fetchNext={printMe}  data={ data} page={page} pageSize={pageSize} totalPages={ totalPages} totalEmployees={totalEmployees} columns={columns} />
        )}
      </CardContent>
    </Card>
  );
};

export default EmployeesView;