var entrada = require('fs').readFileSync('./1168/stdin', 'utf8')
var linhas = entrada.split('\n')

function calcLeds(numero, resultado = 0, cont0a9 = 0){

    if(cont0a9>9){
        return console.log(`${resultado} leds`)
    }

    switch(cont0a9){

        case 1:
            contLed = 2
            break
        case 2: case 3: case 5:
            contLed = 5
            break
        case 4:
            contLed = 4
            break
        case 6: case 9: case 0:
            contLed = 6
            break
        case 7:
            contLed = 3
            break
        case 8:
            contLed = 7
            break
    }


    resultado += (numero.split(cont0a9).length -1) * contLed

    return calcLeds(numero, resultado, ++cont0a9)
}

var operacoes = linhas[0]

for(i = 1; i<=operacoes; i++){

    var numero = linhas[i]
    calcLeds(numero)
}