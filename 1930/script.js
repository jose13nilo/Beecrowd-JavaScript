var arquivo = require('fs').readFileSync('./1930/stdin', 'utf8')
var entradas = arquivo.split(' ')

var resultado = 0

for(valor in entradas){

    if(valor == entradas.length - 1 ){
        resultado += parseInt(entradas[valor])
        break
    }

    resultado += entradas[valor]-1
}

console.log(resultado)