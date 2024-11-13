/*************************************************************************
 * objetivo: arquivo de funções para realizar calculos matemáticos
 * data: 28/08/24
 * autor: Eduarda
 * versão> 1.0
 *************************************************************************/

function calculadora(valor1, valor2, operacao){
    // recebe os dados em variáveis locais, encaminhandos pelo argumento da função
    let numero1 = valor1
    let numero2 = valor2
    let tipoCalculo = operacao
    let resultado 

     // tratamento das operações e dos cálculos
     // toUpperCase serve para transformar a string em letras maiúsculas e tornar um padrão infependente de como o usuário digitou 
    // if(tipoCalculo.toUpperCase() == 'SOMAR'){
    //     resultado = Number(numero1) + Number(numero2)
    // }else if(tipoCalculo.toUpperCase() == 'SUBTRAIR'){
    //     resultado = Number(numero1) - Number(numero2)
    // }else if (tipoCalculo.toUpperCase() == 'MULTIPLICAR'){
    //     resultado = Number(numero1) * Number(numero2)
    // }else if(tipoCalculo.toUpperCase() == 'DIVIDIR'){
    //     if(numero2 == 0){
    //         console.log('ERRO: Não é possivel realizar a divisão por 0!')
    //     }else{
    //         resultado = Number(numero1) / Number(numero2)
    //     }
    // }else{
    //     console.log('ERRO: A operação digitada não corresponde as operações de calculo!')
    // }

    switch (tipoCalculo.toUpperCase()) {
        case 'SOMAR':
            resultado = Number(numero1) + Number(numero2)
            
            break;
        case 'SUBTRAIR':
            resultado = Number(numero1) - Number(numero2)

            break;
        case 'MULTIPLICAR':
            resultado = Number(numero1) * Number(numero2)

            break;
        case 'DIVIDIR':
            if(numero2 == 0){
               console.log('ERRO: Não é possivel realizar a divisão por 0!')
            }else{
                resultado = Number(numero1) / Number(numero2)
            }
            break;
        default:
            console.log('ERRO: A operação digitada não corresponde as operações de calculo!')
            break;
    }

    // tratamento para verificar se a variável resultado foi utilizada nos cálculos
    if (resultado != undefined){
        return resultado
    }else{
        return false 
    }
    

}

// tornar função visível a outros arquivos
module.exports = {
    calculadora
}