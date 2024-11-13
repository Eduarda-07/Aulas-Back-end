/***************************************************************************************************
 * objetivo: criar um sistema que diferencie numeros pares e impares para a empresa Cálculos SA
 * data: 22/09/24
 * autor: Eduarda
 * versão: 1.0
 ***************************************************************************************************/

function verificarDados (valor1, valor2){
    let numeroI = valor1
    let numeroF = valor2
    let status = true

    if(numeroI == '' || numeroF == ''){
        console.log('ERRO: não é permitida a entrada de dados vazia')
        status = false
    
    }else if(isNaN(numeroI) || isNaN(numeroF) ){
        console.log('ERRO: só é permitido a entrada de valores numéricos')
        status = false

    }else if(numeroI < 0 || numeroI > 500){
        console.log('ERRO: o número inicial deve ser um valor entre 0 e 500')
        status = false

    }else if(numeroF < 100 || numeroF > 1000){
        console.log('ERRO: o número final dever ser um valor entre 100 e 1000')
        status = false

    }else if(numeroI > numeroF){
        console.log('ERRO: o número inicial deve ser menor do que o número final')
        status = false

    }else if(numeroI == numeroF){
        console.log('ERRO: o número inicial deve ser diferente do número final')
        status = false

    }
    return status
}
//console.log(verificarDados (200, 100))

function identificadorP(valor1, valor2){
    let numeroI = valor1
    let numeroF = valor2
    let status = true

    // let para guardar variáveis (lista/array)
    let numerosP = [] 
    let numerosIm = []

    // let para guardar a quantidade
    let quantPares = 0
    let quantImpares = 0


    if(!verificarDados(valor1, valor2)){
        status = false
    }else {
       
        while(numeroI <= numeroF){
            if(numeroI %2 == 0){
            
            //adicionando os números pares ao let que estará guardando
            // push adiciona itens a lista criada
            numerosP.push(numeroI)  
                numeroI ++
                quantPares ++
                
             }else {
                numerosIm.push(numeroI)
                numeroI ++
                quantImpares ++
             }
        }
        // exibir os números em lista:
        // o join serviu para transformar os itens em "numerosP" em uma só string, para não exibir com aspas
        // o "\n" serviu para deixar os números em lista
        console.log(`Lista de numeros pares:  \n${numerosP.join('\n')}`)
        console.log(`Quantidade de números pares: ${quantPares}`)
        console.log(`Lista de números ímpares: ${numerosIm.join('\n')}`)
        console.log(`Quantidade de números ímpares: ${quantImpares}`)
    }
    return status
}



console.log(identificadorP(90, 100))