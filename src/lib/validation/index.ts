import * as z from "zod"


export const SignupValidation = z.object({
    name: z.string().min(2,{message: " Name is too short"}),
    username: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6,{message:"password must be greater than 6 charecteristecs"})

  })