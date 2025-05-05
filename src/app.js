import express from 'express';  // Importa o módulo Express
import userRoutes from './routes/useroutes.js'; // Importa as rotas de usuários

const app = express();  // Cria uma nova instância do aplicativo Express

app.use(express.json()); // Middleware para analisar o corpo das requisições em JSON

app.use(express.urlencoded({ extended: true })); // Middleware para analisar o corpo das requisições em URL-encoded 

app.use("/usuarios", userRoutes); // Define a rota base para os usuários

export default app; // Exporta o aplicativo Express para ser usado em outros arquivos

