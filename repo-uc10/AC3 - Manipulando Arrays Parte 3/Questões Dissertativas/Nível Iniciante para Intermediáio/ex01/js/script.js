// 1. Explique o que é o método Array.from() e forneça um exemplo de uso.
    // O método Array.from(), ele basicamente cria uma nova array a partir de alguns elementos que não são arrays, assim transformando esses elementos em arrys. Ele pode separar letras de uma string ou separar números que estão juntos. Exemplo:
        /*
            const string = 'hello';
            const arrayFrom = Array.from(string);
            console.log(arrayFrom); Output: ['h', 'e', 'l', 'l', 'o']
        */

// 2. Descreva a diferença entre Array.of() e o construtor Array(). Por que Array.of() foi introduzido?
    // A grande diferença entre o Array() e o Array.of() é que o Array.of() ele cria um array com o que fooi fornecido para ele, mas ele trata todos os argumentos de forma igual, ou seja, o new Array(7) iria criar uma array com 7 posições vazias, enquanto o Array.fo(7), ele cria uma array com o 7. O Array.of() é mais previsivel e menos propenso a erros, ele é mais usado quando tem um único números de elementos.

// 3. Como você criaria um array com 5 elementos, todos inicializados com o valor zero? Forneça pelo menos duas abordagens diferentes.
    // Eu poderia usar o método Array.from() que iria criar os elementos com o valor zero, assim ele iria criar uma array que eu determina a quantidade de elementos e os seus valores iniciais. Exemplo:
        /*
            const array = Array.from({ length: 5 }, () => 0);
            console.log(array); Output: [0, 0, 0, 0, 0]
        */
    // Ou eu poderia usar o método Array.fill(), que é uma forma direta de inicializar uma array com uma quantidade que eu desejar de elementos (Array) e qual será o valor inicial (fill). Exemplo:
        /*
            const array = Array(5).fill(0)
            console.log(array)
        */