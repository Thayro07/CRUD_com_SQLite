import express from 'express';  // Importa o módulo Express
import { addNewUser, getalluser, deleteUser, updateUser, getalluserId} from '../controllers/UserController.js'; // Importa o controlador de usuários

const router = express.Router();    // Cria um novo roteador Express

router.get('/', getalluser); // Define a rota GET para obter todos os usuários

router.post('/adicionar', addNewUser) // Define a rota POST para adicionar um novo usuário

router.delete('/:id', deleteUser) // Define a rota DELETE para excluir um usuário (a função deleteUser deve ser implementada no controlador)

router.put('/:id',updateUser) // Define a rota PUT para atualizar um usuário (a função updateUser deve ser implementada no controlador)

router.get('/:id',  getalluserId) // Define a rota GET para obter um usuário específico (a função getalluser deve ser implementada no controlador)

export default router; // Exporta o roteador para ser usado em outros arquivos
//