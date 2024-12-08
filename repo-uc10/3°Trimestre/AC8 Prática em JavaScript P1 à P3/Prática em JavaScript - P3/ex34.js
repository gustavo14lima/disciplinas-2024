/*
Exercício 34: Gerenciador de Tarefas
Nível: Iniciante

Crie um programa que gerencie uma lista de tarefas, permitindo:
1. Adicionar novas tarefas com prioridade
2. Marcar tarefas como concluídas
3. Remover tarefas
4. Listar tarefas por status ou prioridade
*/

const prompt = require('readline-sync')

let tarefas = []

function adicionarTarefa(titulo, prioridade) {
    const tarefa = {
        id: tarefas.length + 1,
        titulo,
        prioridade,
        concluida: false,
    }
    tarefas.push(tarefa)
    console.log(`Tarefa adicionada: ${titulo} (Prioridade: ${prioridade})`)
}

function marcarConcluida(id) {
    const tarefa = tarefas.find(t => t.id === id)
    if (tarefa) {
        tarefa.concluida = true
        console.log(`Tarefa '${tarefa.titulo}' marcada como concluída.`)
    } else {
        console.log("Tarefa não encontrada.")
    }
}

function removerTarefa(id) {
    const index = tarefas.findIndex(t => t.id === id)
    if (index !== -1) {
        const tarefaRemovida = tarefas.splice(index, 1)
        console.log(`Tarefa '${tarefaRemovida[0].titulo}' removida.`)
    } else {
        console.log("Tarefa não encontrada.")
    }
}

function listarTarefas(status) {
    let tarefasFiltradas = tarefas
    
    if (status === 'concluidas') {
        tarefasFiltradas = tarefas.filter(t => t.conclida)
    } else if (status === 'pendentes') {
        tarefasFiltradas = tarefas.filter(t => !t.conclida)
    } else if (status === 'prioridade') {
        tarefasFiltradas = tarefas.sort((a, b) => a.prioridade - b.prioridade)
    }

    console.log("\nLista de Tarefas:")
    tarefasFiltradas.forEach(t => {
        console.log(`${t.id}. [${t.conclida ? 'X' : ' '}] ${t.titulo} (Prioridade: ${t.prioridade})`)
    })
}

function main() {
    let opcao
    do {
        console.log("\nMenu:")
        console.log("1. Adicionar nova tarefa")
        console.log("2. Marcar tarefa como concluída")
        console.log("3. Remover tarefa")
        console.log("4. Listar tarefas")
        console.log("5. Sair")

        opcao = parseInt(prompt.question("Escolha uma opção: "))

        switch (opcao) {
            case 1:
                const titulo = prompt.question("Digite o título da tarefa: ")
                const prioridade = parseInt(prompt.question("Digite a prioridade da tarefa (1-5): "))
                adicionarTarefa(titulo, prioridade)
                break

            case 2:
                const idConcluida = parseInt(prompt.question("Digite o ID da tarefa a ser marcada como concluída: "))
                marcarConcluida(idConcluida)
                break

            case 3:
                const idRemover = parseInt(prompt.question("Digite o ID da tarefa a ser removida: "))
                removerTarefa(idRemover)
                break

            case 4:
                console.log("Escolha um filtro para listar as tarefas:")
                console.log("1. Todas")
                console.log("2. Concluídas")
                console.log("3. Pendentes")
                console.log("4. Ordenar por prioridade")

                const filtro = prompt.question("Digite sua escolha: ")
                if (filtro === '1') {
                    listarTarefas()
                } else if (filtro === '2') {
                    listarTarefas('concluidas')
                } else if (filtro === '3') {
                    listarTarefas('pendentes')
                } else if (filtro === '4') {
                    listarTarefas('prioridade')
                }
                break

            case 5:
                console.log("Saindo do programa...")
                break

            default:
                console.log("Opção inválida. Tente novamente.")
        }
    } while (opcao !== 5)
}

main()
