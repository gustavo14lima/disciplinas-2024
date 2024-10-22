/*
Exercício 9: Somador de Números
Crie um programa que peça números ao usuário e some todos eles. 
O programa deve parar de pedir números quando o usuário digitar 0, e então mostrar a soma total.
*/

const prompt = require("readline-sync")

let somaTotal = 0 
let numeros = [] 

while (true) {
    let numero = parseInt(prompt.question(`Digite um número para somar todos eles!${'\n'}(Alerta! O número 0 é para sair)${'\n'} Digite seu número:  `))

    if (numero == 0) {
        break 
    }

    numeros.push(numero) 
    somaTotal += numero 
}


console.log(`A soma total é: ${somaTotal}`)
