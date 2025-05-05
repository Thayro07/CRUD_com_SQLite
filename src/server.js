import app from './app.js'; // Importa o aplicativo Express do arquivo app.js 

const PORT = 3001;  // Define a porta em que o servidor irá escutar

app.listen(PORT, () => {        // Inicia o servidor na porta definida
  
 console.log(`SERVIDOR INICIANDO EM: http://localhost:${PORT}`); // Exibe uma mensagem no console indicando que o servidor está em execução
})

