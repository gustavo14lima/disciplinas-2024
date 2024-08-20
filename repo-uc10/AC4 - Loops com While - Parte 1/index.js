const prompt = require("readline-sync");
let saldo = parseInt(1000)

while(true){
    const introducao = parseFloat(prompt.question("Selecione uma Opção: " + "\n" + "0. Saldo" + "\n" + "1. Saque" + "\n" + "2. Deposito" + "\n" + "3. Sair" + "\n"))

    switch (introducao) {
        case 0:
            console.log("Seu saldo atual é de: " + saldo + " reais");
            break;
        case 1:
            if(saldo > 0){
                let valor = prompt.question("Qual é o valor que você quer sacar? " + "\n")
                let saque = parseFloat(prompt.question("Notas disponiveis: " + "\n" + "10" + "\n" + "20" + "\n" + "50"+ "\n" + "100" + "\n" + "Qual você quer sacar: "))
                switch(saque){
                    case 10:
                        if(valor % 10 == 0){
                            console.log ("Você vai sacar: " + valor + " reais" + "\n" + "Vai receber: " + (valor/saque) + " notas" + "\n" + "Seu saldo atual é de: " + (saldo-valor) + " reais") 
                            break;
                        }else{
                            console.log("Essa valor que você quer sacar não sairá apenas em notas de 10...")
                            break;
                        }
                    case 20: 
                        if(valor % 20 == 0){
                            console.log ("Você vai sacar: " + valor + " reais" + "\n" + "Vai receber: " + (valor/saque) + " notas" + "\n" + "Seu saldo atual é de: " + (saldo-valor) + " reais") 
                            break;
                        }else{
                            console.log("Essa valor que você quer sacar não sairá apenas em notas de 20...")
                            break;
                        }
                    case 50:
                        if(valor % 50 == 0){
                            console.log ("Você vai sacar: " + valor + " reais" + "\n" + "Vai receber: " + (valor/saque) + " notas" + "\n" + "Seu saldo atual é de: " + (saldo-valor) + " reais") 
                            break;
                        }else{
                            console.log("Essa valor que você quer sacar não sairá apenas em notas de 50...")
                            break;
                        }
                    case 100:
                        if(valor % 100 == 0){
                            console.log ("Você vai sacar: " + valor + " reais" + "\n" + "Vai receber: " + (valor/saque) + " notas" + "\n" + "Seu saldo atual é de: " + (saldo-valor) + " reais") 
                            break;
                        }else{
                            console.log("Essa valor que você quer sacar não sairá apenas em notas de 100...")
                            break;
                        }
                    default:
                            console.log("Essa valor foi colocada de forma inadequada, por favor, revisar da próxima vez!")
                            }continue;
                        }
            else{
            console.log("Você está sem saldo!")
            break;
        }
        case 2: 
        let deposito = parseFloat(prompt.question("Você quer depositar quanto?" + "\n"))
            console.log("Você depositou " + deposito + " reais" + "\n" + "Assim, seu saldo atual é de: " + parseInt(deposito + saldo) + " reais")
            break;
        case 3: 
            console.log("Obrigado por utilizar nosso serviço! Tenha um bom dia!")
            return;
        default:
            console.log("Essa opção não existe! Por favor, revisar da próxima vez!")
    }
}