/*
Exercício 13: Lista de Compras
Crie um programa que contenha um array com uma lista de compras. 
O programa deve percorrer o array e mostrar cada item precedido pela mensagem "Preciso comprar: ".
*/

let lista = ['abacaxi','pão','itubaina','peito de frango']

for (let i = 0; i < lista.length; i++) {
    console.log(`Preciso comprar ${lista[i]}`)
}