import express from 'express';  // Importa o módulo Express
 
import { 
    addNewProduto,
     getallProduto, 
    deleteProduto,
     updateProduto,
     getProdutoById

} from '../controllers/produtoController.js'; // Importa o controlador de produtos          

import { validate } from '../middlware/validate.js'; // Importa o middleware de validação
import { createProdutoSchema } from '../schemas/produtosSchemas.js'; // Importa o esquema de validação de produtos  
const router = express()

router.get('/', getallProduto); // Define a rota GET para obter todos os produtos

router.post('/adicionar',validate(createProdutoSchema),addNewProduto) // Define a rota POST para adicionar um novo produto

router.delete('/:id', deleteProduto) // Define a rota DELETE para excluir um produto (a função deleteProduto deve ser implementada no controlador)

router.put('/:id',updateProduto) // Define a rota PUT para atualizar um produto (a função updateProduto deve ser implementada no controlador)

router.get('/:id',  getProdutoById) // Define a rota GET para obter um produto específico (a função getalluser deve ser implementada no controlador)

export default router; // Exporta o roteador para ser usado em outros arquivos

// import express from 'express';  // Importa o módulo Express