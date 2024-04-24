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
const EmployeesView = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<z.infer<typeof EmployeeFormValidator>>({
    resolver: zodResolver(EmployeeFormValidator),
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      sex: "",
      bankAccount: "",
      education: "",
      profileImage: "",
      email: ""
      //   code:""
    }
  })

  const onSubmit = (values: z.infer<typeof EmployeeFormValidator>) => {
    console.log(values)
    setError("");
    setSuccess("");
    startTransition(() => {
      console.log(values)
      // registerUser(values);
      //   login(values).then((data)=>{
      //    if(data?.error){
      //     // form.reset();
      //     setError(data.error)
      //    }
      //    if(data?.success){
      //     // form.reset();
      //     setSuccess(data.success)
      //    }
      //    if(data?.twoFactor){
      //     // form.reset();
      //     setShowTwoFactor(true)
      //    }
      //   }).catch(()=>setError("Something went wrong"))
    })

  }
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
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    },
    {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    }, {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    }, {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    }, {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    }, {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    }, {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    }, {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    }, {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    }, {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    }, {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    }, {
      id: 'f73bd175-94fd-46c2-8d60-7107baa4da88',
      createdBy: 'clvayir3k0000homacajw1bl1',
      updatedBy: 'clvayir3k0000homacajw1bl1',
      firstName: 'mesfin',
      lastName: 'girma',
      email: 'mesfingirmatwo@gmail.com',
      phone: '+251943766122',
      role: 'Employee',
      position: 'devleoper',
      salary: 4000,
      onBoarding: "2024-04-03T21:00:00.000Z",
      createdAt: "2024-04-22T12:57:33.018Z",
      updatedAt: "2024-04-22T12:57:33.018Z",
      IBAN: 'aaaaaaa',
      photo: null,
      taxid: null,
      address: 'Addis Ababa, Bole',
      insurance: 'aaaaaa',
      assigned_to: null,
      teamsId: null
    },
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
          <div className="flex space-x-2">
             <CreateButton/>
          </div>
        </div>
        <Separator />
      </CardHeader>

      <CardContent>
        {!data || data.length === 0 ? (
          "No assigned employees found"
        ) : (
          <EmployeeDataTable data={data} columns={columns} />
        )}
      </CardContent>
    </Card>
  );
};

export default EmployeesView;