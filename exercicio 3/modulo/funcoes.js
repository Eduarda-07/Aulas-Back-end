/***********************************************************************
* objetivo:Criar um sistema para gerenciar o cálculo de uma tabuada,
* conforme requisitos abaixo (empresa Cálculos SA) 
* data: 18/09/24
* autor: Eduarda 
* versão: 1.0
***********************************************************************/

// validação dos dados
function verificarDados(tabuadaI, tabuadaF, numeroI, numeroF){
    let Ti = tabuadaI
    let Tf = tabuadaF
    let Ni = numeroI
    let Nf = numeroF
    let status = true

    if (Ti == '' || Tf == '' || Ni == '' || Nf == ''){
        console.log('ERRO: é obrigatório o preenchimento de todos os campos')
        status = false
    }else if (Ti < 2 || Ti > 100 || Tf < 2 || Tf > 100){
        console.log('ERRO: Não será posível calcular a tabuada de valores abaixo de 2 e acima de 100, tente outos números')
        status = false
    }else if (Ni < 1 || Ni > 50 || Nf < 1 || Nf > 50){
        console.log('ERRO: Não será possível mostrar a tabuada utilizando números acima de 50 e menores que 1')
        status = false
        
    }else if(isNaN(Ti) || isNaN(Tf) || isNaN(Ni) || isNaN(Nf)){
        console.log('ERRO: É obrigatório a entrada de valores numeriocos')
    }
        
    return status
}

function calculoTabuada(tabuadaI, tabuadaF, numeroI, numeroF){
    let Ti = tabuadaI
    let Tf = tabuadaF
    let contadorI = numeroI
    let contadorF= numeroF
    let status = true
    let tabuada = Ti
    
    while(Ti <= Tf){
      console.log(`Tabuada do ${tabuada}: `)
        while (contadorI <= contadorF ){

            resultado = Ti * contadorI
            console.log(`${Ti} x ${contadorI} = ${resultado}
                        `)
            contadorI = contadorI + 1
            
        }
        contadorI = numeroI
        Ti = Ti + 1
        tabuada ++
       
    }
    
    return status
}


console.log (calculoTabuada( 2, 4.5, 2,10))

