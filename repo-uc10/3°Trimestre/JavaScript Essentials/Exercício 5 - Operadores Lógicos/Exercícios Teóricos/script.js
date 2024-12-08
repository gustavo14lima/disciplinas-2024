/*
Questões Dissertativas
    1.Explique a diferença entre os operadores AND (&&) e OR (||) em JavaScript.
        As operadores acima tem uma peculiaridade, ele returnam apenas valores em boolean, ou seja, apenas true (verdadeiro) ou false (falso),
        O opeador AND vai retornar true, apenas se todas as expressoões envolvidas forem verdadeiras.
        Agora, o operador OR só vai retornar true, se uma das expressões envolvidas for verdadeiras.
        Em suma, AND precisa que todas as expressões sejam verdadeiras e o OR só precisa que uma seja verdadeira        
    2.Como funciona o curto-circuito (short-circuit evaluation) nos operadores lógicos em JavaScript?
        Um curto-circuito em JavaScript é um comportamento dos operadores lógicos AND e OR, esse comportamento define você saber o resultado final das suas expresseções apenas avaliando a primeira operando. Por exemplo:
            Se a primeira operando for false, o segundo operando não precisa ser avaliado, pois para um AND for true, ele precisa que ambos sejam verdadeiros.
            Agora no Or, se o primeiro for true, você já sabe que o segundo não precisa avaliar, pois a expressão é true, pois para que o OR seja true, apenas um precisa ser true! 
2. Questões de Múltipla Escolha
    1. Qual é o resultado da expressão: true && false || true?
        true
    2.Qual operador lógico tem a maior precedência em JavaScript?
        NOT (!)
3. Questões de Caixa de Múltiplas Escolhas
    1.Quais das seguintes afirmações são verdadeiras sobre os operadores lógicos em JavaScript? (Selecione todas as opções corretas)
        O operador OR (||) pode ser usado para definir valores padrão.
        O operador NOT (!) inverte o valor de verdade do seu operando.
        Os operadores lógicos em JavaScript usam avaliação de curto-circuito.
4. Questões Verdadeiro ou Falso
    1.O operador AND (&&) em JavaScript retorna o último valor verdadeiro se todos os operandos forem verdadeiros.
        Verdadeiro
    2.Em JavaScript, uma string vazia é considerada um valor falsy.
        Verdadeiro
    3.O operador OR (||) sempre retorna um valor booleano.
        Falsa
*/