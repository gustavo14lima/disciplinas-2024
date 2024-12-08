/*
Exercício 32: Analisador de Números Primos
Nível: Iniciante/Intermediário

Desenvolva um programa que:
1. Encontre todos os números primos em um intervalo
2. Mostre a decomposição em fatores primos de um número
3. Calcule quantos números primos existem até um determinado valor
*/

const prompt = require('readline-sync')

function isPrimo(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true
}

function encontrarPrimosNoIntervalo(inicio, fim) {
    const primos = []
    for (let i = inicio; i <= fim; i++) {
        if (isPrimo(i)) {
            primos.push(i)
        }
    }
    return primos
}

function decomporEmFatoresPrimos(num) {
    const fatores = []
    let divisor = 2

    while (num > 1) {
        while (num % divisor === 0) {
            fatores.push(divisor)
            num /= divisor
        }
        divisor++
    }
    
    return fatores
}

function contarPrimosAteValor(valor) {
    let contador = 0
    for (let i = 2; i <= valor; i++) {
        if (isPrimo(i)) {
            contador++
        }
    }
    return contador
}

function main() {
    const intervaloInicio = parseInt(prompt.question("Digite o início do intervalo: "))
    const intervaloFim = parseInt(prompt.question("Digite o fim do intervalo: "))
    
    const primosNoIntervalo = encontrarPrimosNoIntervalo(intervaloInicio, intervaloFim)
    console.log(`Números primos no intervalo [${intervaloInicio}, ${intervaloFim}]: ${primosNoIntervalo.join(', ')}`)
    
    const numeroParaDecompor = parseInt(prompt.question("Digite um número para decompor em fatores primos: "))
    const fatoresPrimos = decomporEmFatoresPrimos(numeroParaDecompor)
    console.log(`Decomposição em fatores primos de ${numeroParaDecompor}: ${fatoresPrimos.join(' x ')}`)
    
    const valorContarPrimos = parseInt(prompt.question("Digite um valor para contar quantos números primos existem até ele: "))
    const totalPrimos = contarPrimosAteValor(valorContarPrimos)
    console.log(`Total de números primos até ${valorContarPrimos}: ${totalPrimos}`)
}

main()