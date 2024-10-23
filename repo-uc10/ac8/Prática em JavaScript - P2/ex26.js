/*
Exercício 26: Sistema de Notas Musicais
Nível: Iniciante/Intermediário

Desenvolva um programa que:
1. Receba uma nota musical (C, D, E, F, G, A, B)
2. Mostre a frequência fundamental da nota
3. Indique em qual oitava do piano ela se encontra
4. Mostre uma curiosidade sobre a nota
*/

const prompt = require('readline-sync')

const notasFrequencias = {
    "C": { frequencia: 261.63, curiosidade: "A nota C é chamada de 'dó' em muitas línguas, e é a primeira nota de uma escala maior." },
    "D": { frequencia: 293.66, curiosidade: "A nota D é frequentemente usada como tônica em escalas menores, especialmente em músicas medievais e renascentistas." },
    "E": { frequencia: 329.63, curiosidade: "A nota E é conhecida por ser o ponto final da harmonia em acordes maiores e menores." },
    "F": { frequencia: 349.23, curiosidade: "A nota F é a primeira nota da escala Lídia, que é uma das sete escalas principais da música ocidental." },
    "G": { frequencia: 392.00, curiosidade: "A nota G é muito comum em acordes de dominante, sendo conhecida por sua tensão e resolução." },
    "A": { frequencia: 440.00, curiosidade: "A nota A é a referência internacional para afinação (conhecida como 'Lá 440')." },
    "B": { frequencia: 493.88, curiosidade: "A nota B é considerada bastante instável e tende a querer se resolver em um C ou um G." }
}

function calcularFrequencia(nota, oitava) {
    const frequenciaBase = notasFrequencias[nota].frequencia
    const fator = Math.pow(2, oitava - 4)
    return frequenciaBase * fator
}

const nota = prompt.question("Digite uma nota musical (C, D, E, F, G, A, B): ").toUpperCase()

if (!notasFrequencias[nota]) {
    console.log("Nota inválida! Por favor, insira uma nota válida (C, D, E, F, G, A, B).")
} else {

    const oitava = parseInt(prompt.question("Digite a oitava (0 a 8): "))

    if (isNaN(oitava) || oitava < 0 || oitava > 8) {
        console.log("Oitava inválida! Por favor, insira um valor entre 0 e 8.")
    } else {
    
        const frequencia = calcularFrequencia(nota, oitava)

    
        console.log(`A nota ${nota} na oitava ${oitava} tem uma frequência de ${frequencia.toFixed(2)} Hz.`)
        console.log(`Curiosidade: ${notasFrequencias[nota].curiosidade}`)
    }
}
