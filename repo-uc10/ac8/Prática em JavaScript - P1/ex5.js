/*
Exercício 5: Conversor de Meses
Desenvolva um programa que receba um número de 1 a 12 e retorne o nome do mês correspondente. Caso seja digitado um número fora desse intervalo, mostre a mensagem "Mês inválido".
*/
let prompt = require("readline-sync")

let numMes = parseInt(prompt.question(`Digite um número que irei retornar o mês correspondente ao seu número: `))

function conversorMeses(numMes) {
    switch (numMes) {
        case 1:
            console.log(`Janeiro`)
            break;
        case 2:
            console.log(`Fevereiro`)
            break;
        case 3:
            console.log(`Março`)
            break;
        case 4:
            console.log(`Abril`)
            break;
        case 5:
            console.log(`Maio`)
            break;
        case 6:
            console.log(`Junho`)
            break;
        case 7:
            console.log(`Julho`)
            break;
        case 8:
            console.log(`Agosto`)
            break;
        case 9:
            console.log(`Setembro`)
            break;
        case 10:
            console.log(`Outubro`)
            break;
        case 11:
            console.log(`Novembro`)
            break;
        case 12:
            console.log(`Dezembro`)
            break;
        default:
            console.log(`Mês Inválido`)
            break;
    }
}

console.log(conversorMeses(numMes))