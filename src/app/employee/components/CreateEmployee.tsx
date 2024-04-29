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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sex } from '@prisma/client'
import { createEmployee } from '@/actions/employee'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
const CreateEmployee = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();
  
    const form = useForm<z.infer<typeof EmployeeFormValidator>>({
        resolver: zodResolver(EmployeeFormValidator),
        defaultValues: {
          firstName: "",
          lastName: "",
          age: 0,
          sex: "",
          bankAccount: "",
          education: "",
          // profileImage: "",
          email: ""
          //   code:""
        }
      })
    
      const onSubmit = (values: z.infer<typeof EmployeeFormValidator>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
          // registerUser(values);
            createEmployee(values).then((data)=>{
              console.log(data)
             if(data?.error){
              // form.reset();
              setError(data.error)
             }
             if(data?.success){
              // form.reset();
              setSuccess(data.success)
             }
           
            }).catch(()=>setError("Something went wrong"))
        })
    
      }
  return (
    <div className='flex justify-center items-center py-8'>
        <Card className="w-[500px] shadow-md">
        <CardHeader className='flex justify-center items-center'>
           {/* <Header label="Create Employee"/> */}
           <h1 className='font-bold uppercase'>Create Employee</h1>
           </CardHeader>
           <CardContent>
          {/* <div className='flex justify-center items-center'>
          <input className=''  type="file" name="file" />
          </div> */}

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
                            type='number'
                            disabled={isPending}
                            {...form.register('age', { valueAsNumber: true })}
                          >

                          </Input>
                        </FormControl>

                        <FormMessage />
                      </FormItem>)}
                    >

                    </FormField>
                    <FormField
                    
                control={form.control}
                name="sex"
                
                render={({ field }) => (<FormItem>
          
                    <FormLabel>Sex</FormLabel>
                  <Select disabled={isPending}
                    onValueChange={field.onChange}
                    defaultValue={field.value}   >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={Sex.MALE} >
                        Male
                      </SelectItem>
                      <SelectItem value={Sex.FEMALE} >
                        Female
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />

                </FormItem>)}

              />
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
                      name='bankAccount'
                      render={({ field }) => (<FormItem>
                        <FormLabel>bankAccount</FormLabel>
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
                    {/* <FormField
                      control={form.control}
                      name='profileImage'
                      render={({ field }) => (<FormItem>
                        <FormLabel>profileImage</FormLabel>
                        <FormControl>
                          <Input {...field}
                            placeholder=' profileImage'
                            type='text'
                            disabled={isPending}

                          >

                          </Input>
                        </FormControl>

                        <FormMessage />
                      </FormItem>)}
                    >

                    </FormField> */}
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (<FormItem>
                        <FormLabel>Email</FormLabel>
                        <span className="optional-indicator">(Optional)</span>

                        <FormControl>
                          <Input {...field}
                            disabled={isPending}
                            placeholder='example@gmail.com'
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
                  <FormError message={error}/>
                  <FormSuccess message={success}/>

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
