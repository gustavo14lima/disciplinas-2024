// Sequência de Fibonacci Crie um programa que gere os primeiros 20 números da sequência de Fibonacci usando um loop while.
    let primeiroNum = 0
    let segundoNum = 1
    let inicioContagem = 2 // Já temos os 2 primeiro números
    while(inicioContagem <= 20){
        let proximoNum = primeiroNum + segundoNum

        primeiroNum = segundoNum // o primeiro passa a ser o segundo
        segundoNum = proximoNum // o segundo número passa a ser o segundo número
        console.log(proximoNum)
        inicioContagem ++
}

// Validação de Senha Implemente um sistema que peça ao usuário para criar uma senha que atenda a certos critérios (por exemplo, pelo menos 8 caracteres, contendo letras e números).
    let senha = `exemplo`
    let verificarLetraMaiuscula = /[A-Z]/.test(senha)
    let verificarLetraMinuscula = /[a-z]/.test(senha)
    let verificarNum = /[0-9]/.test(senha)
    let minimoCaracteres = 8

    while (true) {
        if (senha.length >= minimoCaracteres && verificarLetraMaiuscula && verificarLetraMinuscula && verificarNum) {
            console.log("Sua senha atende todos os requisitos!")
            break
        }else{
            console.log(`Sua senha não atende alguns dos requisitos!`)     
            break
        }
    }
