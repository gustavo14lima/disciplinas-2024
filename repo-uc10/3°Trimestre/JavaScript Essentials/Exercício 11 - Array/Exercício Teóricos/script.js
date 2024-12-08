/*
A. Questões Dissertativas
    1.Explique a diferença entre os métodos push() e unshift() em arrays JavaScript. Como eles afetam o desempenho do array?
        A grande diferença entre o push() para o unshit() é que enquanto o push() adiciona elementos ao final do array, o unshift() adiciona elementos ao inicio do array. Em relação ao desempenho, o push() ganha, por ter um melhor desempnho, pois adiciona ao final, sem a necesidade de alterar as posições dos elementos que já existem.

    2.Descreva o funcionamento do método reduce() e forneça um exemplo de uso prático que não seja uma simples soma de elementos.
        O método reduce() funciona da seguinte maneira: ele é um método que retorna apenas um único valor, sendo esse valor um resultado acumulado da função, sem alterar o array original. Um exemplo prático que você pode usar o reduce() é quando você quer transformar um array de pares chave-valor para um objeto.

    3.Compare e contraste os métodos map() e forEach(). Em que situações você escolheria usar um em vez do outro?
        O método map() cria e retorna um novo array com o resultado da função aplicada a cada elemento do array de origem, enquanto o método forEach() ele não retorna um novo array, ele apenas executa uma função para cada elmento do array original.
        Em determinadas situações, usaria o map(), situações esas que eu precisaria transformar ou manipular os elementos de um array. E usaria o forEach() quando precisaria fazer uma ação nos elementos do meu array.

    4.Explique o conceito de "sparse arrays" (arrays esparsos) em JavaScript e como eles podem ser criados. Quais são as implicações de se trabalhar com arrays esparsos?
        Um "sparese arrays" nada mais é do que um array em que um dos seus elementos não tem um valor definido, podendo até ter um elemento vazio. Para você criar um "sparse arrays" você apenas precisa literalmente deixar um espaço vazio, por exemplo:
            let exemplo = [1, ,3] 
        O indice 1 está vazio!
        Um exemplo de implicação ao trabalhar com esse tipo de array seria que ele tem um desempenho pior que um array com todos os seus espaços preenchidos.

    5.Discuta as vantagens e desvantagens de usar o método sort() para ordenar arrays em JavaScript. Como você lidaria com a ordenação de um array de objetos baseada em uma propriedade específica?
        Sobre o método sort() temos tanto desvantagens sobre ele quanto vantanges. De vantagens podemos apontar que ele é facil de se usar, por causa de sua sintaxe simples, sendo ideal para personalizar ordens complexas e grandes. Agora sobre as desvantagens, ele modifica o array original, podendo atrapalhar em seu trabalho, e pode ser mais lento em arrays grandes, tento funções de comparação complexas.

B. Questões de Múltipla Escolha (apenas uma resposta correta)
    1.Qual método de array é usado para remover o último elemento de um array?
        pop()

    2.Qual é o resultado de [1, 2, 3].indexOf(4)?
        -1

    3.Qual método cria um novo array com os resultados da chamada de uma função para cada elemento?
        map()

    4.O que [1, 2, 3].concat([4, 5]) retorna?
        [1, 2, 3, 4, 5]]

    5.Qual é o output de console.log([1, 2, 3, 4, 5].slice(2, 4))?
        [3, 4]

C. Questões de Caixa de Múltiplas Escolhas (com duas até todas as respostas corretas)
    1.Quais dos seguintes métodos modificam o array original? (Selecione todas as opções corretas)
        push()
        sort()
        reverse()

    2.Quais afirmações sobre o método reduce() são verdadeiras? (Selecione todas as opções corretas)
        Sempre retorna um único valor
        Pode ser usado para transformar um array em um objeto

        Pode implementar a funcionalidade de map() e filter()

    4.Quais dos seguintes são métodos válidos para criar um array em JavaScript? (Selecione todas as opções corretas)
        let arr = new Array();
        let arr = [];
        let arr = Array(3);
        let arr = Array.from("abc");

D. Questões Verdadeiro ou Falso
    1.O método forEach() sempre itera sobre todos os elementos do array, mesmo se a função de callback retornar false.
        Falso

    2.O método find() continua a busca mesmo depois de encontrar um elemento que satisfaça a condição.
        Falso

    3.Arrays em JavaScript podem conter elementos de diferentes tipos.
        Verdadeiro

    4.O método slice() modifica o array original.
        Falso

    5.O método sort() sem argumentos ordena os elementos como strings por padrão.
        Verdadeiro

E. Questões de Associação entre Linhas e Colunas
    Associe os métodos de array com suas descrições:
            Método 	    Descrição
            1. map() 	    E. Retorna uma cópia superficial de uma porção do array
            2. filter() 	D. Executa uma função redutora no array
            3. shift() 	    A. Remove o primeiro elemento do array
            4. reduce() 	B. Cria um novo array com os resultados da função
            5. slice() 	    C. Cria um novo array com elementos que passam no teste
*/