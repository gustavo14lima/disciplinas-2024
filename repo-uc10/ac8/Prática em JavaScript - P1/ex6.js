/*
Exercício 6: Classificador de Produtos
Crie um programa que classifique produtos com base em seus códigos:
1 - Alimento não perecível
2 - Alimento perecível
3 - Vestuário
4 - Limpeza
Qualquer outro código - Inválido
*/

let prompt = require("readline-sync")

let introducao = parseInt(prompt.question(`Selecione uma opção de acordo com seu Produto! ${'\n'} 1 - Alimento não perecível ${'\n'} 2 - Alimento perecível ${'\n'} 3 - Vestuário ${'\n'} 4 - Limpeza ${'\n'} Selecione uma opção: `))

switch (introducao) {
    case 1:
        console.log(`Seu Produto é do Tipo Alimento não perecível!`)
        break;
    case 2:
        console.log(`Seu Produto é do Tipo Alimento perecível!`)
        break;
    case 3:
        console.log(`Seu Produto é do Tipo Vestuário!`)
        break;
    case 4:
        console.log(`Seu Produto é do Tipo de Limpeza`)
        break;
    default:
        console.log(`Seu Produto é do Tipo é Inválido!`)
        break;
}