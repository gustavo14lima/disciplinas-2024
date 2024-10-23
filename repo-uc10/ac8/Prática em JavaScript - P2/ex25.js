/*
Exercício 25: Conversor de Unidades
Nível: Iniciante

Crie um conversor de unidades que:
1. Receba um valor numérico
2. Receba a unidade de origem (kg, g, mg)
3. Receba a unidade de destino
4. Retorne o valor convertido
*/
const prompt = require('readline-sync')

function converterUnidades(valor, unidadeOrigem, unidadeDestino) {
    
    let valorEmGramas

    if (unidadeOrigem === 'kg') {
        valorEmGramas = valor * 1000  
    } else if (unidadeOrigem === 'g') {
        valorEmGramas = valor  
    } else if (unidadeOrigem === 'mg') {
        valorEmGramas = valor / 1000  
    } else {
        return "Unidade de origem inválida!"
    }

    
    let valorConvertido

    if (unidadeDestino === 'kg') {
        valorConvertido = valorEmGramas / 1000  
    } else if (unidadeDestino === 'g') {
        valorConvertido = valorEmGramas  
    } else if (unidadeDestino === 'mg') {
        valorConvertido = valorEmGramas * 1000  
    } else {
        return "Unidade de destino inválida!"
    }

    return valorConvertido
}


const valor = parseFloat(prompt.question("Digite o valor a ser convertido: "))
const unidadeOrigem = prompt.question("Digite a unidade de origem (kg, g, mg): ").toLowerCase()
const unidadeDestino = prompt.question("Digite a unidade de destino (kg, g, mg): ").toLowerCase()


const resultado = converterUnidades(valor, unidadeOrigem, unidadeDestino)
console.log(`Resultado da conversão: ${resultado}`)

