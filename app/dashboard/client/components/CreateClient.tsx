"use client"
import { createClient } from "@/actions/clientAction";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ClientValidator } from "@/validators/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";


const CreateClient = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ClientValidator>>({
        resolver: zodResolver(ClientValidator),
        defaultValues: {
            clientName: "",
            otSallary: 0,
            sallary: 0,
            //   code:""
        }
    })

    const onSubmit = (values: z.infer<typeof ClientValidator>) => {
        console.log(values)

        setError("");
        setSuccess("");
        startTransition(() => {
            // registerUser(values);
            createClient(values).then((data) => {
                // console.log(data)
                if (data?.error) {
                    // form.reset();
                    setError(data.error)
                }
                if (data?.success) {
                    // form.reset();
                    setSuccess(data.success)
                }

            }).catch((e) => {
                console.log(e)
                setError("Something went wrong")
            })
        })

    }
    return (
        <div>
            <div className='flex justify-center items-center py-8'>
                <Card className="w-[500px] shadow-md">
                    <CardHeader className='flex justify-center items-center'>
                        {/* <Header label="Create Employee"/> */}
                        <h1 className='font-bold uppercase'>Create Client</h1>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}
                                className='space-y-6'
                            >
                                <div className='space-y-4 '>

                                    <FormField
                                        control={form.control}
                                        name='clientName'
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
                                            
                                            <FormMessage />
                                        </FormItem>)}
                                    >

                                    </FormField>
                                    <FormField
                                        control={form.control}
                                        name='otSallary'
                                        render={({ field }) => (<FormItem>
                                            <FormLabel>OT Sallary</FormLabel>
                                            <FormControl>
                                                <Input {...field}
                                                    placeholder='OT Sallary'
                                                    type='number'
                                                    disabled={isPending}
                                                    {...form.register('otSallary', { valueAsNumber: true })}
                                                >

                                                </Input>
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>)}
                                    >

                                    </FormField>
                                    <FormField
                                        control={form.control}
                                        name='sallary'
                                        render={({ field }) => (<FormItem>
                                            <FormLabel>Sallary</FormLabel>
                                            <FormControl>
                                                <Input {...field}
                                                    placeholder='Sallary'
                                                    type='number'
                                                    disabled={isPending}
                                                    {...form.register('sallary', { valueAsNumber: true })}
                                                >

                                                </Input>
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>)}
                                    >

                                    </FormField>
                                </div>
                                <FormError message={error} />
                            <FormSuccess message={success} />

                            <Button type='submit' className='w-full' disabled={isPending}
                            >
                                {/* {
                showTwoFactor ?"Confirm":"Login"
               } */}
                                Create Client
                            </Button>
                            </form>
                           
                        </Form>
                    </CardContent>


                </Card>
            </div>

        </div>
    )
}

export default CreateClient
