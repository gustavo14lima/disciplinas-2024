// Declare uma variável chamada nome usando let e atribua seu nome a ela. Em seguida, imprima o valor no console.
    let nome = `Gustavo Lima`
        console.log(nome) // Output: Gustavo Lima

// Declare uma constante chamada PI e atribua o valor 3.14159 a ela. Tente reatribuir um novo valor a PI e observe o erro.
    const PI = 3.14159
        console.log(PI) // Output: 3.14159

// Crie uma variável idade usando let e atribua sua idade a ela. Em seguida, incremente esta variável em 1 e imprima o resultado.
    let idade = 16
        idade += 1
        console.log(idade) // Output: 17
    
// Declare uma variável temperatura sem atribuir um valor inicial. Imprima seu valor no console.
    let temperatura = ``
        console.log(temperatura) // Output: (nada)

// Crie uma função que receba um parâmetro nome e declare uma variável local saudacao usando let. Retorne uma string combinando saudacao e nome.
    function saudacao(nome) {
        let saudacao = `Olá ${nome}, seja bem-vindo! `
        return saudacao
    }
    console.log(saudacao("Gustavo")) // Output: Olá Gustavo, seja bem-vindo!

// Demonstre o comportamento de hoisting com uma variável declarada com var. Tente acessar a variável antes de sua declaração no código.
    console.log(jogo)
    var jogo = `Dark Souls` // Output: undefined

// Demonstre a diferença de escopo entre var e let dentro de um bloco if.
    // Usando o escopo let
        let num = 1
            if(num == 1){
                let num = `Usei o mesmo nome de variavel fora do if e deu certo, pois o let é uma variavel local!`
                console.log(num) // Output: `Usei o mesmo nome de variavel fora do if e deu certo, pois o let é uma variavel local!`
            }
                console.log(num) // Output: 1
    // Usando o var
        var game = `Dark Souls`
            if(game == `Dark Souls`){
                console.log(game) // Output: Dark Souls
            }
                console.log(game) // Output: Dark Souls
                // Ambos deram Sark Souls, pois o var é uma variavel global, pode ser usado em todo o código sem restrição 