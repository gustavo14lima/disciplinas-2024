/*
Exercício 28: Jogo de Adivinhação Aprimorado
Nível: Iniciante

Crie um jogo onde o computador escolhe um número aleatório e o jogador deve adivinhar.
O programa deve:
1. Gerar um número aleatório entre 1 e 100
2. Dar dicas se o palpite está alto ou baixo
3. Contar o número de tentativas
4. Limitar o número máximo de tentativas
*/

const prompt = require('readline-sync')

function jogarAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1
    const tentativasMaximas = 10
    let tentativas = 0

    console.log("Bem-vindo ao jogo de adivinhação!")
    console.log("Eu escolhi um número entre 1 e 100. Tente adivinhar!")

    while (tentativas < tentativasMaximas) {
        const palpite = parseInt(prompt.question(`Tentativa ${tentativas + 1}/${tentativasMaximas}: `))

    
        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("Por favor, insira um número válido entre 1 e 100.")
            continue
        }

        tentativas++

    
        if (palpite === numeroAleatorio) {
            console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`)
            return
        } else if (palpite < numeroAleatorio) {
            console.log("Seu palpite está baixo. Tente novamente.")
        } else {
            console.log("Seu palpite está alto. Tente novamente.")
        }
    }

    console.log(`Você esgotou suas tentativas! O número era ${numeroAleatorio}.`)
}

jogarAdivinhacao()
