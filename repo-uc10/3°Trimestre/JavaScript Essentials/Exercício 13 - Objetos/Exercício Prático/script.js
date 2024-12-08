let biblioteca = {
    livros: [],
    adicionarLivro: function(titulo, autor, anoPublicacao) {
        this.livros.push({ titulo, autor, anoPublicacao });
    },
    buscarPorAutor: function(autorBuscado) {
        return this.livros.filter(livro => livro.autor === autorBuscado);
    }
};

biblioteca.adicionarLivro("Berserk", "Kentaro Miura", 1989);
biblioteca.adicionarLivro("Vagabond", "Takehiko Inoue", 1998);
biblioteca.adicionarLivro("O Senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", 1954);

console.log(biblioteca.buscarPorAutor("Kentaro Miura")); // Output: { titulo: 'Berserk', autor: 'Kentaro Miura', anoPublicacao: 1989 }  