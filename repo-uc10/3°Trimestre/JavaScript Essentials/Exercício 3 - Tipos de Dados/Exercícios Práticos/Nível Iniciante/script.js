// 1.Crie uma variável para cada tipo de dado primitivo em JavaScript e imprima seu tipo usando o operador typeof.
    let string = `Dark Souls`
    let int = 69
    let boolean = true 
    let tipoNull = null
    let symbol = Symbol(`Dark Souls Melhor jogo`)
        console.log(typeof(string))
        console.log(typeof(int))
        console.log(typeof(boolean))
        console.log(typeof(undefined))
        console.log(typeof(tipoNull))
        console.log(typeof(symbol))

// 2. Escreva uma função que receba dois números como parâmetros e retorne true se o primeiro número for maior que o segundo, e false caso contrário.
    function maiorMenor(a,b) {
        if(a > b){
            return true
        } else{
            return false
        }
    }
    console.log(maiorMenor(5,4))

// 3.Declare uma variável sem atribuir um valor a ela. Em seguida, verifique se ela é do tipo undefined usando uma estrutura condicional.
    let nada 
    if (nada == undefined){
        console.log(`A variável "nada" tem seu tipo como "undefined"`)
    } else{
        console.log(`A variável "nada" não tem seu tipo como "undefined"`)
    }

// 4. Crie uma string contendo seu nome completo e use métodos de string para: a) Imprimir o nome em maiúsculas b) Contar o número de caracteres c) Extrair o primeiro nome
    let nomeCompleto = `Gustavo Lima de Araujo`
        console.log(nomeCompleto.toUpperCase())
        console.log(nomeCompleto.length)
        console.log(nomeCompleto.split(' ')[0])

// 5.Declare uma variável com o valor null e outra com o valor undefined. Compare-as usando os operadores == e ===. Explique o resultado.
    let valorNull = null
    let valorUndefined
        console.log(valorNull == valorUndefined)
            //Aqui o valor de saida foi true, pois o operador de comparação == considerou ambos os valor, como equivalentes para a comparação, ou seja, ambos derão como valor "vazios"/"não existentes"
        console.log(valorNull === valorUndefined)
            // Aqui o valor de saida foi false, pois o operador de comparação === verificou que ambos os valores não são exatamente do mesmo tipo e valor, sendo diferentes em uma comparação a extrema