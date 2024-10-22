/*
Exercício 3: Verificador de Idade para Votação
Crie um programa que receba a idade de uma pessoa e informe sua situação em relação ao voto:
- Menor que 16 anos: Não pode votar
- Entre 16 e 17 anos ou maior que 70: Voto opcional
- Entre 18 e 70 anos: Voto obrigatório
*/
let prompt = require("readline-sync")

let idadePessoa = parseInt(prompt.question(`Digite a sua idade: `))

if(idadePessoa < 16){
    console.log(`Você não pode votar!`)
} else if( idadePessoa == 16 || idadePessoa == 17 || idadePessoa > 70){
    console.log(`Seu voto é opcional! Vote se quiser`)
}else{
    console.log(`Seu voto é obrigatório!`)
}