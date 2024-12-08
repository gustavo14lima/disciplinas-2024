/*
Exercício 23: Calculadora de IMC com Recomendações
Nível: Iniciante/Intermediário

Desenvolva uma calculadora de IMC que além de mostrar o índice:
1. Receba peso e altura
2. Calcule o IMC
3. Classifique em categorias
4. Forneça uma recomendação personalizada para cada faixa
*/

const prompt = require('readline-sync')

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return { categoria: "Abaixo do peso", recomendacao: "É recomendável procurar um nutricionista para ajudar a ganhar peso de forma saudável." }
    } else if (imc >= 18.5 && imc < 24.9) {
        return { categoria: "Peso normal", recomendacao: "Mantenha uma dieta equilibrada e continue praticando atividades físicas regularmente." }
    } else if (imc >= 25 && imc < 29.9) {
        return { categoria: "Sobrepeso", recomendacao: "Procure adotar uma alimentação mais balanceada e aumentar a prática de exercícios físicos." }
    } else if (imc >= 30 && imc < 34.9) {
        return { categoria: "Obesidade Grau I", recomendacao: "É importante consultar um profissional de saúde para orientação sobre perda de peso saudável." }
    } else if (imc >= 35 && imc < 39.9) {
        return { categoria: "Obesidade Grau II", recomendacao: "Recomenda-se acompanhamento médico e nutricional para tratamento adequado." }
    } else {
        return { categoria: "Obesidade Grau III (Mórbida)", recomendacao: "É crucial procurar ajuda médica especializada para reduzir riscos à saúde." }
    }
}

const peso = parseFloat(prompt.question("Digite seu peso em kg: "))
const altura = parseFloat(prompt.question("Digite sua altura em metros: "))

const imc = calcularIMC(peso, altura)

const classificacao = classificarIMC(imc)

console.log(`Seu IMC é: ${imc.toFixed(2)}`)
console.log(`Classificação: ${classificacao.categoria}`)
console.log(`Recomendação: ${classificacao.recomendacao}`)
