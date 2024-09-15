/*
    Questões Dissertativas
        1.Explique a diferença entre let, var e const na declaração de variáveis em JavaScript.
            A Diferença entre let, var e const é:
                O let vocẽ pode ter sua variavel mudada ao longo do código, por exemplo:
                    let exemplo = "Teste"
                        exemplo = "Teste1"
                    console.log(exemplo)
                O que será exibido será o "Teste1", pois usando o let você pode alterar os valores ao longo do tempo
                Agora usando o const você não pode trocar o valor da variavel ao longo do tempo, se você declarou ela com um determinado valor, essa variavel terá este mesmo valor até o longo do código, iremos usar o mesmo exemplo:
                    const exemplo = "Teste"
                        exemplo = "Teste1"
                    console.log(exemplo)
                Se vocẽ usar a variavel exemplo de novo, dará erro no seu código, pois você já declarou que ela será uma constante (não irá mudar).
                Tanto o let quanto o const tem uma peculiaridade, quando ambos for ingressado em um laço de repetição, por exemplo, esse variavel só irá funcionar no laço de repetição, não irá funcionar fora dele. O var não atente essa peculiaridade, ele pode ser usado em todo o código!
        2.O que é hoisting em JavaScript e como ele afeta as varaiáveis?
            O hoisting em JavaScript nada mais é do que você acessar a variável depois que você ter declarado ela. Exemplo para melhor entendimento:
                console.log(exemplo);
                let exemplo = 10;
            Ela pode afetar as variáveis de uma maneira especifica, se você tentar acessar uma vaiável antes da linha em que ela foi declarada, você vai ter como resultado um "undefined". Um exemplo para melhor entendimento:
                console.log(exemplo); // Output: undefined
                let exemplo = 10;
                console.log(exemplo); // Output: 10

    Questões de Múltipla Escolha
        1.Qual das seguintes opções NÃO é uma forma válida de declarar uma variável em JavaScript moderno?
            var y = 10;
        2.Qual é o resultado do seguinte código?
        console.log(x);
        var x = 5;
            undefined
    Questões de Caixa de Múltiplas Escolhas
        1.Quais das seguintes afirmações sobre const são verdadeiras? (Selecione todas as corretas)
            Variáveis declaradas com const não podem ter seu valor alterado
            const tem escopo de bloco
    Questões Verdadeiro ou Falso
        1. Verdadeiro ou Falso: Variáveis declaradas com let podem ser acessadas antes de sua declaração no código.
            Falso
        2.Verdadeiro ou Falso: Em JavaScript, é possível declarar múltiplas variáveis em uma única linha.
            Verdadeiro
    Questões de Associação
        Associe os conceitos da coluna A com suas descrições na coluna B:
            Coluna A 	Coluna B
            1. var 	        c) Tem escopo de função ou global
            2. let          a) Tem escopo de bloco e não pode ser redeclarada
            3. const 	    b) Usada para declarar constantes
            4. Hoisting 	e) Movimentação de declarações para o topo
            5. Escopo       d) Pode ser redeclarada no mesmo escopo
*/