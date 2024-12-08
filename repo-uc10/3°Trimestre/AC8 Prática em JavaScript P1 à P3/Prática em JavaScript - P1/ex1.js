/*
Exercício 1: Classificador de Números
Crie um programa que receba um número do usuário e informe se ele é positivo, negativo ou zero. Use estruturas if, else if e else para fazer as verificações.
*/
const prompt = require("readline-sync")

let numUsuario = parseInt(prompt.question(`Digite um número: `))

if(numUsuario > 0){
    console.log(`Seu número é positivo!`)
} else if(numUsuario == 0){
    console.log(`Seu número é zero!`)
} else{
    console.log(`Seu número é negativo!`)
}