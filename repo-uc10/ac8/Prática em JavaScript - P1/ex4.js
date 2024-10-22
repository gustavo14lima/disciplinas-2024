/*
Exercício 4: Calculadora Básica
Crie uma calculadora que receba a operação desejada (+, -, *, /) e dois números.
O programa deve realizar a operação escolhida e mostrar o resultado.
Utilize switch case para implementar as diferentes operações.
*/
let prompt = require("readline-sync")

let num1 = parseInt(prompt.question(`Digite seu primeiro número: `))
let num2 = parseInt(prompt.question(`Digite seu segundo número: `))
let operacao = parseInt(prompt.question(`Escolha a operação: ${'\n'}1. Soma${'\n'}2. Subtração${'\n'}3. Multiplicação${'\n'}4. Divisão${'\n'}Digite sua operação:  `))

function soma(num1, num2) {
    return num1 + num2
}

function subtracao(num1, num2) {
    return num1 - num2
}

function multiplicacao(num1, num2) {
    return num1 * num2
}

function divisao(num1, num2) {
    return num1 / num2
}

function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case 1:
            return soma(num1, num2)
        case 2:
            return subtracao(num1, num2)
        case 3:
            return multiplicacao(num1, num2)
        case 4:
            return divisao(num1, num2)
        default:
            console.log(`Por favor insira uma opção válida!`)
            return
    }
}

let resultado = calculadora(num1, num2, operacao)
console.log(`O resultado da operação é: ${resultado}`)