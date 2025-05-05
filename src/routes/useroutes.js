import express from 'express';  // Importa o módulo Express
import { addNewUser, getalluser, deleteUser, updateUser } from '../controllers/UserController.js'; // Importa o controlador de usuários

const router = express.Router();    // Cria um novo roteador Express

router.get('/', getalluser); // Define a rota GET para obter todos os usuários

router.post('/adicionar', addNewUser) // Define a rota POST para adicionar um novo usuário

router.delete('/:id', deleteUser) // Define a rota DELETE para excluir um usuário (a função deleteUser deve ser implementada no controlador)

router.put('/:id',updateUser)

export default router; // Exporta o roteador para ser usado em outros arquivos
//