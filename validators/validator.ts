import * as z from "zod"
export const RegsiterValidator = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
    name: z.string().min(5,{
        message:"Username is required"
    }),
    password: z.string().min(1,{message:"Password is rquired"})
})

export const LoginValidator = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
    password: z.string().min(1,{message:"Password is rquired"})
})

export const EmployeeFormValidator = z.object({
    firstName: z.string().min(5,{
        message:"Username is required"
    }),
    lastName: z.string().min(5,{
        message:"Username is required"
    }),
    sex: z.string().min(5,{
        message:"Username is required"
    }),
    bankAccount: z.string().min(5,{
        message:"Username is required"
    }),
    age: z.string().min(5,{
        message:"Username is required"
    }),
    education: z.string().min(5,{
        message:"Username is required"
    }),
    profileImage: z.string().min(5,{
        message:"Username is required"
    }),
    email: z.string().email().optional(),

})

    