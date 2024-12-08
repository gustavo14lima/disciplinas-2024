/*
Exercício 10: Gerador de Tabuada
Desenvolva um programa que receba um número do usuário e mostre a tabuada desse número de 1 a 10. Use o loop for para gerar a tabuada.
*/

const prompt = require("readline-sync")

let numeroTabuada = parseInt(prompt.question(`Digite um númro e irei monstrar a tabuada de 1 até 10 deste número! ${'\n'}Insira o número aqui: `))

for (let numFixo = 1; numFixo < 11; numFixo++) {
    let multiplicacao = numFixo * numeroTabuada
    console.log(`${numeroTabuada} X ${numFixo} = ${multiplicacao12}`)
}