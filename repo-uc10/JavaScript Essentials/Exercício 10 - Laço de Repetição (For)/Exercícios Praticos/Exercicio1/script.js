// Exercício 1: Contador de Vogais
// Nível: Iniciante

// Descrição:
// Escreva uma função que receba uma string como entrada e retorne o número de vogais na string.
// Considere as vogais como 'a', 'e', 'i', 'o', 'u' (maiúsculas ou minúsculas).

// Dicas:
// - Use um loop for...of para iterar sobre cada caractere da string.
// - Converta cada caractere para minúsculo antes de verificar se é uma vogal.
// - Use um conjunto (Set) para armazenar as vogais e facilitar a verificação.

// Solução:

function retorneVocais() {
    let stringPrincipal = `Dark Souls`
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let contagem = 0

    for(let caracterVogal of stringPrincipal.toLocaleLowerCase()){
        // Se as vogais determinadas no array acima estiver inclusa na minha string (que está sendo itarada como caracterVogal), adicione mais um na contagem
        if(vogais.includes(caracterVogal)){
            contagem++
        }
    }
    return contagem
}
console.log(retorneVocais(`Dark Souls`))
