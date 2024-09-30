// Exercício 2: Soma de Números Pares
// Nível: Iniciante

// Descrição:
// Escreva uma função que receba um número n como entrada e retorne a soma de todos os números pares de 2 até n (inclusive).

// Dicas:
// - Use um loop for tradicional.
// - Verifique se cada número é par usando o operador módulo (%).
// - Acumule a soma em uma variável.

// Solução:

function somaNumpares(n) {
    let somaPar = 0

        for (let i = 2; i <= n; i++) {
            if (i % 2 == 0) {
                somaPar += i
            } 
        }
    return somaPar        
}

console.log(somaNumpares(10)) // Output: 30