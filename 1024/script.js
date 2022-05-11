var texto = 'Texto #3'.split('')

x = 0

for(prop in texto){
    if(/[A-Z]|[a-z]/.test(texto[prop])){

        texto.splice(prop+4, 0, texto[prop])
        texto.splice(prop, 1)

    }
}