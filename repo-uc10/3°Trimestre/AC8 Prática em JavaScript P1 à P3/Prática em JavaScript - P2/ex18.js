/*
Exercício 18: Organizador de Contatos
Crie um objeto que funcione como uma agenda de contatos simples. O objeto deve ter arrays para diferentes categorias de contatos (amigos, família, trabalho) e um método para mostrar os contatos de uma categoria específica.
*/

let agendaContatos = {amigos:[
                                {kevin:'4002-8922',
                                Vinicius:'4002-8922',
                                Kauê:'4002-8922'
                                }
                            ],
                    família:[
                        {
                            pai:'4002-8922',
                            mãe:'4002-8922',
                            irmão:'4002-8922'
                        }
                    ],
                    trabalho:[
                        {
                            André:'4002-8922',
                            Kaio:'4002-8922'
                        }
                    ]
}

console.log(agendaContatos.amigos) // Metodo para mostrar contatos de amigos
console.log(agendaContatos.família) // Metodo para mostrar contatos de família
console.log(agendaContatos.trabalho) // Metodo para mostrar contatos de trabalho