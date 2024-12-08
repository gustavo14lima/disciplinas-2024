/*
Exercício 29: Validador de Senha Forte
Nível: Iniciante/Intermediário

Desenvolva um programa que peça ao usuário para criar uma senha forte.
O programa deve:
1. Verificar se a senha tem pelo menos 8 caracteres
2. Conter letras maiúsculas e minúsculas
3. Conter números
4. Conter caracteres especiais
5. Continuar pedindo até que todos os critérios sejam atendidos
*/

const prompt = require('readline-sync')

function verificarSenhaForte(senha) {
    const tamanhoMinimo = 8
    const temMaiusculas = /[A-Z]/.test(senha)
    const temMinusculas = /[a-z]/.test(senha)
    const temNumeros = /\d/.test(senha)
    const temEspeciais = /[!@#$%^&*(),.?":{}|<>]/.test(senha)

    return (
        senha.length >= tamanhoMinimo &&
        temMaiusculas &&
        temMinusculas &&
        temNumeros &&
        temEspeciais
    )
}

function criarSenha() {
    let senha

    do {
        senha = prompt.question("Crie uma senha forte: ")

        if (!verificarSenhaForte(senha)) {
            console.log("A senha deve ter pelo menos 8 caracteres, " +
                        "conter letras maiúsculas e minúsculas, " +
                        "números e caracteres especiais.")
        }
    } while (!verificarSenhaForte(senha))

    console.log("Senha forte criada com sucesso!")
}

criarSenha()
