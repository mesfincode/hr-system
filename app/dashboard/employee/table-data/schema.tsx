import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const employeeSchema = z.object({
  //TODO: fix all the types and nullable
  id: z.number(),
  firstName: z.string().nullable(),
  lastName: z.string(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  sex: z.string().nullable(),
  age: z.number().nullable(),
  bankAccount: z.string().nullable(),
  education: z.string().nullable(),

});

export type Employee = z.infer<typeof employeeSchema>;
