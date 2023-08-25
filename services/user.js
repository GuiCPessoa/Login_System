let users = [] 
// Por enquanto sem banco de dados mas é mais fácil implementar depoi, por enquanto esse array vai armazenar os usuários cadastrados

export function cadastro(body){
    const user =  users.find(({ email }) => email === body.email);
    if (user) throw new Error('Usuário já cadastrado') 

    // Verificando no array se aquela entrada do usuário já existe 

    user.push(body)
    return body
}

export function login(body){
    const user =  users.find(({ email }) => email === body.email);
    if (!user) throw new Error('Usuário não encontrado');
    if (user.password !== body.password) throw new Error('Senha incorreta')

    // Mesmo raciocinio do AuthenticatorAssertionResponse, verificando usuário e senha. A diferença é que ele verifica se a senha está correta, se não tiver ele retorna o erro "senha incorreta"

    return user
}