import { cadastro } from "../../../services/user";

export default function handler(req, res){
    try{
        const newUser = cadastro(req.body)
        res.status(201).json(newUser)
    } catch (err){
        res.status(400).json(err.message)
    }
}

// Req - são os parametros de requisição
// Res - são os parametros de resposta 
// Next usa um pouco de Express 

// O try envolve o novo usuário criado usando a função 'cadastro' e em seguida o status 201 (created) indicando sucesso e a resposta é enviada no formato JSON

// O catch sendo executado é configurado a resposta para um status 400 (bad request)