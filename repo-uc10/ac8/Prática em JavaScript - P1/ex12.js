/*
Exercício 12: Calculadora de Fatorial
Desenvolva um programa que calcule o fatorial de um número fornecido pelo 
usuário. Por exemplo, o fatorial de 5 é: 5 x 4 x 3 x 2 x 1 = 120
*/

const prompt = require("readline-sync")

let numUsuario = prompt.questionInt(`Digite um número para você descobrir seu Fatorial: `)

let fatorial = 1

for (let i = 1; i <= numUsuario; i++) {
    fatorial *= i
}
console.log(`O fatorial de ${numUsuario} é ${fatorial}!`)