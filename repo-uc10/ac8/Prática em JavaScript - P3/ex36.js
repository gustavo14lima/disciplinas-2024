/*
Exercício 36: Sistema de Playlist Musical
Nível: Intermediário

Crie um sistema de playlist que permita:
1. Adicionar e remover músicas
2. Organizar por artista, álbum ou gênero
3. Criar playlists personalizadas
4. Gerar recomendações baseadas em preferências
*/

class Musica {
    constructor(titulo, artista, album, genero) {
      this.titulo = titulo;
      this.artista = artista;
      this.album = album;
      this.genero = genero;
    }
  }
  
  class Playlist {
    constructor(nome) {
      this.nome = nome;
      this.musicas = [];
    }
  
    adicionarMusica(musica) {
      this.musicas.push(musica);
    }
  
    removerMusica(titulo) {
      this.musicas = this.musicas.filter(musica => musica.titulo !== titulo);
    }
  
    organizarPor(criterio) {
      return this.musicas.sort((a, b) => a[criterio].localeCompare(b[criterio]));
    }
  
    gerarRecomendacoes(preferencia) {
      return this.musicas.filter(musica => musica.genero === preferencia);
    }
  }
  
  const playlist = new Playlist("Minha Playlist");
  playlist.adicionarMusica(new Musica("Blinding Lights", "The Weeknd", "After Hours", "Pop"));
  playlist.adicionarMusica(new Musica("Levitating", "Dua Lipa", "Future Nostalgia", "Pop"));
  playlist.adicionarMusica(new Musica("Shape of You", "Ed Sheeran", "÷", "Pop"));
  playlist.adicionarMusica(new Musica("Rolling in the Deep", "Adele", "21", "Pop"));
  
  console.log(playlist.organizarPor("artista"));
  console.log(playlist.gerarRecomendacoes("Pop"));
  
  playlist.removerMusica("Levitating");
  console.log(playlist.musicas);
  