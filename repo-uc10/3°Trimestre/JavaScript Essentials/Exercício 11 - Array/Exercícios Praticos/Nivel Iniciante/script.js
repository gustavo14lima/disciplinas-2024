// Crie uma função que receba um array de números e retorne a soma de todos os elementos pares.
    function somarPares(array){
        let armazenaSoma = 0

        for(let num of array){
            if(num % 2 == 0){
                armazenaSoma += num
            }
        }
        return armazenaSoma
    }
console.log(somarPares([1,2,3,4,5,6])) // Output: 12

// Implemente uma função que receba um array de strings e retorne um novo array com todas as strings em maiúsculas.
    function deixarArrayMaiusculo (array){
        return array.map(function(maiscula){
            return maiscula.toUpperCase()
        })
    }
    console.log(deixarArrayMaiusculo(["Dark", "Souls"])) // Output: [ 'DARK', 'SOULS' ]

// Escreva uma função que receba um array de números e retorne o maior número do array.
    function maiorNúmero(num) {
        let maiorNumeroArray = num[0] // assumo que o pŕimeiro número é o maior número da array
        for (let i = 1; i < num.length; i++) {
            if (num[i] > maiorNumeroArray) {
                maiorNumeroArray = num[i]
            }
        }
        return maiorNumeroArray
    }
    console.log(maiorNúmero([0,2,3,4,7,8,4,5,6,10])) // Output: 10

// Crie uma função que receba um array e remova todos os elementos duplicados.
    function removerDuplicados(array) {
        return [...new Set(array)]
        // aqui o Set irá remover todos os elementos duplicados, enquanto o operador (...) vai converter o resultado para uma nova array
    }
    console.log(removerDuplicados([1,1,2,3,4,5,6,7,7])) // Output: [  1, 2, 3, 4, 5, 6, 7]

// Implemente uma função que receba dois arrays e retorne um novo array com os elementos comuns entre eles.
    function juntarArrayComum (array1, array2){
        return array1.filter(element => array2.includes(element))
        // array1.filter() = aqui para cada elemento do array1, vamos aplicar a função entre parenteses 
        // arrays2.includes(element) = aqui estamos verificando cada elemento do array2, verificando se ele tem o element
    }
    let arrayA = [1,2,3,4,5,6,7,8,9] 
    let arrayB = [4,5,6,7,8,9]
    console.log(juntarArrayComum(arrayA, arrayB)) // Output: [ 4, 5, 6, 7, 8, 9 ]