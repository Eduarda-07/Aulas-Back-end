/*************************************************************
 * objetivo: Arquivo responsável pela criação de funções e 
 * utilização de estruturas de repetição 
 * data: 04/09/24
 * autor: Eduarda
 * versão: 1.0
 *************************************************************/


// método tradicional
function gerarSequnciaNumerica(numeroInicial, numeroFinal) {
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let contador 
    let status = false

    // validação de entrada de dados vazia
  if (validarDados(numeroI, numeroF)) {
        contador = parseInt(numeroI) 

        while (contador <= parseInt(numeroF)){
            status = true 
            console.log (contador)
            // contador = contador + 1
            // contador += 1 
            //contador++
            contador++
        } 
    }
    return status 
}

// função de seta ou Arrow Function
const gerarNovaSequenciaNumerica = (numeroInicial, numeroFinal) => {
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = false

    if(validarDados (numeroI, numeroF)){
        for(let contador = parseInt(numeroI); contador <= parseInt(numeroF); contador++){
            console.log(contador)
            status = true
        }
    }
    return status
}

//função anônima
const validarDados = function(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = true

    if(numeroI == '' || numeroF == ''){
        console.log('ERRO: Dados obrigatórios na digitação.')
        status = false
    // validação de entrada de caracteres inválidos
    }else if (isNaN(numeroI) || isNaN(numeroF)){
        console.log ('ERRO: Não é permitido a entrada de letras.')
        status = false
    }

    return status
}




//console.log (gerarNovaSequenciaNumerca( 1, 5))

module.exports = {
    gerarSequnciaNumerica,
    gerarNovaSequenciaNumerica
}