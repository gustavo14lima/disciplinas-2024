// 1.Crie uma função que aceite um número como entrada e retorne true se for um número primo, e false caso contrário.
    function calculadoraPrimo(num) {
        for (let i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                return false
            } else{
                return true
            }
        }
    }
        console.log(calculadoraPrimo(6))

// 2. Implemente uma função que receba uma string e retorne um objeto contendo a contagem de cada caractere na string.
    function recebaString(string){
        let armazenamentoCaracteres = {}
        let comecoContagem = 1
            for (let i = 0; i < string.length; i++) {
                const capturaCaracter = string[i];   
                if (!armazenamentoCaracteres[capturaCaracter]){
                    armazenamentoCaracteres[capturaCaracter] = comecoContagem
                    comecoContagem++
                }
                if (comecoContagem > 10) {
                    comecoContagem = 1;
                }
            }   
        return armazenamentoCaracteres
    }
    let resultado = recebaString(`Dark Souls`)
    console.log(resultado)
    
// 3. Escreva uma função que aceite um array de números e retorne o segundo maior número do array.
    function segundoMaior(array) {
        if (array.length < 2){
            return `O seu array tem apenas 1 valor, por issom não é possivel calcular o segundo maior valor!`
        } else {
            let organizacaoDescrescente = [...new Set(array)].sort((a, b) => b - a);
            return organizacaoDescrescente[1]
        }
    }
        console.log(segundoMaior([1,2,3]))

// 4.Crie uma função que gere um número aleatório entre 1 e 100, e então peça ao usuário para adivinhar o número. A função deve dar dicas se o palpite é muito alto ou muito baixo, até que o usuário acerte.

    const prompt = require("readline-sync");
        
    function adivinheNumero(num) {
        const numAleatorio = Math.floor(Math.random() * 100) + 1 
        let palpite
        do{
        palpite = prompt.question(`Tente adivinhar o número entre 1 e 100!: `)
        if (palpite === numAleatorio){
            console.log(`Parabéns" Vocẽ acertou o número correto era ${numAleatorio}`)
            break;
        } else if ((numAleatorio - palpite) <= 5){
            console.log(`É ISSO... O NÚMERO ESTÁ MUITO PERTO!!! VOCÊ IRÁ ACHAR ELE!!!`)
        } 
        else if ((numAleatorio - palpite) <= 10){
            console.log(`Wow... O seu Número está Bastante perto...`)
        } else if((numAleatorio - palpite) <= 20){
            console.log(`Bom... O número está perto... Fique atento!`)
        } else{
            console.log(`O número está longe ainda... Mas não desista!`)
        }
        } while (palpite !== numAleatorio)
    }
        adivinheNumero()

// 5.Implemente uma função que receba um objeto e um símbolo como parâmetros. A função deve adicionar uma nova propriedade ao objeto usando o símbolo como chave e retornar o objeto modificado.
    let simbolo = Symbol(`Dark Souls 1 é o melhor jogo já inventado!`)
    let objetoVazio = {}
    function adicionarPropriedade(objeto, simbolo, valor) {
        objeto[simbolo] = valor
        return objeto
    }
    const objetoModificado = adicionarPropriedade(objetoVazio, simbolo, `Esse é o novo valor da prorpiedade!`) 
    console.log(objetoModificado)
    console.log(objetoModificado[simbolo])