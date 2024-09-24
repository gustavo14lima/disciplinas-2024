/*
Questões Dissertativas
    1.Explique a diferença entre if...else e if...else if...else. Quando você usaria cada um?
        A diferença é a seguinte, usando o if...else, você está dizendo, "se determinada ação for verdadeira, faça isso (if), se não acontecer faça isso (else)", agora no caso do if...else if...else, você está dizendo "se determinada ação for verdadeira, faça isso (if), se não acontecer (else), determine se está ação é verdadeira (if), se não for faça isso (else)".
        Ou seja, a primeira é usada para apenas uma condição e na segunda quando tem múltiplas condições.
    2. Descreva o que é o operador ternário e forneça um exemplo de quando ele seria útil.
        O operador ternário nada mais é do que uma forma abreviada de escrever uma expressão if...else. Ao invés de você, utilizar o if, else, chaves e a condição, vocẽ apenas usa a seguinte sintaxe:
             condição ? expressão1 : expressão2
        Isso pode ser útil para economizar linha e ser mais "prático"
Questões de Múltipla Escolha
    1. Qual é a saída do seguinte código?
        let x = 5;
        if (x > 0) {
            console.log("Positivo");
        } else if (x < 0) {
            console.log("Negativo");
        } else {
            console.log("Zero");
        }
           a) Positivo
    2. Qual operador é usado para comparação estrita em JavaScript?
         b) ===

Questões de Caixa de Múltiplas Escolhas
    1.Quais das seguintes são estruturas de decisão válidas em JavaScript? (Selecione todas as corretas)
         if
        if...else
        if...else if
        if...else if...else
        switch
    2.Quais dos seguintes são operadores lógicos em JavaScript? (Selecione todos os corretos)
        &&
        ||
        !

Questões Verdadeiro ou Falso
    1.O bloco de código dentro de um if sempre será executado, independentemente da condição. (V/F)
        Falso
    2.É possível usar o if sem chaves {} se o bloco contiver apenas uma instrução. (V/F)
        Verdadeiro
    3.O operador === compara tanto o valor quanto o tipo dos operandos. (V/F)
        Verdadeiro

Questões de Associação
    Associe os conceitos da coluna A com as descrições da coluna B:
        Coluna A 	Coluna B
            1. if 	    b) Executa um bloco de código se a condição for verdadeira
            2. else 	d) Especifica um bloco de código a ser executado se a condição for falsa
            3. else if 	a) Usado quando há múltiplas condições a serem verificadas
            4. Operador ternário 	c) Uma forma abreviada de escrever uma estrutura if...else simples
*/