import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllProdutos = async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar produtos", error });
  }
}

export const addNewProduto = async (req, res) => {  // Adiciona um novo produto
  const { name,description,price,stock,createdAt } = req.body;

  try {
    const novoProduto = await prisma.produto.create({
      data: {
        name,
        description,
        price,
        stock,
        createdAt
      },
    });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar produto", error });
  }
}

export const getProdutoById = async (req, res) => {  // Obtém um produto pelo ID
  const { id } = req.params;

  try {
    const produto = await prisma.produto.findUnique({
      where: { id: Number(id) },
    });

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar produto", error });
  }
}

export const updateProduto = async (req, res) => {  // Atualiza um produto
  const { id } = req.params;
  const { name,description,price,stock,createdAt } = req.body;

  try {
    const produto = await prisma.produto.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
        price,
        stock,
        createdAt
      },
    });

    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar produto", error });
  }
}

export const deleteProduto = async (req, res) => {  // Deleta um produto
  const { id } = req.params;

  try {
    await prisma.produto.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar produto", error });
  }
}   
