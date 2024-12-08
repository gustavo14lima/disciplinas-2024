/*
Exercício 8: Jogo de Adivinhação
Desenvolva um jogo onde o computador escolhe um número fixo (por exemplo, 7) e o usuário deve adivinhar qual é este número. O programa deve continuar pedindo palpites até que o usuário acerte.
*/

let prompt = require("readline-sync")

let numSecreto = 69

let palpite = parseInt(prompt.question(`Esse é um jogo de adivinhação! Você deve adivinhar o número aleatório entre 0 e 100! Mas claro com palpites! Boa sorte! ${'\n'}Insira o seu primeiro número: `))

while (palpite !== numSecreto) {
    if (palpite < 20) {
        console.log(`Seu palpite está longe...`)
    } else if (palpite == numSecreto - 10) {
        console.log(`Você está perto!`)
    } else if (palpite == numSecreto - 5) {
        console.log(`Seu número está muito perto!`)
    }
    palpite = parseInt(prompt.question(`Você errou... ${'\n'} Tente novamente: `))
}

console.log(`Parabéns! Você acertou o número secreto!`)
