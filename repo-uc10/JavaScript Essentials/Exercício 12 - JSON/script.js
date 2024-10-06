const fs = require('fs');
const prompt = require('readline');
const arquivoLivros = 'bibliotecaLivros.json';

let biblioteca = carregarBiblioteca() || [];

const rl = prompt.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("-- Menu de Biblioteca --");
  console.log("1. Adicionar Livro");
  console.log("2. Atualizar Livro");
  console.log("3. Listar livros");
  console.log("4. Sair");

  rl.question("Escolha uma opção: ", function(opcao) {
    switch (opcao) {
      case '1':
        adicionarLivroPrompt();
        break;
      case '2':
        console.log("Função de atualizar livro não implementada.");
        menu();
        break;
      case '3':
        listarLivros();
        menu();
        break;
      case '4':
        console.log("Saindo...");
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        menu();
    }
  });
}

function adicionarLivroPrompt() {
  rl.question("Digite o título do livro: ", function(titulo) {
    rl.question("Digite o autor do livro: ", function(autor) {
      rl.question("Digite o ISBN do livro: ", function(isbn) {
        rl.question("Digite o ano de publicação: ", function(anoPublicacao) {
          rl.question("Digite os gêneros do livro (separados por vírgula): ", function(generos) {
            adicionarLivro(titulo, autor, isbn, anoPublicacao, generos.split(","));
            menu();
          });
        });
      });
    });
  });
}

function adicionarLivro(titulo, autor, isbn, anoPublicacao, generos) {
  const livro = {
    id: Date.now(),
    titulo,
    autor,
    isbn,
    anoPublicacao,
    generos,
    emprestado: false
  };

  biblioteca.push(livro);
  salvarBiblioteca(); 
  console.log(`Livro "${titulo}" adicionado com sucesso.`);
}

function listarLivros() {
  if (biblioteca.length === 0) {
    console.log('A biblioteca está vazia.');
  } else {
    console.log("-- Lista de Livros --");
    biblioteca.forEach(livro => {
      console.log(`ID: ${livro.id}`);
      console.log(`Título: ${livro.titulo}`);
      console.log(`Autor: ${livro.autor}`);
      console.log(`ISBN: ${livro.isbn}`);
      console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
      console.log(`Gêneros: ${livro.generos.join(', ')}`);
      console.log(`Emprestado: ${livro.emprestado ? 'Sim' : 'Não'}`);
      console.log('--------------------------');
    });
  }
}

function salvarBiblioteca() {
  try {
    fs.writeFileSync(arquivoLivros, JSON.stringify(biblioteca, null, 2));
    console.log("Biblioteca salva com sucesso.");
  } catch (error) {
    console.error("Erro ao salvar a biblioteca:", error);
  }
}

function carregarBiblioteca() {
  if (fs.existsSync(arquivoLivros)) {
    const dados = fs.readFileSync(arquivoLivros, 'utf-8');
    return dados.trim().length === 0 ? [] : JSON.parse(dados);
  }
  return [];
}

menu();