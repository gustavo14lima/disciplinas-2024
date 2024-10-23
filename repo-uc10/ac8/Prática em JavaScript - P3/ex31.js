/*
Exercício 31: Gerador de Sequência de Fibonacci
Nível: Iniciante

Crie um programa que gere a sequência de Fibonacci até um determinado termo n.
O programa deve:
1. Receber o número de termos desejado
2. Gerar e mostrar a sequência
3. Identificar números pares e ímpares na sequência
4. Calcular a soma dos números gerados
*/
const prompt = require('readline-sync')

function gerarFibonacci(n) {
    const fibonacci = []
    let soma = 0

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacci.push(0)
        } else if (i === 1) {
            fibonacci.push(1)
        } else {
            const proximo = fibonacci[i - 1] + fibonacci[i - 2]
            fibonacci.push(proximo)
        }
        soma += fibonacci[i]
    }

    return { fibonacci, soma }
}

function identificarParesImpares(fibonacci) {
    const pares = []
    const impares = []

    fibonacci.forEach(num => {
        if (num % 2 === 0) {
            pares.push(num)
        } else {
            impares.push(num)
        }
    })

    return { pares, impares }
}

function main() {
    const n = parseInt(prompt.question("Digite o número de termos desejado para a sequência de Fibonacci: "))

    if (isNaN(n) || n <= 0) {
        console.log("Por favor, insira um número inteiro positivo.")
        return
    }

    const { fibonacci, soma } = gerarFibonacci(n)
    const { pares, impares } = identificarParesImpares(fibonacci)

    console.log(`Sequência de Fibonacci: ${fibonacci.join(', ')}`)
    console.log(`Números pares: ${pares.join(', ')}`)
    console.log(`Números ímpares: ${impares.join(', ')}`)
    console.log(`Soma dos números gerados: ${soma}`)
}

main();
