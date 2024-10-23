/*
Exercício 22: Verificador de Maioridade Internacional
Nível: Iniciante

Crie um programa que determine se uma pessoa pode beber álcool em diferentes países.
O programa deve:
1. Receber a idade da pessoa
2. Verificar e informar se ela pode beber nos seguintes lugares:
   - Brasil e EUA (21 anos)
   - Japão e Indonésia (20 anos)
   - Portugal e Alemanha (16 anos)
*/

const prompt = require('readline-sync')

let idade = prompt.questionInt(`Por favor, insira sua idade: `)

if (idade >= 21) {
    console.log(`Você pode beber no Brasil, EUA, Japão, Indonésia, Portugal e Alemanha`)
} else if(idade >= 20){
    console.log(`Você pode beber no Japão, Indonésia, Portugal e Alemanha`)
} else if(idade >= 16){
    console.log(`Você pode beber em Portugal e Alemanha`)
} else{
    console.log(`Você ainda não pode beber!`)
}