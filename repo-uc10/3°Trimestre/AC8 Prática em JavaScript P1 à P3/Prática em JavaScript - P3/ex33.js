/*
Exercício 33: Matriz de Multiplicação Interativa
Nível: Intermediário

Crie um programa que:
1. Gere uma tabela de multiplicação customizada
2. Permita definir intervalo inicial e final
3. Destaque os quadrados perfeitos
4. Calcule estatísticas sobre os resultados
*/

const prompt = require('readline-sync')

function isQuadradoPerfeito(num) {
    const raiz = Math.sqrt(num)
    return raiz * raiz === num
}

function gerarTabelaMultiplicacao(inicio, fim) {
    const tabela = []

    for (let i = inicio; i <= fim; i++) {
        const linha = []
        for (let j = inicio; j <= fim; j++) {
            const produto = i * j
            linha.push(produto)
        }
        tabela.push(linha)
    }
    return tabela
}

function calcularEstatisticas(tabela) {
    const resultados = tabela.flat()
    const soma = resultados.reduce((acc, val) => acc + val, 0)
    const media = soma / resultados.length
    const maximo = Math.max(...resultados)
    const minimo = Math.min(...resultados)
    
    return { soma, media, maximo, minimo }
}

function main() {
    const intervaloInicio = parseInt(prompt.question("Digite o intervalo inicial: "))
    const intervaloFim = parseInt(prompt.question("Digite o intervalo final: "))
    
    console.log("\nTabela de Multiplicação:\n")
    const tabela = gerarTabelaMultiplicacao(intervaloInicio, intervaloFim)
    

    for (let i = 0; i < tabela.length; i++) {
        let linha = ""
        for (let j = 0; j < tabela[i].length; j++) {
            const produto = tabela[i][j]
            if (isQuadradoPerfeito(produto)) {
                linha += `*${produto}* `
            } else {
                linha += `${produto} `
            }
        }
        console.log(linha)
    }


    const estatisticas = calcularEstatisticas(tabela)
    console.log(`\nEstatísticas da Tabela de Multiplicação:`)
    console.log(`Soma: ${estatisticas.soma}`)
    console.log(`Média: ${estatisticas.media.toFixed(2)}`)
    console.log(`Máximo: ${estatisticas.maximo}`)
    console.log(`Mínimo: ${estatisticas.minimo}`)
}

main()