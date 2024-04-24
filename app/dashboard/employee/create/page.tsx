"use client"

import CardWrapper from '@/components/auth/card-wrapper'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { EmployeeFormValidator } from '@/validators/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from '@/components/auth/header'
const CreateEmployee = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();
  
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
  return (
    <div className='flex justify-center items-center py-8'>
        <Card className="w-[500px] shadow-md">
        <CardHeader>
           {/* <Header label="Create Employee"/> */}
           <h1>Create Employee</h1>
           </CardHeader>
           <CardContent>
           <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
                >
                  <div className='space-y-4'>
                    {/* {
              showTwoFactor && (   <FormField 
                control={form.control} 
                name='code'
                render={({field})=>(<FormItem>
                  <FormLabel>Two Factor Code</FormLabel>
                  <FormControl>
                    <Input {...field}
                    disabled={isPending}
                    placeholder='123456'
                    // type='email'
                    >
                    
                    </Input>
                  </FormControl>
                  <FormMessage/>
                </FormItem>)}
                >

                </FormField>)
            } */}
                    {/* { !showTwoFactor &&
                 ( <> */}
                  <div className='flex gap-3'>
                  <FormField
                      control={form.control}
                      name='firstName'
                      render={({ field }) => (<FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field}
                            placeholder='First Name'
                            type='text'
                            disabled={isPending}

                          >

                          </Input>
                        </FormControl>
                        {/* <Button
                   size="sm"
                   variant="link"
                   asChild
                   className='px-0 font-normal'

                   >
                     <Link href="/auth/reset">
                       Forgot Password?
                     </Link>
                   </Button> */}
                        <FormMessage />
                      </FormItem>)}
                    >

                    </FormField>
                    <FormField
                      control={form.control}
                      name='lastName'
                      render={({ field }) => (<FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field}
                            placeholder='Last Name'
                            type='text'
                            disabled={isPending}

                          >

                          </Input>
                        </FormControl>

                        <FormMessage />
                      </FormItem>)}
                    >

                    </FormField>
                  </div>

                  <div className='flex gap-4'>
                  <FormField
                      control={form.control}
                      name='age'
                      render={({ field }) => (<FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input {...field}
                            placeholder='Age'
                            type='text'
                            disabled={isPending}

                          >

                          </Input>
                        </FormControl>

                        <FormMessage />
                      </FormItem>)}
                    >

                    </FormField>
                    <FormField
                      control={form.control}
                      name='sex'
                      render={({ field }) => (<FormItem>
                        <FormLabel>Sex</FormLabel>
                        <FormControl>
                          <Input {...field}
                            placeholder='Sex'
                            type='text'
                            disabled={isPending}

                          >

                          </Input>
                        </FormControl>

                        <FormMessage />
                      </FormItem>)}
                    >

                    </FormField>
                  </div>
                    <FormField
                      control={form.control}
                      name='education'
                      render={({ field }) => (<FormItem>
                        <FormLabel>Education</FormLabel>
                        <FormControl>
                          <Input {...field}
                            placeholder=' Education'
                            type='text'
                            disabled={isPending}

                          >

                          </Input>
                        </FormControl>

                        <FormMessage />
                      </FormItem>)}
                    >

                    </FormField>
                    
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (<FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field}
                            disabled={isPending}
                            placeholder='john.doe@example.com'
                            type='email'
                          >

                          </Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>)}
                    >

                    </FormField>


                    {/* </>)
                 } */}
                  </div>
                  {/* <FormError message={error || urlErr}/> */}
                  {/* <FormSuccess message={success}/> */}

                  <Button type='submit' className='w-full' disabled={isPending}
                  >
                    {/* {
                showTwoFactor ?"Confirm":"Login"
               } */}
                    Create Employee
                  </Button>

                </form>
              </Form>
           </CardContent>
   

      </Card>
    </div>
  )
}

export default CreateEmployee
