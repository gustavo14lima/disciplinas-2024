// No document (document é o próprio elemento HTML), vamos alterar o estilo do body, alterando o seu background-color

function trocarCorvermelho() {
    document.body.style.backgroundColor="red"
}
function trocarCorVerde(){
    document.body.style.backgroundColor="green"
}
function trocarCorAzul() {
    document.body.style.backgroundColor="blue"
}
function trocarCorAmarelo() {
    document.body.style.backgroundColor="yellow"   
}
function trocarCor(cor) {
    document.body.style.backgroundColor=cor
}

function trocarCorAleatoria() {
    let red = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)

    document.body.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`
}

function corPersonalizada() {
    const corInput = document.querySelector('.input-cor').value
    
    trocarCor(corInput)
}

// querySelector pega alguma coisa dentro do document (HTML), pode ser uma classe, um id etc.
// .value captura os valores que o usuário coloca em um input por exemplo