/*
Exercício 2: Sistema de Notas
Desenvolva um programa que receba a nota de um aluno (0-100) e retorne seu conceito seguindo a escala:
*/
const prompt = require("readline-sync")

let notaAluno = parseInt(prompt.question(`Digite a nota do aluno: `))

if(notaAluno >= 90){
    console.log(`Parabéns, você tirou A!`)
}else if(notaAluno >= 90){
    console.log(`Parabéns, você tirou B!`)
}else if(notaAluno >= 80){
    console.log(`Cocê tirou C.`)
}else if(notaAluno >= 70){
    console.log(`Você tirou D.`)
}else if(notaAluno >= 60){
    console.log(`Você tirou, E.`)
}else{
    console.log(`Você tirou F`)
}