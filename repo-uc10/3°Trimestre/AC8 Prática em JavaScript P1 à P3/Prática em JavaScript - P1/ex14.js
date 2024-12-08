/*
Exercício 14: Calculadora de Média
Desenvolva um programa que contenha um array com 5 notas. O programa deve calcular e mostrar a média das notas utilizando um loop para somar todos os valores.
*/
let arrayNotas = [0,8,4,6,10]
let contador = 0

for (let i = 0; i < arrayNotas.length; i++) {
    contador += arrayNotas[i]
}
console.log(contador/arrayNotas.length)