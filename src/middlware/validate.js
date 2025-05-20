
//requisiçao => middleware =>rotas => controller => service => repository => banco de dad

function middleware (req,res,next){

//fazer algo com a requisição
//validar as informaçoes do usuario
//verificar se o urs tem conta
//modificar resposas 
//dar resposta para o usuario
//chamar o next para passar para o proximo middleware ou rota
}

import { Schema } from "zod";

export function validate (Schema){

return (req, res, next) => {

try{



//validar o corpo da requisição contra
//schema fornecido
Schema.parse(req.body); // Valida o corpo da requisição com o esquema Zod


const validatedData = Schema.parse(req.body); // Valida o corpo da requisição com o esquema Zod


req.body = validatedData; // Substitui o corpo da requisição pelo dado validado


next();

}catch (error) {
    return res.status(400).json({
        message: "Invalid data",
        error: error.errors.map(e =>({
            path: e.path.join('.'),
            message: e.message


        }))
    });
}}
}