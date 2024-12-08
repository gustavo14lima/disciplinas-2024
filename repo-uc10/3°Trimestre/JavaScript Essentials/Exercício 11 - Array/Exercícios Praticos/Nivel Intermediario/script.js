// Crie uma função que ordene um array de objetos com base em uma propriedade específica. Por exemplo, ordenar um array de pessoas pela idade.
    function ordenarIdade (pessoas){
        return pessoas.sort((a,b) => a.idade - b.idade)
    }
    let pessoas = [
        {nome: 'Gustavo', idade: 16},
        {nome: 'Vito', idade: 27},
        {nome: 'Solaire', idade: 23}
    ]
    console.log(ordenarIdade(pessoas))// Output:         {nome: 'Gustavo', idade: 16}, {nome: 'Solaire', idade: 23}, {nome: 'Vito', idade: 27},

//Implemente uma função que "achate" um array de arrays em um único nível. Por exemplo, [[1, 2], [3, 4], [5, 6]] deve se tornar [1, 2, 3, 4, 5, 6].
    function juntarArray (array){
        return array.flat()
    }
    console.log(juntarArray([[1,2],[3,4],[5,6]])) // Output: [ 1, 2, 3, 4, 5, 6 ]

// Escreva uma função que implemente o algoritmo de busca binária em um array ordenado.
    function buscaBinaria(array, valor) {
        let inicio = 0
        let fim = array.length - 1

        while (inicio <= fim) {
            const meio = Math.floor((inicio + fim) / 2)
            if (array[meio] == valor){
                return meio
            } else if(array[meio] < valor){
                inicio = meio + 1
            } else{
                fim = meio -1
            }
        }
         return -1
    }
    const exemploArray = [1, 2, 3, 4, 5, 6]
    console.log(buscaBinaria(exemploArray, 4)) // Output: 3

// Crie uma função que agrupe os elementos de um array com base em uma função de agrupamento. Por exemplo, agrupar números por paridade.
    function agrupaPar(array) {
        return array.reduce((acumulador, valor) => {
            const chave = valor % 2 == 0 ? 'pares' : 'impares';
            if (!acumulador[chave]){
                acumulador[chave] = []
            }
            acumulador[chave].push(valor)
            return acumulador
        }, {})
    }
    console.log(agrupaPar([1, 2, 3, 4, 5, 6])) // Output: { impares: [ 1, 3, 5 ], pares: [ 2, 4, 6 ] }

// Implemente uma função que simule o comportamento do método reduce() sem usar o método nativo.
    function imitandoReduce(array, callback, valorInicial) {
        let acumulador = valorInicial !== undefined ? valorInicial : array[0]
        const inicio = valorInicial !== undefined ? 0 : 1;

        for (let i = inicio; i < array.length; i++) {
            acumulador = callback(acumulador, array[i], i, array);
        }
        return acumulador;
    }
    const numerosParaSoma = [1, 2, 3, 4];
    const soma = meuReduce(numerosParaSoma, (acumulador, valor) => acumulador + valor, 0);
    console.log(soma); // Outpt: 10
