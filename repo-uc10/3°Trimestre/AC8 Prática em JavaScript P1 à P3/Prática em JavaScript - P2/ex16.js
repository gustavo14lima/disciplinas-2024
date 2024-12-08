/*
Exercício 16: Sistema de Cadastro de Aluno
Crie um objeto que represente um aluno com propriedades para nome, idade, notas (array com 3 notas) e endereço (outro objeto com rua e número). 
O programa deve mostrar os dados do aluno e calcular sua média.
*/

let infoAlun = {'nome':'Gustavo Lima',
                'idade':'16',
                'notas':[9,8,10],
                'endereço':{
                    'rua':'Logo Ali',
                    'número':'69',
                }
}

let contadorMedia = 0

for (let i = 0; i < infoAlun.notas.length; i++) {
    contadorMedia += infoAlun.notas[i]
}

console.log(infoAlun.nome)
console.log(infoAlun.idade)
console.log((contadorMedia/infoAlun.notas.length))
console.log(infoAlun.endereço.rua)
console.log(infoAlun.endereço.número)
