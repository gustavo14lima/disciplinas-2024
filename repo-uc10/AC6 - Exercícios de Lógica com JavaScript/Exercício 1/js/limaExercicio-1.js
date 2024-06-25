const frm = document.querySelector("form");
const remedio = document.querySelector("#outRemedio");
const quantidade = document.querySelector("#outQuantidade");
const valor = document.querySelector("#outValor");

frm.addEventListener("submit",(g) => {
    const resp_remedio = frm.inRemedio.value;
    remedio.innerText = `Seu Medicamente é: ${resp_remedio}`

    const resp_quantidade = parseFloat(frm.inQuantidade.value);
    quantidade.innerText = `Você escolheu: ${resp_quantidade}`

    const resp_valor = parseFloat(frm.inValor.value);
    const valor_final = Math.floor((resp_valor * resp_quantidade).toFixed(2))
    valor.innerText = `Você Irá Pagar: R$${valor_final} por ${resp_quantidade} unidades`
    g.preventDefault();
})
