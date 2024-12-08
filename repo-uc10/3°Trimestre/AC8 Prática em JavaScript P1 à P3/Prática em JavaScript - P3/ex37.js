/*
Exercício 37: Sistema de Gestão Escolar
Nível: Iniciante/Intermediário

Desenvolva um sistema que gerencie:
1. Cadastro de alunos e professores
2. Registro de notas e frequência
3. Cálculo de médias e situação final
4. Geração de boletins
*/

class Pessoa {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo; // 'aluno' ou 'professor'
    }
  }
  
  class Aluno extends Pessoa {
    constructor(nome) {
      super(nome, 'aluno');
      this.notas = [];
      this.frequencia = [];
    }
  
    registrarNota(nota) {
      this.notas.push(nota);
    }
  
    registrarFrequencia(presenca) {
      this.frequencia.push(presenca);
    }
  
    calcularMedia() {
      const somaNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
      return somaNotas / this.notas.length;
    }
  
    calcularFrequencia() {
      const presencas = this.frequencia.filter(f => f === true).length;
      return (presencas / this.frequencia.length) * 100;
    }
  
    situacao() {
      const media = this.calcularMedia();
      const frequencia = this.calcularFrequencia();
      if (media >= 7 && frequencia >= 75) {
        return "Aprovado";
      } else if (media < 5) {
        return "Reprovado por nota";
      } else if (frequencia < 75) {
        return "Reprovado por frequência";
      } else {
        return "Em recuperação";
      }
    }
  
    gerarBoletim() {
      return {
        nome: this.nome,
        media: this.calcularMedia(),
        frequencia: this.calcularFrequencia(),
        situacao: this.situacao()
      };
    }
  }
  
  class Professor extends Pessoa {
    constructor(nome) {
      super(nome, 'professor');
      this.disciplinas = [];
    }
  
    adicionarDisciplina(disciplina) {
      this.disciplinas.push(disciplina);
    }
  }
  
  const aluno1 = new Aluno("João");
  aluno1.registrarNota(7);
  aluno1.registrarNota(8);
  aluno1.registrarFrequencia(true);
  aluno1.registrarFrequencia(true);
  aluno1.registrarFrequencia(false);
  
  const aluno2 = new Aluno("Maria");
  aluno2.registrarNota(4);
  aluno2.registrarNota(6);
  aluno2.registrarFrequencia(true);
  aluno2.registrarFrequencia(false);
  aluno2.registrarFrequencia(false);
  
  const professor1 = new Professor("Carlos");
  professor1.adicionarDisciplina("Matemática");
  
  console.log(aluno1.gerarBoletim());
  console.log(aluno2.gerarBoletim());
  