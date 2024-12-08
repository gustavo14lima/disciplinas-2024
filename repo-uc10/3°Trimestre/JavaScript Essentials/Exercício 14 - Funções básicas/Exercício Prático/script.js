function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Não é possível realizar uma divisão por zero, por favor, escolha outro valor!";
    }
    return a / b;
}

function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case 'adição':
            return soma(num1, num2);
        case 'subtração':
            return subtracao(num1, num2);
        case 'multiplicação':
            return multiplicacao(num1, num2);
        case 'divisão':
            return divisao(num1, num2);
        default:
            return "Operação inválida!";
    }
}

// Testando cada parte da calculadora
console.log(calculadora(10, 5, 'adição'));        // Output: 15
console.log(calculadora(10, 5, 'subtração'));     // Output: 5
console.log(calculadora(10, 5, 'multiplicação')); // Output: 50
console.log(calculadora(10, 5, 'divisão'));       // Output: 2
console.log(calculadora(10, 0, 'divisão'));       // Output: Não é possível realizar uma divisão por zero, por favor, escolha outro valor!
console.log(calculadora(10, 5, 'modulo'));        // Output: Operação inválida!
