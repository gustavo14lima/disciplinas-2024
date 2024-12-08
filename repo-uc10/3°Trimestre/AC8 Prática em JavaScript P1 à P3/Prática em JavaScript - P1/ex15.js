/*
Exercício 15: Localizador de Maior Valor
Crie um programa que encontre e mostre o maior valor em um array de números. 
Use um loop para comparar cada valor com uma variável que armazena o maior valor encontrado até o momento.
*/
let arrayNum = [34.67, 12.45, 87.23, 65.89, 1.76, 54.32, 23.67, 78.90, 42.11, 19.84,
    3.45, 98.12, 11.56, 76.43, 27.89, 88.01, 55.67, 30.21, 91.34, 4.78,
    66.11, 17.92, 82.54, 25.37, 73.28, 60.72, 8.99, 39.15, 49.04, 92.88,
    6.41, 14.76, 71.39, 20.84, 47.65, 29.73, 85.20, 10.52, 68.18, 37.90,
    24.05, 96.44, 83.76, 7.22, 53.89, 16.38, 34.56, 2.10, 61.95, 94.77
    ]
let numero = 0

for (let i = 0; i < arrayNum.length; i++) {

    if(numero <= arrayNum[i]){
        numero = arrayNum[i]
    }
}
console.log(numero)