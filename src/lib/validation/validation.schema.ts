import { z as zod } from "zod";

export const userSchemaUpdate = {
  body: zod.object({
    name: zod.string().min(1),
    email: zod.string().email(),
    password: zod.string().min(6),
    referredBy: zod.string().optional(),
    referralCode: zod.string().optional(),
    role: zod.enum(["USER", "PROMOTOR"]).optional().default("USER"),
  }),
  params: zod.object({
    usersId: zod.string(),
  }),
};

export const userSchemaRegister = {
  body: zod.object({
    name: zod.string().min(1),
    email: zod.string().email(),
    password: zod.string().min(6),
    referredBy: zod.string().optional(),
    referralCode: zod.string().optional(),
    role: zod.enum(["USER", "PROMOTOR"]).optional().default("USER"),
  })
};