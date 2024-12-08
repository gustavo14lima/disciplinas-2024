/*
Exercício 21: Conversor de Temperaturas
Desenvolva uma função que converta temperaturas entre Celsius e Fahrenheit.
A função deve receber um valor numérico, a unidade de origem ("C" ou "F") e a unidade de destino, retornando o valor convertido.
*/

const prompt = require('readline-sync')

function converterTemperatura(valor, unidadeOrigem, unidadeDestino) {

    if (unidadeOrigem == "C" && unidadeDestino == "F") {
        return (valor * 9/5) + 32
    }

    else if (unidadeOrigem == "F" && unidadeDestino == "C") {
        return (valor - 32) * 5/9
    }

    else if (unidadeOrigem == unidadeDestino) {
        return valor
    }

    else {
        return "Unidade inválida!"
    }
}

const valor = parseFloat(prompt.question("Digite o valor da temperatura: "))
const unidadeOrigem = prompt.question("Digite a unidade de origem (C/F): ").toUpperCase()
const unidadeDestino = prompt.question("Digite a unidade de destino (C/F): ").toUpperCase()

const resultado = converterTemperatura(valor, unidadeOrigem, unidadeDestino)
console.log(`A temperatura convertida é: ${resultado}`)
