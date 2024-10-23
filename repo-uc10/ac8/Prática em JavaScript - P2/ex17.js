/*
Exercício 17: Gerenciador de Estoque
Crie um objeto produto com propriedades nome, preço e quantidade, e um método que calcule o valor total (preço * quantidade). O programa deve mostrar os dados do produto e o valor total do estoque.
*/

let produto = {'nome':'Dark Souls I',
    'preço':'199.90',
    'quantidade':'69'
}
let valorTotal = parseInt(produto.preço * produto.quantidade).toFixed(2)

console.log(produto.nome)
console.log(produto.preço)
console.log(produto.quantidade)
console.log(`Atualmente, no total, temos R$${valorTotal} de produtos`)