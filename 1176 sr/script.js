var entrada = require('fs').readFileSync('./1176/stdin', 'utf8')
var linhas = entrada.split('\n')

function fibonacci(number){

    if(number==0){

        return 0

    }else if(number==1){

        return 1

    }else{

        return fibonacci(number-1)+fibonacci(number-2)

    }
}

for(i = 1; i<=linhas[0] ; i++){

    console.log(`Fib(${linhas[i]}) = ${fibonacci(linhas[i])}`)
}