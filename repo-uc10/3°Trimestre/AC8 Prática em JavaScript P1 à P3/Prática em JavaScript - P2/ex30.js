/*
Exercício 3: Sistema de Caixa de Restaurante
Nível: Intermediário

Crie um sistema de caixa para um restaurante que:
1. Permita adicionar itens ao pedido
2. Calcule o total
3. Aplique descontos baseados em condições
4. Permita diferentes formas de pagamento
5. Calcule o troco quando necessário
*/

const prompt = require('readline-sync')

function adicionarItem(pedido, nome, preco) {
    pedido.push({ nome, preco })
    console.log(`${nome} adicionado ao pedido por R$ ${preco.toFixed(2)}`)
}

function aplicarDesconto(total, condicao) {
    let desconto = 0

    if (condicao === '10%') {
        desconto = total * 0.10
        console.log(`Desconto de 10% aplicado: R$ ${desconto.toFixed(2)}`)
    } else if (condicao === '5%') {
        desconto = total * 0.05
        console.log(`Desconto de 5% aplicado: R$ ${desconto.toFixed(2)}`)
    }

    return total - desconto
}

function mostrarTotal(total) {
    console.log(`Total do pedido: R$ ${total.toFixed(2)}`)
}

function processarPagamento(total) {
    const formaPagamento = prompt.question("Escolha a forma de pagamento (dinheiro, cartão): ").toLowerCase()
    let pagamento

    if (formaPagamento === 'dinheiro') {
        pagamento = parseFloat(prompt.question("Digite o valor pago: R$ "))
        if (pagamento < total) {
            console.log("Valor pago é insuficiente.")
            return
        }
        const troco = pagamento - total
        console.log(`Troco a devolver: R$ ${troco.toFixed(2)}`)
    } else if (formaPagamento === 'cartão') {
        console.log("Pagamento realizado com cartão.")
    } else {
        console.log("Forma de pagamento inválida.")
        return
    }

    console.log("Pedido finalizado com sucesso!")
}

function main() {
    const pedido = []
    let total = 0

    console.log("=== Sistema de Caixa - Restaurante ===")

    let continuar = true

    while (continuar) {
        const nomeItem = prompt.question("Digite o nome do item a adicionar (ou 'sair' para finalizar): ")
        if (nomeItem.toLowerCase() === 'sair') {
            continuar = false
        } else {
            const precoItem = parseFloat(prompt.question("Digite o preço do item: R$ "))
            adicionarItem(pedido, nomeItem, precoItem)
            total += precoItem
        }
    }

    mostrarTotal(total)

    const condicaoDesconto = prompt.question("Deseja aplicar algum desconto? (10% ou 5%, ou 'não'): ").toLowerCase()
    if (condicaoDesconto !== 'não') {
        total = aplicarDesconto(total, condicaoDesconto)
    }

    mostrarTotal(total)
    processarPagamento(total)
}

main()
