import * as z from "zod"
export const RegsiterValidator = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
    username: z.string().min(5,{
        message:"Username is required"
    }),
    password: z.string().min(1,{message:"Password is rquired"})
})