
var moduloFuncoes = require ('./modulo/funcoes.js')

var readline = require ('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o valor inicial: ', function(numero1){
    let valor1 = numero1

    entradaDeDados.question('Digite o valor final: ', function(numero2){
        let valor2 = numero2

        if(!moduloFuncoes.gerarNovaSequenciaNumerica(valor1, valor2)){
            console.log('Não foi possivel proessar a solicitação')
        }
        entradaDeDados.close()
        
    })
    
})