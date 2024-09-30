// Exercício 5: Matriz em Espiral
// Nível: Intermediário/Avançado

// Descrição:
// Escreva uma função que receba um número n como entrada e retorne uma matriz n x n preenchida em espiral
// com números de 1 a n^2, começando do canto superior esquerdo e movendo-se no sentido horário.

// Dicas:
// - Crie uma matriz n x n preenchida com zeros.
// - Use quatro loops for para preencher cada lado da espiral.
// - Mantenha controle das bordas da espiral que já foram preenchidas.

// Solução:
function matrizNum(n) {
    let matrizZero = Array.from({ length: n }, () => Array(n).fill(0));

    let inicioLinha = 0;
    let fimLinha = n - 1;
    let inicioColuna = 0;
    let fimColuna = n - 1;
    
    let num = 1;

    while (inicioLinha <= fimLinha && inicioColuna <= fimColuna) {

        for (let i = inicioColuna; i <= fimColuna; i++) {
            matrizZero[inicioLinha][i] = num++;
        }
        for (let i = inicioLinha; i <= fimLinha; i++) {
            matrizZero[i][fimColuna] = num++;
        }
        if (inicioLinha <= fimLinha) {
            for (let i = fimColuna; i >= inicioColuna; i--) {
                matrizZero[fimLinha][i] = num++;
            }
    
        }
        if (inicioColuna <= fimColuna) {
            for (let i = fimLinha; i >= inicioLinha; i--) {
                matrizZero[i][inicioColuna] = num++;
            }
        }
    }

    return matrizZero;
}

console.log(matrizNum(3));
