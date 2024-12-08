/*
Exercício 27: Simulador de Caixa Eletrônico
Nível: Intermediário

Crie um simulador de caixa eletrônico que:
1. Mostre um menu de operações (saque, depósito, saldo, pagamentos)
2. Processe a operação escolhida
3. Valide valores e limites
4. Forneça feedback apropriado
*/
const prompt = require('readline-sync')

let saldo = 1000.00 

function mostrarMenu() {
    console.log("\n=== Menu de Operações ===")
    console.log("1. Saque")
    console.log("2. Depósito")
    console.log("3. Saldo")
    console.log("4. Pagamentos")
    console.log("5. Sair")
}

function realizarSaque() {
    const valor = parseFloat(prompt.question("Digite o valor do saque: R$ "))
    if (isNaN(valor) || valor <= 0) {
        console.log("Valor inválido!")
    } else if (valor > saldo) {
        console.log("Saldo insuficiente para realizar o saque.")
    } else {
        saldo -= valor
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`)
        console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`)
    }
}

function realizarDeposito() {
    const valor = parseFloat(prompt.question("Digite o valor do depósito: R$ "))
    if (isNaN(valor) || valor <= 0) {
        console.log("Valor inválido!")
    } else {
        saldo += valor
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`)
        console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`)
    }
}

function verificarSaldo() {
    console.log(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`)
}

function realizarPagamento() {
    const valor = parseFloat(prompt.question("Digite o valor do pagamento: R$ "))
    if (isNaN(valor) || valor <= 0) {
        console.log("Valor inválido!")
    } else if (valor > saldo) {
        console.log("Saldo insuficiente para realizar o pagamento.")
    } else {
        saldo -= valor
        console.log(`Pagamento de R$ ${valor.toFixed(2)} realizado com sucesso!`)
        console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`)
    }
}

function caixaEletronico() {
    let operacao = 0
    
    while (operacao !== 5) {
        mostrarMenu()
        operacao = parseInt(prompt.question("\nEscolha uma operação (1-5): "))
        
        switch (operacao) {
            case 1:
                realizarSaque()
                break
            case 2:
                realizarDeposito()
                break
            case 3:
                verificarSaldo()
                break
            case 4:
                realizarPagamento()
                break
            case 5:
                console.log("Obrigado por usar o caixa eletrônico!")
                break
            default:
                console.log("Operação inválida! Tente novamente.")
        }
    }
}

caixaEletronico()