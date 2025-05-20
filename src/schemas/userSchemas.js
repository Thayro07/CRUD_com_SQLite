import e from "express";
import { z } from "zod";

export const createUserSchema = z.object({

    name: z.string().min(3, "o nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("email invalido"),
    password: z.string().min(6).regex(/[A-Z]/, "a senha deve ter pelo menos uma letra maiuscula"),

})
