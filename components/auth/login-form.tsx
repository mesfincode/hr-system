"use client"
import CardWrapper from './card-wrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
// import { login } from '@/actions/login';
import { useState, useTransition } from 'react';
import { redirect, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { LoginValidator } from '@/validators/validator';
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();

  const searchParams = useSearchParams() ;
  const urlErr = searchParams!.get("error") =="OAuthAccountNotLinked" ?"Email already in use by a different provider":"";

  const [showTwoFactor , setShowTwoFactor] = useState(false);
  const [error , setError]= useState<string | undefined>();
  const [success,setSuccess]= useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

   const form = useForm<z.infer<typeof LoginValidator>>({
    resolver:zodResolver(LoginValidator),
    defaultValues:{
      email: "",
      password:"",
    //   code:""
    }
   })
   const onSubmit = (values: z.infer<typeof LoginValidator>)=>{
    console.log(values)
    setError("");
    setSuccess("");
    startTransition(()=>{
        registerUser(values);
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
   const registerUser = async (values:any) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      console.log(response);
  
      if (response.ok) {
        // Handle success
        const data = await response.json();
        console.log(data);
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
      setError("Something went wrong")
      console.error(error);
    }
  };
  return (
    <CardWrapper
    headerLabel="Welcome Back"
    backButtonLable= "Don't have an account?"
    backButtonHref= "/auth/register"
    showSocial
    >
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
                  <FormField 
                 control={form.control} 
                 name='email'
                 render={({field})=>(<FormItem>
                   <FormLabel>Email</FormLabel>
                   <FormControl>
                     <Input {...field}
                     disabled={isPending}
                     placeholder='john.doe@example.com'
                     type='email'
                     >
                     
                     </Input>
                   </FormControl>
                   <FormMessage/>
                 </FormItem>)}
                 >

                 </FormField>

                 <FormField 
                 control={form.control} 
                 name='password'
                 render={({field})=>(<FormItem>
                   <FormLabel>Password</FormLabel>
                   <FormControl>
                     <Input {...field}
                     placeholder='*****'
                     type='password'
                     disabled={isPending}

                     >
                     
                     </Input>
                   </FormControl>
                   <Button
                   size="sm"
                   variant="link"
                   asChild
                   className='px-0 font-normal'

                   >
                     <Link href="/auth/reset">
                       Forgot Password?
                     </Link>
                   </Button>
                   <FormMessage/>
                 </FormItem>)}
                 >

                 </FormField>
                 {/* </>)
                 } */}
           </div>
           <FormError message={error || urlErr}/>
           <FormSuccess message={success}/>

           <Button type='submit' className='w-full'                       disabled={isPending}
>
               {
                showTwoFactor ?"Confirm":"Login"
               }
           </Button>

        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm
