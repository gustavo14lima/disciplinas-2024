//Escreva um programa que verifica se um número é positivo, negativo ou zero.
if (num > 0) {
    console.log(`Seu número é positivo!`)
} else if(num == 0){
    console.log(`Seu número é zero!`)
} else{
    console.log(`Seu número é negativo!`)
}

// Crie uma função que recebe a idade de uma pessoa e retorna se ela pode votar (idade >= 16) ou não.
    function verificadorIdade(idade) {
        if(idade >= 16){
            return `Vocẽ tem idade para votar!`
        } else{
            return `Você não tem idade para votar!`
        }
    }

// Faça um programa que recebe três números e retorna o maior deles.
    if(num1 >= num2 && num1 >= num3){
        console.log(`O Primeiro número é o maior!`)
    } else if(num2 >= num1 && num2 >= num3){
        console.log(`O Segundo número é o Maior!`)
    } else{
        console.log(`O Terceiro Número é o Maior!`)
    }

// Escreva uma função que verifica se um ano é bissexto.
    function anoBissexto(ano) {
        if(ano % 4 == 0){
            console.log(`Esse ano é um Ano Bissexto!`)
        }else {
            console.log(`Seu ano não é Bissexto!`)
        }
    }

//Crie um programa que classifica um triângulo como equilátero, isósceles ou escaleno com base no comprimento de seus lados.
    let lado1 = 3
    let lado2 = 2
    let lado3 = 1
    if(lado1 == lado2 && lado1 == lado3 && lado3 == lado2){
        console.log(`Seu Triangulo é Equilátero!`)
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log(`Seu Triangulo é Isósceles!`)
    }else{
        console.log(`Seu Triangulo é Escaleno!`)
    }