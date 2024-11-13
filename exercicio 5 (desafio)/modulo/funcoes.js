/***************************************************************************************************
 * objetivo: criar um sistema que diferencie numeros pares e impares para a empresa Cálculos SA
 * (oferecendo opção do que parecer para o usuário)
 * data: 22/09/24
 * autor: Eduarda
 * versão: 1.0
 ***************************************************************************************************/

function verificarDados (valor1, valor2, opcao){
    let numeroI = valor1
    let numeroF = valor2
    let tipo = opcao
    let status = true

    if(numeroI == '' || numeroF == '' || tipo == ''){
        console.log('ERRO: não é permitida a entrada de dados vazia')
        status = false
    
    }else if(isNaN(numeroI) || isNaN(numeroF) || tipo == ''){
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

function filtrarP(valor1, valor2){
    let numeroI = valor1
    let numeroF = valor2
    let status = true

    // let para guardar variáveis (lista/array)
    let numerosP = [] 
    let numerosIm = []

    // let para guardar a quantidade
    let quantPares = 0
    //let quantImpares = 0


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
                
             }else {}/*{
                numerosIm.push(numeroI)
                numeroI ++
                quantImpares ++
             }*/
        }
        // exibir os números em lista:
        // o join serviu para transformar os itens em "numerosP" em uma só string, para não exibir com aspas
        // o "\n" serviu para deixar os números em lista
        // console.log(`Lista de numeros pares:  \n${numerosP.join('\n')}`)
        // console.log(`Quantidade de números pares: ${quantPares}`)
        // console.log(`Lista de números ímpares: ${numerosIm.join('\n')}`)
        // console.log(`Quantidade de números ímpares: ${quantImpares}`)
    }
    return numerosP
}

function filtrarI(valor1, valor2){
    let numeroI = valor1
    let numeroF = valor2
    let status = true

    // let para guardar variáveis (lista/array)
    
    let numerosIm = []

    // let para guardar a quantidade
    let quantImpares = 0

     if(!verificarDados(valor1, valor2)){
        status = false
    }else {
        while(numeroI <= numeroF){
            if(numeroI %2 != 0)
            
            //adicionando os números pares ao let que estará guardando
            // push adiciona itens a lista criada
            numerosIm.push(numeroI)  
                numeroI ++
                quantImpares ++
        } 
    }
    
    return numerosIm
}



function identificar(valor1, valor2, opcao){
    let numeroI = valor1
    let numeroF = valor2
    let tipo = opcao
    let status = true

    if(!filtrar(valor1, valor2)){
        status = false 
    }else {
        if(tipo == 1){
            console.log(`Lista de numeros pares:  \n${numerosP.join('\n')}`)
            console.log(`Quantidade de números pares: ${quantPares}`)
        }else if(tipo == 2){
            console.log(`Lista de números ímpares: ${numerosIm.join('\n')}`)
            console.log(`Quantidade de números ímpares: ${quantImpares}`)
        }else if(tipo == 3){
            console.log(`Lista de numeros pares:  \n${numerosP.join('\n')}`)
            console.log(`Quantidade de números pares: ${quantPares}`)
            console.log(`Lista de números ímpares: ${numerosIm.join('\n')}`)
            console.log(`Quantidade de números ímpares: ${quantImpares}`)
        }else {
            console.log('ERRO: escolha outra opção')
        }
    }
    return 
}

console.log(identificar(90, 100, 3))
