/*
Exercício 38: Simulador de Banco Digital
Nível: Intermediário

Crie um sistema bancário que permita:
1. Criar e gerenciar contas
2. Realizar transações
3. Calcular juros e taxas
4. Gerar extratos
*/

class ContaBancaria {
    constructor(cliente, saldoInicial = 0) {
      this.cliente = cliente;
      this.saldo = saldoInicial;
      this.transacoes = [];
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        this.transacoes.push({ tipo: 'Depósito', valor, data: new Date() });
      }
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        this.transacoes.push({ tipo: 'Saque', valor, data: new Date() });
      } else {
        console.log('Saldo insuficiente ou valor inválido');
      }
    }
  
    transferir(contaDestino, valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.sacar(valor);
        contaDestino.depositar(valor);
        this.transacoes.push({ tipo: 'Transferência', valor, destino: contaDestino.cliente, data: new Date() });
      } else {
        console.log('Saldo insuficiente ou valor inválido');
      }
    }
  
    calcularJuros(taxa, meses) {
      return this.saldo * Math.pow(1 + taxa / 100, meses) - this.saldo;
    }
  
    gerarExtrato() {
      return {
        cliente: this.cliente,
        saldo: this.saldo,
        transacoes: this.transacoes
      };
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    constructor(cliente, saldoInicial = 0) {
      super(cliente, saldoInicial);
      this.taxaJuros = 0.5; // 0.5% ao mês
    }
  
    aplicarJuros(meses) {
      const juros = this.calcularJuros(this.taxaJuros, meses);
      this.saldo += juros;
      this.transacoes.push({ tipo: 'Juros aplicados', valor: juros, data: new Date() });
    }
  }
  
  class ContaCorrente extends ContaBancaria {
    constructor(cliente, saldoInicial = 0) {
      super(cliente, saldoInicial);
      this.limite = 500; // Limite de crédito
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo + this.limite) {
        this.saldo -= valor;
        this.transacoes.push({ tipo: 'Saque', valor, data: new Date() });
      } else {
        console.log('Saldo insuficiente ou valor inválido');
      }
    }
  
    calcularTaxaManutencao() {
      return 15; // Taxa fixa de manutenção mensal
    }
  
    gerarExtrato() {
      const taxaManutencao = this.calcularTaxaManutencao();
      const extrato = super.gerarExtrato();
      extrato.taxaManutencao = taxaManutencao;
      extrato.saldo -= taxaManutencao; // Deduz taxa da manutenção
      return extrato;
    }
  }
  
  // Testando o sistema
  const contaJoao = new ContaCorrente('João', 1000);
  const contaMaria = new ContaPoupanca('Maria', 500);
  
  contaJoao.depositar(500);
  contaJoao.sacar(300);
  contaJoao.transferir(contaMaria, 200);
  
  contaMaria.aplicarJuros(6);
  
  console.log(contaJoao.gerarExtrato());
  console.log(contaMaria.gerarExtrato());
  