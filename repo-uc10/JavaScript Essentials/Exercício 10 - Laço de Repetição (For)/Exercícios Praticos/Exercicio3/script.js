// Exercício 3: Gerador de Padrão de Asteriscos
// Nível: Intermediário

// Descrição:
// Escreva uma função que receba um número n como entrada e imprima um padrão de asteriscos em forma de triângulo.
// O padrão deve ter n linhas, com a primeira linha contendo 1 asterisco e a última contendo n asteriscos.

// Dicas:
// - Use loops aninhados: um para as linhas e outro para os asteriscos em cada linha.
// - Use console.log() para imprimir cada linha.
// - Lembre-se de que cada linha deve ter um número de asteriscos igual ao número da linha.

// Solução:
function padraoAsteriscos(n) {
    if (n < 3){
        return `Seu é possivel fazer uma piramide com esse número! Por favor, insira outro asteristico`
    }
    for (let i = 1; i <= n; i++) {
        let linha = ''
        for (let a = 1; a <= i; a++) {
            linha += "*"
        }
        console.log(linha)
    }
}
console.log(padraoAsteriscos(5))