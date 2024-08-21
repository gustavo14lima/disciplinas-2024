const prompt = require("readline-sync");
let saldo = parseFloat(1000).toFixed(2)

while(true){
    const introducao = parseFloat(prompt.question(`Selecione uma Opção:  \n 0. Saldo \n 1. Saque \n 2. Deposito \n 3. Sair \n Digite a opção que você quer usar: `))

    switch (introducao) {
        case 0:
            console.log(`Seu saldo atual é de: R$ ${saldo}\n`);
            break;
        case 1:
            let valor = prompt.question(`Qual é o valor que você quer sacar?  \n`)
            if(saldo >= valor){
                let saque = parseFloat(prompt.question(`Notas disponiveis:  \n R$10 \n R$20 \n R$50 \n R$100 \n Qual você quer sacar: `))
                switch(saque){
                    case 10:
                        if(valor % 10 == 0){
                            saldo -= valor
                            console.log (`Você vai sacar:  R$${valor}  \n Vai receber:  R$${(valor/saque)} notas \n Seu saldo atual é de:  R$${(saldo)} \n`) 
                            break;
                        }else{
                            console.log(`Essa valor que você quer sacar não sairá apenas em notas de 10...\n`)
                            break;
                        }
                    case 20: 
                        if(valor % 20 == 0){
                            console.log (`Você vai sacar:  R$${valor}  \n Vai receber:  R$${(valor/saque)} notas \n Seu saldo atual é de:  R$${(saldo)} \n`) 
                            break;
                        }else{
                            console.log(`Essa valor que você quer sacar não sairá apenas em notas de 20...\n`)
                            break;
                        }
                    case 50:
                        if(valor % 50 == 0){
                            console.log (`Você vai sacar:  R$${valor}  \n Vai receber:  R$${(valor/saque)} notas \n Seu saldo atual é de:  R$${(saldo)} \n`) 
                            break;
                        }else{
                            console.log(`Essa valor que você quer sacar não sairá apenas em notas de 50...\n`)
                            break;
                        }
                    case 100:
                        if(valor % 100 == 0){
                            console.log (`Você vai sacar:  R$${valor}  \n Vai receber:  R$${(valor/saque)} notas \n Seu saldo atual é de:  R$${(saldo)} \n`)
                        }else{
                            console.log(`Essa valor que você quer sacar não sairá apenas em notas de 100..\n`)
                            break;
                        }
                    default:
                            console.log(`Essa valor foi colocada de forma inadequada, por favor, revisar da próxima vez!\n`)
                            }continue;
                        }
            else{
            console.log(`Você está sem  este valor de saldo!\n`)
            break;
        }
        case 2: 
        let deposito = parseFloat(prompt.question(`Você quer depositar quanto? \n`))
        saldo += deposito
            console.log(`Você depositou  R$${deposito.toFixed(2)}  \n Assim, seu saldo atual é de:  R$${(saldo)}  \n`)
            break;
        case 3: 
            const pergunta = prompt.question(`Você tem certeza que quer sair? \n Sim \n Não \n A sua decisão é: `).toLowerCase()
            switch (pergunta) {
                case `sim`:
                    console.log(`Obrigado por utilizar nosso serviço! Tenha um bom dia!`)
                    return;
                case `não`:
                    break;
                default:
                    console.log(`Opa! Tem algo escrito errado! Verifique o que você escreveu errado`)
                    break;
            }
        default:
            console.log(`Essa opção não existe! Por favor, revisar da próxima vez!`)
    }
}