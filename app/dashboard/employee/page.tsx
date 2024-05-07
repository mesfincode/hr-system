import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Container from "../_components/Container"
import { Suspense, useEffect } from "react"
import SuspenseLoading from "@/components/loadings/suspense"
import EmployeesView from "./components/EmployeesView"
import CreateEmployee from "./components/CreateEmployee"
import { getAllEmployee, getEmployeeWithPagination } from "@/actions/employee"

export default async function Employee() {
  // const employee = await  getAllEmployee();
  let pagenationOption = { page: 1, pageSize: 5 }
  const employeeData = await getEmployeeWithPagination(pagenationOption)

  // console.log(employeeData)
  return (
    <Tabs defaultValue="view-employee" className="pt-4 ">
      <TabsList className="grid w-[400px] grid-cols-2 ">
        <TabsTrigger value="view-employee">Employee</TabsTrigger>
        <TabsTrigger value="create-employee">Create Employee</TabsTrigger>
      </TabsList>
      <TabsContent value="view-employee">
        <Card>
          {/* <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader> */}
          <Suspense fallback={<SuspenseLoading />}>
            <EmployeesView employee={employeeData} />
          </Suspense>
        </Card>
      </TabsContent>
      <TabsContent value="create-employee">
        <Card>
          {/* <CardHeader className="flex justify-center items-center flex-col">
            <CardTitle>Create Employee</CardTitle>
            <CardDescription>
             Use the form below to create Employee
            </CardDescription>
          </CardHeader> */}
          <CreateEmployee />
        </Card>
      </TabsContent>
    </Tabs>
  )
}
