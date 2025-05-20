import z from 'zod'; // Importando a biblioteca Zod para validação de esquemas

export const createProdutoSchema = z.object({ // Definindo o esquema de validação para criar um produto
  name: z.string().min(1, { message: "O nome do produto é obrigatório" }), // O nome do produto deve ser uma string não vazia
  description: z.string().optional(),// A descrição do produto é opcional
  price: z.number().positive({ message: "O preço deve ser um número positivo" }), // O preço deve ser um número positivo
  stock: z.number().int().nonnegative({ message: "O estoque deve ser um número inteiro não negativo" }), // O estoque deve ser um número inteiro não negativo
  createdAt: z.date(), // A data de criação deve ser uma data válida
}); 