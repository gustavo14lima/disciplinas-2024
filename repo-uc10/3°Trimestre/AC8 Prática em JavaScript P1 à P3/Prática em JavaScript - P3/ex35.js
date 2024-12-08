/*
Exercício 35: Analisador de Dados Climáticos
Nível: Iniciante/Intermediário

Desenvolva um programa que analise dados climáticos, permitindo:
1. Registrar temperaturas diárias
2. Calcular médias por período
3. Identificar tendências
4. Gerar relatórios estatísticos
*/

class AnalisadorClimatico {
    constructor() {
      this.dados = [];
    }
  
    registrarTemperatura(temperatura, data) {
      this.dados.push({ temperatura, data });
    }
  
    mediaTemperatura(periodoInicio, periodoFim) {
      const temperaturas = this.dados.filter(dado => 
        dado.data >= periodoInicio && dado.data <= periodoFim
      ).map(dado => dado.temperatura);
      
      const soma = temperaturas.reduce((acc, temp) => acc + temp, 0);
      return soma / temperaturas.length;
    }
  
    identificarTendencia(periodoInicio, periodoFim) {
      const temperaturas = this.dados.filter(dado => 
        dado.data >= periodoInicio && dado.data <= periodoFim
      ).map(dado => dado.temperatura);
      
      const tendencia = temperaturas[temperaturas.length - 1] - temperaturas[0];
      return tendencia > 0 ? "Aquecendo" : tendencia < 0 ? "Resfriando" : "Estável";
    }
  
    gerarRelatorio(periodoInicio, periodoFim) {
      const media = this.mediaTemperatura(periodoInicio, periodoFim);
      const tendencia = this.identificarTendencia(periodoInicio, periodoFim);
      return `Relatório: 
        Período: ${periodoInicio} a ${periodoFim}
        Média de Temperatura: ${media.toFixed(2)}°C
        Tendência: ${tendencia}`;
    }
  }
  
  const analise = new AnalisadorClimatico();
  analise.registrarTemperatura(30, '2024-11-01');
  analise.registrarTemperatura(28, '2024-11-02');
  analise.registrarTemperatura(32, '2024-11-03');
  analise.registrarTemperatura(31, '2024-11-04');
  analise.registrarTemperatura(29, '2024-11-05');
  
  console.log(analise.gerarRelatorio('2024-11-01', '2024-11-05'));
  