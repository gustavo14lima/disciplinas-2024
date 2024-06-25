const frm = document.querySelector("form")
const nome = document.querySelector("#outNome")
const tempo = document.querySelector("#outTempo")

frm.addEventListener("submit",(e) => {
    const resp_nome = frm.inNome.value;
    nome.innerText = `Senhor(a) ${resp_nome}`

    const resp_tempo = frm.inTempo.value;
    const valor_tempo = Math.ceil(resp_tempo / 15)
    const valor_final = (valor_tempo * 20).toFixed(2)
    tempo.innerText = `Você usou ${resp_tempo}, por isso terá que pagar R$ ${valor_final}`
    e.preventDefault();
})