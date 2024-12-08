const frm = document.querySelector("form")
const produto = document.querySelector("#outProduto")
const quantidade = document.querySelector("#outQuantidade")
const preco = document.querySelector("#outPreco")

frm.addEventListener("submit",(e) => {
    const resp1 = frm.inProduto.value;
    produto.innerText = `O Produto é ${resp1}`

    const resp2 = frm.inQuantidade.value;
    quantidade.innerText = `Você escolheu ${resp2} produto(s)`

    const resp3 = frm.inPreco.value;
    const preco_promocao = (resp3 * (50/100))
    const preco_final = (preco_promocao + (2 * resp3)).toFixed(2)
    preco.innerText = `O Valor do Produto com a promoção ficou de R$${preco_final}`

    e.preventDefault();
})
