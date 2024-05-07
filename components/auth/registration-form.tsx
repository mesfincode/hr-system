"use client"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import CardWrapper from "./card-wrapper"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"
import { useState, useTransition } from "react"
import { RegsiterValidator } from "@/validators/validator"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import router from "next/router"
import Link from "next/link";
import { useRouter } from "next/navigation";


// import { register } from "@/actions/login"
// import { FormError } from "../form-error"
// import { FormSuccess } from "../form-success"
export function RegistrationForm()  {
    const router = useRouter();
    const [showTwoFactor , setShowTwoFactor] = useState(false);
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegsiterValidator>>({
        resolver: zodResolver(RegsiterValidator),
        defaultValues: {
            email: "",
            name: "",
            password: ""

        }
    })
    const onSubmit = (values: z.infer<typeof RegsiterValidator>) => {
        console.log(values)
        setError("");
        setSuccess("");
        startTransition(() => {
            registerUser(values);
        });

    }
    const registerUser = async (values:any) => {
        try {
          const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          console.log(response);
      
          if (response.ok) {
            // const data = await response.json();
            // console.log(data);
            // localStorage.setItem("data",JSON.stringify(data));
            // // data.header 
            // setSuccess(data.success)
            // router.push("/dashboard");
            // Handle success
        const data = await response.json();
        console.log(data , "reg");

        localStorage.setItem("data",JSON.stringify(data));
        // data.header 
        setSuccess(data.success)
        router.push("/dashboard");
          } else {
            // Handle error
            const errorData = await response.json();
            console.log(errorData.error);
            setError(errorData.error)

          }
        } catch (error) {
          // Handle network or other errors
          setError("Something gone wrong")
          console.error(error);
        }
      };
      
    return (
        <CardWrapper
            headerLabel="Create your account"
            backButtonLable="Have an acount"
            backButtonHref="/auth/login"
            showSocial
        >
             <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <div>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (<FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input {...field}
                                        //   disabled={isPending}
                                        placeholder='username'
                                        type='text'
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
                                        //   disabled={isPending}
                                        placeholder='john.doe@example.com'
                                        type='email'
                                    >

                                    </Input>
                                </FormControl>
                                <FormMessage />
                            </FormItem>)}
                        >

                        </FormField>
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (<FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field}
                                        placeholder='*****'
                                        type='password'
                                    //   disabled={isPending}

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
                    {/* <Link href='/auth/login'>
                    
                    </Link> */}
                    <Button type='submit' className='w-full'                       disabled={isPending}
>
               {
                showTwoFactor ?"Confirm":"Signup"
               }
           </Button>
                    
                   
                </form>
            </Form>

    </CardWrapper>
    )
  }

  
