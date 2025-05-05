import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Importa o cliente Prisma para interagir com o banco de dados


                                      // Função para lidar com a rota GET de usuários
export const getalluser = async (req, res) => { // Função para lidar com a rota GET de usuários
    try {
        const users = await prisma.user.findMany(); // Busca todos os usuários no banco de dados
        res.status(200).json(users); // Envia a lista de usuários como resposta JSON com status 200
    } catch (error) {
        res.status(500).json({ // Se ocorrer um erro, envia uma resposta JSON com status 500
            mensagem: "Erro ao buscar usuários.", // Corrigida a mensagem de erro
            erro: error.message,
        });
    }
};
                                   //adicionar usuario
export const addNewUser = async (req, res) => { // Função para lidar com a rota POST de adicionar um novo usuário
    const { name, email } = req.body; // Extrai o nome e o email do corpo da requisição

    try {
        const novoUsuario = await prisma.user.create({ // Cria um novo objeto de usuário com os dados fornecidos
            data: {
                name,
                email,
            },
        });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao criar usuário.",
            erro: error.message,
        });
    }
};

                          //   atualizaçao do usuario
export const updateUser = async (req, res) => { // Função para lidar com a rota PUT de atualizar um usuário
    const id = req.params.id; // Extrai o ID do usuário a ser atualizado dos parâmetros da requisição
    const { name, email } = req.body; // Extrai o nome e o email do corpo da requisição

    try {
        const usuarioAtualizado = await prisma.user.update({ // Atualiza o usuário com base no ID fornecido na URL
            where: { id: Number(id) },
            data: {
                name,
                email,
            },
        });
        res.status(200).json(usuarioAtualizado); // Envia o usuário atualizado como resposta JSON com status 200
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao atualizar usuário.",
            erro: error.message,
        });
    }
};

                          // deletar usuario
export const deleteUser = async (req, res) => {
    try { // Função para lidar com a rota DELETE de excluir um usuário
const id = req.params.id; // Extrai o ID do usuário a ser excluído dos parâmetros da requisição

const user = await prisma.user.delete({ // Deleta o usuário com base no ID fornecido na URL
    
        where: { id: Number(id) }, // Aqui você pode usar req.params.id para obter o ID do usuário a ser excluído
    });
} catch (error) {
    res.status (400).json({ // Se ocorrer um erro, envia uma resposta JSON com status 500
        mensagem: "Erro ao excluir usuário.", // Corrigida a mensagem de erro
        erro: error.message,
    });
}
} 


export const getalluserId = async (req, res) => { // Função para lidar com a rota GET de obter um usuário específico
    const id = req.params.id; // Extrai o ID do usuário a ser obtido dos parâmetros da requisição

    try {
        const user = await prisma.user.findUnique({ // Busca um usuário específico no banco de dados com base no ID
            where: { id: Number(id) },
        });
        res.status(200).json(user); // Envia o usuário encontrado como resposta JSON com status 200
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar usuário.",
            erro: error.message,
        });
    }
}


//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣤⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀
//⠀⠀⠀⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠉⠀⠀
//⣤⣶⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀
//⢿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⡀⠀⠀
//⠘⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀
//⠀⣿⠁⢻⣿⣿⠇⠀⠀⠀⣴⣄⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠷
//⠀⢻⠀⢀⣿⣿⠀⠀⠀⠀⣿⣿⡄⢸⣿⣿⣿⣿⣿⣿⣿⣟⠉⠀⠀⠀⠀⠀
//⠀⠘⡆⠘⣿⡇⠀⠀⠀⠀⠘⠛⢃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀
//⠀⢀⣼⣶⣾⣧⣤⣤⣄⣀⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
//⠀⠀⠉⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠛⠛⠛⠛⠛⠿⠿⣧⠀
//⠀⠀⠀⠀⠀⠀⠈⠙⠛⠻⠛⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀