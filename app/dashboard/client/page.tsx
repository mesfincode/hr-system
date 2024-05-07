import React, { Suspense } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CreateClient from './components/CreateClient'
import SuspenseLoading from '@/components/loadings/suspense'
import ClientView from './components/ClientView'
const Client = () => {
  return (
    <Tabs defaultValue="view-employee" className="pt-4 ">
      <TabsList className="grid w-[400px] grid-cols-2 ">
        <TabsTrigger value="view-employee">Clients</TabsTrigger>
        <TabsTrigger value="create-employee">Create Client</TabsTrigger>
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
            <ClientView  />
          </Suspense>
          <h1>Client View</h1>
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
          <CreateClient />
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default Client
