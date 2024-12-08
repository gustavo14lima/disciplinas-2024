// Exercício 4: Encontrar Números Primos
// Nível: Intermediário

// Descrição:
// Escreva uma função que receba um número n como entrada e retorne um array contendo todos os números primos até n (inclusive).
// Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

// Dicas:
// - Use um loop for para verificar cada número de 2 até n.
// - Crie uma função auxiliar para verificar se um número é primo.
// - Use um array para armazenar os números primos encontrados.

// Solução:
function verificadorPrimo(num) {
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false
        } else{
            return true
        }
    }
}
function numerosPrimos(n){
    let arrayPrimos = []
    for (let i = 2; i <= n; i++) {
        if(verificadorPrimo(i)){
            arrayPrimos.push(i)
        }
    }
    return arrayPrimos
}
console.log(numerosPrimos(10))