/*********************
 * objetivo: Calcular IMC para empresa Cálculos SA
 * data: 11/09/24
 * autor: Eduarda
 * versão: 1.0
 *********************/

// função para validar dados

function verificarDados(numeroPeso, numeroAltura){
    let peso = numeroPeso
    let altura = numeroAltura

    let pesoStr = String(peso).replace(',', '.')
    let alturaStr = String(altura).replace(',', '.')

    peso = Number(pesoStr)
    altura = Number(alturaStr)

    let status = true

    // tratamento para verificar entrada de dados vazia
    if( peso ==  '' || altura == ''){
        console.log('ERRO: É obrigatório a o preenchomento de todos os campos!')
        status = false
    // tratamento para verificar se é um número
    }else if(isNaN(peso) || isNaN(altura)){
        console.log('ERRO: É obrigatório a entrada somente de números, não é permitido a entrada de letras!')
        status = false
    }
    return status

}

// console.log(verificarDados(63, '1,70'))

function calculo(numeroPeso, numeroAltura){
    let peso = numeroPeso
    let altura = numeroAltura

    let pesoStr = String(peso).replace(',', '.')
    let alturaStr = String(altura).replace(',', '.')

    peso = Number(pesoStr)
    altura = Number(alturaStr)

    let resultado
    let status = false
    let classificacao 
    
    if (verificarDados(peso, altura)){
        resultado = Number(peso) / Number(altura**2)
        status = true
    }
    if(resultado <= 18.5){
        classificacao = "Abaixo do peso"
        console.log(`O resultado do IMC é igual à:  ${resultado.toFixed(1)}
        Sua classificação é: ${classificacao}`)
    }else if(resultado > 18.5 && resultado <= 24.9){
        classificacao = "Peso normal"
        console.log(`O resultado do IMC é igual à:  ${resultado.toFixed(1)}
        Sua classificação é: ${classificacao}`)
    }else if(resultado >= 25 && resultado <= 29.9){
        classificacao = "Acima do peso"
        console.log(`O resultado do IMC é igual à:  ${resultado.toFixed(1)}
        Sua classificação é: ${classificacao}`)
    }else if (resultado >= 30 && resultado <= 34.9){
        classificacao = "Obesidade 1"
        console.log(`O resultado do IMC é igual à:  ${resultado.toFixed(1)}
        Sua classificação é: ${classificacao}`)
    }else if(resultado >= 35 && resultado <= 39.9){
        classificacao = "Obesidade 2"
        console.log(`O resultado do IMC é igual à:  ${resultado.toFixed(1)}
        Sua classificação é: ${classificacao}`)
    }else if(resultado >= 40){
        classificacao = "Obesidade 3"
        console.log(`
        O resultado do IMC é igual à:  ${resultado.toFixed(1)}
        Sua classificação é: ${classificacao}`)
    } 
    return status
}

//console.log (calculo( 100, 1.50))

module.exports = {
    calculo,
    verificarDados
}
