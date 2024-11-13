var moduloFuncoes = require("./modulo/funcoes.js")

var readline = require ('readline')

var entradaDeDados = readline.createInterface({
    input: process. stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu peso: ', function(valorPeso){
    let peso = valorPeso

    entradaDeDados.question('Digite sua altura em metros: ', function(valorAltura){
        let altura = valorAltura
        
        if (!moduloFuncoes.calculo(peso, altura)){
            console.log('Não foi possível realizar o cálculo!')
        }else {
            
        moduloFuncoes.calculo(peso,altura)
         
        }
        entradaDeDados.close()
    })
})

