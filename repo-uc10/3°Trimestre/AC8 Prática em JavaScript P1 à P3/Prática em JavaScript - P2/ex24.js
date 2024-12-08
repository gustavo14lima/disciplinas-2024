/*
Exercício 3: Aprovação de Empréstimo
Nível: Intermediário

Crie um sistema que avalie a elegibilidade para empréstimo baseado em múltiplos critérios:
1. Receba: salário, idade, tempo de emprego e valor do empréstimo desejado
2. Analise os critérios
3. Forneça o resultado com feedback específico
4. Calcule e mostre o valor máximo disponível quando aplicável
*/
const prompt = require('readline-sync')

function calcularValorMaximo(salario) {

    return salario * 0.3 * 12 * 5
}

function avaliarEmprestimo(salario, idade, tempoEmprego, valorDesejado) {
    let feedback = []


    if (idade < 18 || idade > 65) {
        feedback.push("Idade fora da faixa elegível (18-65 anos).")
    }


    if (tempoEmprego < 1) {
        feedback.push("Tempo de emprego insuficiente (mínimo de 1 ano exigido).")
    }


    const valorMaximo = calcularValorMaximo(salario)
    if (valorDesejado > valorMaximo) {
        feedback.push(`O valor desejado excede o valor máximo disponível baseado no seu salário. O máximo que você pode solicitar é: R$ ${valorMaximo.toFixed(2)}.`)
    }


    if (feedback.length === 0) {
        feedback.push("Parabéns, você é elegível para o empréstimo solicitado!")
    } else {
        feedback.push("Infelizmente, você não atende a todos os critérios para o empréstimo solicitado.")
    }

    return { feedback, valorMaximo }
}

const salario = parseFloat(prompt.question("Digite seu salário mensal: R$ "))
const idade = parseInt(prompt.question("Digite sua idade: "))
const tempoEmprego = parseFloat(prompt.question("Digite seu tempo de emprego em anos: "))
const valorDesejado = parseFloat(prompt.question("Digite o valor do empréstimo desejado: R$ "))

const resultado = avaliarEmprestimo(salario, idade, tempoEmprego, valorDesejado)

console.log("\nResultado da análise:")
resultado.feedback.forEach(mensagem => console.log(mensagem))

if (resultado.valorMaximo >= valorDesejado) {
    console.log(`\nVocê pode solicitar até R$ ${resultado.valorMaximo.toFixed(2)} com base no seu salário.`)
}
