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
    firstName: z.string().min(2,{
        message:"First name is required"
    }),
    lastName: z.string().min(2,{
        message:"Last name is required."
    }),
    sex: z.string().min(2,{
        message:"Sex is required."
    }),
    bankAccount: z.string().min(2,{
        message:"Bank account is required."
    }),
    age: z.number().min(18,{message:"must provide age greater than 18"}),

    education: z.string().min(2,{
        message:"Education is required."
    }),
    // profileImage: z.string().min(2,{
    //     message:"Profile image is required."
    // }),
    email: z.string().email().optional().or(z.literal('')),
})

    