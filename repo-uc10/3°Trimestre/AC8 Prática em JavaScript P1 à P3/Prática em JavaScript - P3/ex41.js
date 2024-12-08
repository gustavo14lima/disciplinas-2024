/*
Exercício 41: Processador de Textos
Nível: Intermediário

Desenvolva funções que:
1. Analisem e processem texto
2. Contem palavras e caracteres
3. Encontrem padrões
4. Gerem relatórios de análise
*/

class ProcessadorDeTexto {
    constructor(texto) {
      this.texto = texto;
    }
  
    contarPalavras() {
      return this.texto.split(/\s+/).filter(palavra => palavra.length > 0).length;
    }
  
    contarCaracteres() {
      return this.texto.replace(/\s+/g, '').length;
    }
  
    encontrarPadrao(regex) {
      const padroes = this.texto.match(regex);
      return padroes ? padroes.length : 0;
    }
  
    substituirPadrao(regex, substituicao) {
      return this.texto.replace(regex, substituicao);
    }
  
    gerarRelatorio() {
      return {
        totalPalavras: this.contarPalavras(),
        totalCaracteres: this.contarCaracteres(),
        totalVogais: this.encontrarPadrao(/[aeiouAEIOU]/g),
        totalNumeros: this.encontrarPadrao(/\d/g),
        totalEspacos: this.encontrarPadrao(/\s/g)
      };
    }
  }
  
  // Exemplo de uso
  const texto = "Olá, como você está? Eu espero que esteja bem! 12345";
  
  const processador = new ProcessadorDeTexto(texto);
  
  console.log('Total de Palavras:', processador.contarPalavras());
  console.log('Total de Caracteres:', processador.contarCaracteres());
  console.log('Total de Vogais:', processador.encontrarPadrao(/[aeiouAEIOU]/g));
  console.log('Total de Números:', processador.encontrarPadrao(/\d/g));
  console.log('Texto após substituição:', processador.substituirPadrao(/\d/g, '#'));
  
  console.log('Relatório de Análise:', processador.gerarRelatorio());
  