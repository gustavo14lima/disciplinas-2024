/*
Exercício 20: Verificador de Palíndromo
Crie uma função que receba uma palavra ou frase e verifique se ela é um palíndromo (se pode ser lida da mesma forma de trás para frente, desconsiderando espaços e maiúsculas/minúsculas).
*/
const prompt = require('readline-sync');

let palavraInicial = prompt.question(`Escreva uma palavra para descobrir se ela é um palíndromo: `)

function descobrirPalindromo(palavraInicial) {
    let palavraInvertida = palavraInicial.split('').reverse().join('')
    if (palavraInicial == palavraInvertida) {
        console.log(`Sua Palavra é um Palíndromo!`)
    } else {
        console.log(`Sua Palavra não é um Palíndromo!`)
    }
}
console.log(descobrirPalindromo(palavraInicial))