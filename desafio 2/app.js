/*************************************************************
 * objetivo: Desenvolver uma aplicação para a empresa Cálculos SA,
 *  que calcule as principais operações matemáticas
 * data: 14/08/24
 * autor: Eduarda
 * versão: 1.0
 *************************************************************/

// import biblioteca para entrada de dados
var readline = require('readline')

//cria o objeto de entrada de dados via teclado no terminal
var entradadedados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

//entrada dos número
entradadedados.question ('digite o primeiro número de entrada: ', function (numero1){
    // variável local que recebe o argumento da função
    let valor1 = numero1.replace(/,/g, ".");

    // entrada de números
    entradadedados.question ('digite o segundo número de entrada: ', function (numero2){
        // variável local que recebe o argumento da função
        let valor2 =  numero2.replace(/,/g, ".");

        // entrada da operação
        entradadedados.question (`
        Informe qual operação matemática deseja usar: 
        1) Soma 
        2) Subtração
        3) Multiplicação
        4) Divisão
        ` , function (op){

            // variável local que recebe o argumento da função
            let operacao = op
            let resultado

            if(valor1 == '' || valor2 == '' || operacao == ''){
                console.log ('ERRO: É obrigatório o preenchimento de todos os campos de entrada!')
            } else{

                if (isNaN (valor2) == true || isNaN (valor1) == true){
                    console.log ('ERRO: É orbirgatório a entrada de valores numéricos')
                }else{
                    if(valor2 == 0 && operacao == 4){
                        console.log ('ERRO: Não é possível efetuar a divisão por zero')
                    }else{
                        console.log (operacao)
                        if (operacao!= 1 && operacao!= 2 && operacao!= 3 && operacao!= 4){
                            console.log ('Escolha umas das opções entre 1, 2, 3 ou 4!')
                            entradadedados.close()
                        }else if( (operacao) == 1){
                            resultado = parseFloat(valor1) + parseFloat(valor2)
                            console.log (`O resultado da soma dos valores ${valor1} e ${valor2}, é igual a: ${resultado.toFixed(2)}`)
    
                        }else if ((operacao) == 2){
                            resultado = parseFloat(valor1) - parseFloat(valor2)
                            console.log(`O resultado da subtração dos valores ${valor1} e ${valor2}, é igual a: ${resultado.toFixed(2)}`)
    
                        }else if((operacao) == 3){
                            resultado = parseFloat(valor1) * parseFloat(valor2)
                            console.log (`O resultado da multiplicação dos valores ${valor1} e ${valor2}, é igual a: ${resultado.toFixed(2)}`)
                        }else if((operacao) == 4){
                            resultado =  parseFloat(valor1) / parseFloat(valor2)
                            console.log (`O resultado da divisão dos valores ${valor1} e ${valor2}, é igual a: ${resultado.toFixed(2)}`)
                        } 

                    }
                
                }
            }entradadedados.close()
        })
                
    })   
    
})  

