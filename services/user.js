import jwt from "jsonwebtoken" 


let users = []
// Por enquanto sem banco de dados mas é mais fácil implementar depois, por enquanto esse array vai armazenar os usuários cadastrados


const SECRET = process.env.JWT_SECRET

function createToken(user){
    return jwt.sign({ email: user.email, name: user.name}, SECRET)
} // Função que cria o TOKEN tem o usuário como argumento, são passados como parametros o email e nome mas se quisesse poderia ser adicionado mais parametros

function readToken(token){
    try{
        return jwt.verify(token, SECRET)
    } catch (err) {
        throw new Error('Token invalido')
    }
}

// verify - verifica se o TOKEN é valido e se o TOKEN foi criando usando a chave secreta. Se o token for criado em outro lugar que não sabe a chave secreta o try será false e o site não vai deixar o usuário passar para proxima 


// Função especifica para verificar se o token é válido, se for invalido não irá conseguir entrar na página

export function verifica(token){
    return readToken(token)
}

export function cadastro(body){
    const user =  users.find(({ email }) => email === body.email);
    if (user) throw new Error('Usuário já cadastrado') 

    // Verificando no array se aquela entrada do usuário já existe 

    users.push(body)
    
    const token = createToken(body)
    return token

    // Em vez de retornar o usuário vai retornar o token criado
}

export function login(body){
    const user =  users.find(({ email }) => email === body.email);
    if (!user) throw new Error('Usuário não encontrado');
    if (user.password !== body.password) throw new Error('Senha incorreta')

    const token = createToken(user)
    return token

    // Mesmo raciocinio do AuthenticatorAssertionResponse, verificando usuário e senha. A diferença é que ele verifica se a senha está correta, se não tiver ele retorna o erro "senha incorreta"
    
}