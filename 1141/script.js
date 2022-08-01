let conteudo = require('fs').readFileSync('1141/stdin', 'utf8')
let conteudoLinhas = conteudo.split(/(?:\r|\n)+/)

let quantidadeDeTestes = conteudoLinhas.shift()

let conteudoPrimeiroOrdenado = conteudoLinhas.splice(0, quantidadeDeTestes).sort((a,b)=>{return a.length>b.length? 1 : -1})

let contagemSubpalavra = []

for( let palavraPrincipalIndex in conteudoPrimeiroOrdenado){

    let conteudoSemPrincipal = conteudoPrimeiroOrdenado.slice()

    let palavraPrincipal = conteudoSemPrincipal.splice(palavraPrincipalIndex, 1)

    palavraPrincipal = palavraPrincipal.toString()

    contagemSubpalavra.push([0, []])

    for(let palavraSecundaria of conteudoSemPrincipal){

        if(palavraSecundaria.includes(palavraPrincipal)&&palavraPrincipal.length + 1 == palavraSecundaria.length){
            contagemSubpalavra[palavraPrincipalIndex][0]++
            contagemSubpalavra[palavraPrincipalIndex][1].push(palavraSecundaria)
        }
    }

}



let resultado = 0

let numeroPalavras = conteudoPrimeiroOrdenado.length

for(let i = 0; i <= numeroPalavras; i++){

    resultado++

    let palavraDeletada = conteudoPrimeiroOrdenado.splice(i, 1)

    console.log(palavraDeletada)

}

console.log(contagemSubpalavra)