/*************************************************************
 * objetivo: projetos para realizar calculos matemáticos,
 * utilizando funções locais ou em arquivos externos
 * data: 28/08/24
 * autor: Eduarda
 * versão: 1.0
 *************************************************************/

//import da biblioteca de calculos que foi criada pelo oprogramador 
var calculos = require('./modulo/calculos.js') 

//import da biblioteca readline
var readline = require('readline')

//cria o objeto para entrada de dados
var entradadedados =  readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

//entrada do valor 1
entradadedados.question('Digite o valor1: ', function(valor1){
    // repleace -> permite localizar um caracter e sbstituir por outro
    //String() -> converte uma variável para tipo de dados string
    let numero1 = String(valor1).replace(',', '.')

    //entrada do valor 2
    entradadedados.question('Digite o valor2: ', function(valor2){
        let numero2 = String(valor2).replace(',','.')

        //entrada do tipo de calculo
        entradadedados.question('Escolha uma operação matemática: [SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR]: ', function(operacao){
            let tipoCalculo = operacao
            let resultado 

            // validação de entrada de dados vasia
            if(numero1 == '' || numero2 == '' || tipoCalculo == ''){
                console.log('ERRO: É obrigatório a entrada de todos os valores e da operação!')

            // validaçãos da entrada de dados numéricos    
            }else if (isNaN(numero1) || isNaN(numero2)){
                console.log('ERRO: É obrigatório somente a entrada de dados numéricos!')


            }else {
                
                // chamado a função e atribuindo valores ao argumento 
               resultado = calculos.calculadora(numero1, numero2, tipoCalculo)
               
                // definindo que se tiver algo diferente de FALSE no resultado, printar 
                if(resultado){
                    console.log(resultado)
                }
                
            }entradadedados.close()
        }) 
    })
})