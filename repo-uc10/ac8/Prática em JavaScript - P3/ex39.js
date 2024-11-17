/*
Exercício 39: Gerenciador de E-commerce
Nível: Intermediário/Avançado

Desenvolva um sistema de e-commerce com:
1. Cadastro de produtos e categorias
2. Gerenciamento de estoque
3. Processamento de pedidos
4. Sistema de descontos e promoções
*/

class Produto {
    constructor(id, nome, categoria, preco, estoque) {
      this.id = id;
      this.nome = nome;
      this.categoria = categoria;
      this.preco = preco;
      this.estoque = estoque;
    }
  
    atualizarEstoque(quantidade) {
      if (this.estoque >= quantidade) {
        this.estoque -= quantidade;
        return true;
      }
      return false;
    }
  
    aplicarDesconto(percentual) {
      this.preco = this.preco * (1 - percentual / 100);
    }
  }
  
  class Categoria {
    constructor(nome) {
      this.nome = nome;
      this.produtos = [];
    }
  
    adicionarProduto(produto) {
      this.produtos.push(produto);
    }
  
    listarProdutos() {
      return this.produtos;
    }
  }
  
  class Pedido {
    constructor(cliente) {
      this.cliente = cliente;
      this.itens = [];
      this.total = 0;
      this.status = 'Pendente';
    }
  
    adicionarItem(produto, quantidade) {
      if (produto.atualizarEstoque(quantidade)) {
        this.itens.push({ produto, quantidade });
        this.total += produto.preco * quantidade;
      } else {
        console.log(`Estoque insuficiente para o produto: ${produto.nome}`);
      }
    }
  
    aplicarDesconto(percentual) {
      this.total = this.total * (1 - percentual / 100);
    }
  
    finalizarPedido() {
      if (this.itens.length > 0) {
        this.status = 'Finalizado';
        console.log(`Pedido finalizado para ${this.cliente}. Total: R$${this.total.toFixed(2)}`);
      } else {
        console.log('O pedido não possui itens.');
      }
    }
  
    gerarResumo() {
      return {
        cliente: this.cliente,
        itens: this.itens.map(item => ({ nome: item.produto.nome, quantidade: item.quantidade, precoUnitario: item.produto.preco })),
        total: this.total,
        status: this.status
      };
    }
  }
  
  // Cadastro de categorias e produtos
  const categoriaEletronicos = new Categoria('Eletrônicos');
  const categoriaRoupas = new Categoria('Roupas');
  
  const celular = new Produto(1, 'Celular', categoriaEletronicos, 1500, 30);
  const notebook = new Produto(2, 'Notebook', categoriaEletronicos, 3500, 15);
  const camiseta = new Produto(3, 'Camiseta', categoriaRoupas, 50, 100);
  
  categoriaEletronicos.adicionarProduto(celular);
  categoriaEletronicos.adicionarProduto(notebook);
  categoriaRoupas.adicionarProduto(camiseta);
  
  // Criando um pedido
  const pedidoJoao = new Pedido('João');
  
  pedidoJoao.adicionarItem(celular, 2);
  pedidoJoao.adicionarItem(camiseta, 5);
  
  // Aplicando desconto
  pedidoJoao.aplicarDesconto(10);
  
  // Finalizando pedido
  pedidoJoao.finalizarPedido();
  
  // Gerando resumo do pedido
  console.log(pedidoJoao.gerarResumo());
  
  // Mostrando estoque atualizado
  console.log(`Estoque do Celular: ${celular.estoque}`);
  console.log(`Estoque da Camiseta: ${camiseta.estoque}`);
  