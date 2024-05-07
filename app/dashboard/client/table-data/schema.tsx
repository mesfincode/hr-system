import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const clientSchema = z.object({
  //TODO: fix all the types and nullable
  id: z.number(),
  clientName: z.string().nullable(),

  otSallary: z.number().nullable(),
  sallary: z.number().nullable(),


});

export type Client = z.infer<typeof clientSchema>;
