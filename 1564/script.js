var entrada = require('fs').readFileSync('./1564/stdin', 'utf8')
var linhas = entrada.split(/\n| /)

for(prop in linhas){
    if(linhas[prop]==''){
        break
    }
    console.log(linhas[prop] == 0 ?  'vai ter copa!' : 'vai ter duas!')
}