// Contagem Regressiva Crie um programa que faça uma contagem regressiva de 10 até 1 usando um loop while.
    let contagemInicial = 10
    while (contagemInicial >= 1) {
        console.log(contagemInicial)
        contagemInicial --
    }

// Soma de Números Escreva um programa que some todos os números de 1 a 100 usando um loop while.
    let numeroIncial = 1
    let somaNumeros = 0

    while(numeroIncial <= 100){
        somaNumeros += numeroIncial
        numeroIncial ++
    }
    console.log(somaNumeros) // Outpu: 5050

// Tabuada Crie um programa que imprima a tabuada de um número fornecido pelo usuário.
    let numeroTabuada = 8 // Número da escolha do usuário
    let resultadoTabuada = 1

    while(resultadoTabuada <= 10){
        console.log(resultadoTabuada * numeroTabuada) // Output: número da tabuada do usuário até 10
        resultadoTabuada ++
    }