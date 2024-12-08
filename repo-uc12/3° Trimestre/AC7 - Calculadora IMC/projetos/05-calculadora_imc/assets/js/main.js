const data = [
    {
        min:0,
        max:18.4,
        classification:`Menor que 18.5`,
        info:`Magresa`,
        obsity:0
    },
    {
        min:18.5,
        max:24.9,
        classification:`Entre 18,5 e 24,9`,
        info:`Normal`,
        obsity:0
    },
    {
        min:25,
        max:29.9,
        classification:`Entre 25 e 29,9`,
        info:`SobrePeso`,
        obsity:0
    },
    {
        min:30,
        max:34.9,
        classification:`Entre 30 e 34,9`,
        info:`Obesidade`,
        obsity:1
    },
    {
        min:35,
        max:39.9,
        classification:`Entre 35 e 39,9`,
        info:`Obesidade Grande`,
        obsity:2
    },
    {
        min:40,
        max:99,
        classification:`Maior que 40`,
        info:`Obesidade Mórbida`,
        obsity:3
    }
]    

const imcTable = document.querySelector("#imc-table")
const height = document.querySelector("#height")
const weightInput = document.querySelector("#weight")
const calcBtn = document.querySelector("#calc-btn")
const clearBtn = document.querySelector("#clear-btn")
const resultContainer = document.querySelector("#result-container")
const imcNumber = document.querySelector("#imc-number span")
const imcInfo = document.querySelector("#imc-info span")
const backBtn = document.querySelector("#back-btn")