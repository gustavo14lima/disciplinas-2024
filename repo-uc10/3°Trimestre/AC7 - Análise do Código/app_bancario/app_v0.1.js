// Fiz uma analiśe deste código e os ajustes que eu fiz, deixarei resumidamente nesta linha e indicarei onde alterei. A primeira alteração que eu fiz foi referente a função para perguntar valores com validação, localizada na linha 31. Onde eu alterei para que se o usuário colocar um valor inválido, como uma letra, ele será alertado que apenas pode usar números, também, na mesma função, fiz uma alteração referente aos valores que o cliente pode usar, coloquei um valor minimo de 0.01 tanto de saque quanto de deposito, pois creio eu que seja o menor valor que se pode utilizar. A ultima alteração que eu fiz foi referente ao menu, localizada na linha 92, onde eu coloquei um alerta para se o cliente colocar uma opção inválida, como um número inválido ou uma letra.

const prompt = require('readline-sync');
const fs = require('fs');

// Constantes para opções de menu
const OPCAO_SALDO = 1;
const OPCAO_EXTRATO = 2;
const OPCAO_DEPOSITO = 3;
const OPCAO_SAQUE = 4;
const OPCAO_SAIR = 0;

// Caminho do arquivo para persistência de dados
const DATA_FILE = 'bank_data.json';

// Função para carregar dados
function carregarDados() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return { saldo: 0, extrato: [] };
    }
}

// Função para salvar dados
function salvarDados(dados) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(dados), 'utf8');
}

// Função para perguntar valores com validação
function perguntarValorFloat(mensagem) {
    let valor;
    while (true) {
        valor = prompt.question(mensagem);
        if (isNaN(valor)) { // Se a entrada não for um número válido, como letras ou simbolos, estou alertando ao usuário que só pode usar números
            console.log(`Por favor, insirá apenas números!`);
        } else if (parseFloat(valor) < 0.01) { // Aqui estou verificando se o usuário está colocando um valor maior que 0.01 (creio eu que seja o menor valor)
            console.log(`Por favor, insira um valor maior ou igual a R$ 0,01!`); 
        } else {
            return parseFloat(valor);
        }
    }
}

// Carregar dados iniciais
let { saldo: valorSaldo, extrato: valorExtrato } = carregarDados();

function exibirSaldo() {
    console.log(`Seu saldo é: R$ ${valorSaldo.toFixed(2)}`);
}

function exibirExtrato() {
    if (valorExtrato.length === 0) {
        console.log("Não há transações no extrato.");
    } else {
        console.log("Extrato:");
        valorExtrato.forEach(transacao => {
            console.log(`${transacao.tipo}: R$ ${Math.abs(transacao.valor).toFixed(2)} - ${new Date(transacao.data).toLocaleString()}`);
        });
    }
}

function realizarDeposito() {
    let valorDeposito = perguntarValorFloat(`Digite o valor de depósito: R$ `);
    valorSaldo += valorDeposito;
    valorExtrato.push({
        tipo: 'Depósito',
        valor: valorDeposito,
        data: new Date().toISOString()
    });
    console.log(`Seu novo saldo é R$ ${valorSaldo.toFixed(2)}`);
    salvarDados({ saldo: valorSaldo, extrato: valorExtrato });
}

function realizarSaque() {
    let valorSaque = perguntarValorFloat(`Digite o valor para saque: R$ `);
    if (valorSaldo < valorSaque) {
        console.log(`Saldo insuficiente. Seu saldo é R$ ${valorSaldo.toFixed(2)}`);
    } else {
        valorSaldo -= valorSaque;
        valorExtrato.push({
            tipo: 'Saque',
            valor: -valorSaque,
            data: new Date().toISOString()
        });
        console.log(`Saque realizado com sucesso. Seu novo saldo é R$ ${valorSaldo.toFixed(2)}`);
        salvarDados({ saldo: valorSaldo, extrato: valorExtrato });
    }
}

function exibirMenu() {
    let opcao;
    while (true) {
        opcao = prompt.question(`
        Selecione a operação desejada: 
            ${OPCAO_SALDO} - Saldo 
            ${OPCAO_EXTRATO} - Extrato 
            ${OPCAO_DEPOSITO} - Depósito 
            ${OPCAO_SAQUE} - Saque 
            ${OPCAO_SAIR} - Sair 
        `);

        // Aqui estou verificando se a entrada é um número e se é uma das opções válidas
        if (!isNaN(opcao) && [OPCAO_SALDO, OPCAO_EXTRATO, OPCAO_DEPOSITO, OPCAO_SAQUE, OPCAO_SAIR].includes(parseInt(opcao))) {
            return parseInt(opcao);
        } else {
            console.log("Por favor, insira uma opção válida de acordo com o número da sua respectiva função!");
        }
    }
}


function executarOperacao(opcao) {
    switch (opcao) {
        case OPCAO_SALDO:
            exibirSaldo();
            break;
        case OPCAO_EXTRATO:
            exibirExtrato();
            break;
        case OPCAO_DEPOSITO:
            realizarDeposito();
            break;
        case OPCAO_SAQUE:
            realizarSaque();
            break;
        case OPCAO_SAIR:
            console.log("Obrigado por usar nossos serviços 😀");
            return false;
        default:
            console.log("Escolha uma operação válida!");
    }
    return true;
}

function main() {
    let clienteOnLine = true;
    while (clienteOnLine) {
        let opcao = exibirMenu();
        clienteOnLine = executarOperacao(opcao);
    }
}

main();