// Implemente uma calculadora simples que realiza operações básicas (+, -, *, /) entre dois números.
function calculadora(num1,num2,operacao) {
    let soma = num1 + num2
    let subtracao = num1 - num2
    let multiplicacao = num1 * num2
    let divisao = num1 / num2

        switch (operacao) {
            case "+":
                return soma
                break;
            case "-":
                return subtracao
                break
            case "x":
                return multiplicacao
                break
            case "/":
                return divisao
                break
            default:
                return `Operação inválida!`
                break;
        }
    }

//Escreva um programa que converte uma nota numérica para uma letra (A, B, C, D, F) seguindo uma escala predefinida.
    function convertorNota(nota) {
        if(nota >= 9 && nota <= 10){
            return `Sua Nota é A`
        } else if(nota >= 8 && nota < 9){
            return `Sua nota é B`
        } else if(nota >= 7 && nota < 8){
            return `Sua nota é C`
        } else if(nota >= 6 && nota < 7){
            return `Sua nota é D`
        } else if(nota >= 0 && nota <6){
            return `Sua nota é F`
        }
    }

// Crie uma função que verifica se uma string é um palíndromo
    function verificadorPalindromo(string) {
        let stringNormal = string.toLowerCase()
        let stringInvertida = stringNormal.split('').reverse().join('')
        // split transforma a string em um array de caracteres e o join junta esse array de volta para uma string

        if(stringNormal == stringInvertida){
            return `Sua String é um Palíndromo!`
        }else {
            return `Sua String não é um Palíndromo!`
        }
    } 

// Implemente um validador de senhas que verifica se uma senha atende a critérios específicos.
function validadorSenha(senha) {
    const minimoCaracteres = 8
    const caracteresMaiusculos = /[A-Z]/
    const caracteresMinusculos = /[a-z]/
    const caracteresEspeciais = /[@#$%&*]/

    if(senha.length < minimoCaracteres){
        return `Sua senha deve ter pelo menos 8 caracteres!`
    }
    if(!caracteresMaiusculos.test(senha)){
        return `Sua senha precisa de pelo menos 1 caracter em maiusculo`
    }
    if(!caracteresMinusculos.test(senha)){
        return `Sua senha precisa de pelo menos 1 caracter em minusculo`
    }
    if( !caracteresEspeciais.test(senha)){
        return `Sua senha precisa de pelo menos 1 caracter especial`
    }
    
    // O uso do .test(senha) tem como objetivo verficar se a senha contém os padrões que foram impostos, por exemplo, letra maiúscula, letra minúscula ou caractere especial

        return `Sua senha é valida!`
}
console.log(validadorSenha("senhasenha"))

//Desenvolva um programa que determina o dia da semana com base em um número de 1 a 7.
    function diasSemanas(num) {
        switch (num) {
            case 1:
                return `Esse valor é para o Domingo!`
                break;
            case 2:
                return `Esse valor é para a Segunda-Feira!`
                break;
            case 3:
                return `Esse valor é para a Terça-Feira!`
                break;
            case 4:
                return `Esse valor é para a Qaurta-Feira !`
                break;
            case 5:
                return `Esse valor é para a Quinta-Feira!`
                break;
            case 6:
                return `Esse valor é para a Sexta-Feira!`
                break;                
            case 7:
                return `Esse valor é para o Sábado!`
                break;  
            default:
                return `Por favor, insira um valor de 1 até 7!`
                break;
        }
    }