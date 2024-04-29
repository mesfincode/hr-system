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
const EmployeesView = (employee:any) => {
  console.log(employee)
 
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
 
 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const { users } = {
    users: [
      {
        id: 'clvayir3k0000homacajw1bl1',
        account_name: '',
        avatar: '',
        email: 'zeleke@gmail.com',
        is_account_admin: false,
        is_admin: true,
        created_on: "2024-04-22T00:00:00.000Z",
        lastLoginAt: "2024-04-24T00:00:00.000Z",
        name: 'zeleke',
        password: '$2a$12$5cpy5pBcfOjHn5kCHKqFyO7xeHJaThFXkplutvjaWr4yLLyC2L8Tu',
        username: 'zeleke',
        userStatus: 'ACTIVE',
        userLanguage: 'en',
        watching_boardsIDs: [],
        watching_accountsIDs: [],
        role: 'guest'
      }
    ],
  };
  const data = [
    {
      id: 1,
      firstName: 'mesfin',
      lastName: 'girma',
      age: 34,
      sex: 'MALE',
      bankAccount: 'jhkjhkjkjj',
      education: 'weeeee',
      profileImage: null,
      email: 'mesfingirmatwo@gmail.com'
    },
    {
      id: 2,
      firstName: 'abebe',
      lastName: 'kebede',
      age: 45,
      sex: 'MALE',
      bankAccount: '10000000000323',
      education: '8th',
      profileImage: null,
      email: 'abebe@gmail.com'
    },
    {
      id: 8,
      firstName: 'ssss',
      lastName: 'eeeeee',
      age: 56,
      sex: 'MALE',
      bankAccount: '100000002323',
      education: 'reeeeeeerrrrr',
      profileImage: null,
      email: ''
    }
  ]


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
        {!employee || employee.length === 0 ? (
          "No assigned employees found"
        ) : (
          <EmployeeDataTable data={employee['employee']} columns={columns} />
        )}
      </CardContent>
    </Card>
  );
};

export default EmployeesView;