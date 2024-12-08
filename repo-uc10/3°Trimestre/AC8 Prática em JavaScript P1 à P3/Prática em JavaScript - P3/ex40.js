/*
Exercício 40: Calculadora de Estatísticas
Nível: Iniciante/Intermediário

Crie uma série de funções que:
1. Calculem diferentes medidas estatísticas
2. Trabalhem com arrays de números
3. Forneçam análises detalhadas
*/

class CalculadoraEstatisticas {
    constructor(dados) {
      this.dados = dados;
    }
  
    media() {
      const soma = this.dados.reduce((acc, num) => acc + num, 0);
      return soma / this.dados.length;
    }
  
    mediana() {
      const dadosOrdenados = [...this.dados].sort((a, b) => a - b);
      const meio = Math.floor(dadosOrdenados.length / 2);
      if (dadosOrdenados.length % 2 === 0) {
        return (dadosOrdenados[meio - 1] + dadosOrdenados[meio]) / 2;
      }
      return dadosOrdenados[meio];
    }
  
    moda() {
      const frequencias = {};
      this.dados.forEach(num => frequencias[num] = (frequencias[num] || 0) + 1);
      let maxFrequencia = 0;
      let moda = [];
      for (let num in frequencias) {
        if (frequencias[num] > maxFrequencia) {
          maxFrequencia = frequencias[num];
          moda = [Number(num)];
        } else if (frequencias[num] === maxFrequencia) {
          moda.push(Number(num));
        }
      }
      return moda;
    }
  
    variancia() {
      const media = this.media();
      const somaQuadrados = this.dados.reduce((acc, num) => acc + Math.pow(num - media, 2), 0);
      return somaQuadrados / this.dados.length;
    }
  
    desvioPadrao() {
      return Math.sqrt(this.variancia());
    }
  
    analiseCompleta() {
      return {
        media: this.media(),
        mediana: this.mediana(),
        moda: this.moda(),
        variancia: this.variancia(),
        desvioPadrao: this.desvioPadrao()
      };
    }
  }
  
  // Exemplo de uso
  const dados = [10, 15, 20, 15, 25, 30, 15];
  const calc = new CalculadoraEstatisticas(dados);
  
  console.log('Média:', calc.media());
  console.log('Mediana:', calc.mediana());
  console.log('Moda:', calc.moda());
  console.log('Variância:', calc.variancia());
  console.log('Desvio Padrão:', calc.desvioPadrao());
  console.log('Análise Completa:', calc.analiseCompleta());
  