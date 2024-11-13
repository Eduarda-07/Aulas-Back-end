/************************************************************
 * objetivo: criar um sistema para gerenciar médias escolares 
 * de uma universidade  para empresa Cálculos SA
 * data: 11/09/24
 * autor: Eduarda
 * versão: 1.0
 ************************************************************/


// função para validar dados
function verificarDados(valor1, valor2, valor3, valor4, nomeAluno, nomeProf, sexoAluno, sexoProf, nomeCurso, nomeDiscplina){
    let nomeA = nomeAluno
    let nomeP = nomeProf
    let sexoA = sexoAluno
    let sexoP = sexoProf
    let nomeC = nomeCurso
    let nomeD = nomeDiscplina

    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    let nota1STR= String(nota1).replace(',', '.')
    let nota2STR= String(nota2).replace(',', '.')
    let nota3STR= String(nota3).replace(',', '.')
    let nota4STR= String(nota4).replace(',', '.')

    nota1 = Number(nota1STR)
    nota2 = Number(nota2STR)
    nota3 = Number(nota3STR)
    nota4 = Number(nota4STR)

    let status = true

    // tratamento para verificar entrada de dados vazia
    if( nomeA ==  '' || nomeP == '' || sexoA == ''|| sexoP == '' || nomeC == '' || nomeD == '' 
        || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){

        console.log('ERRO: É obrigatório a o preenchomento de todos os campos!')
        status = false

    // tratamento para verificar se é um número
    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log('ERRO: No campo das notas, é obrigatório a entrada somente de valores numéricos!')
        status = false

    // tratamento para verificar se as notas estão entre 0 e 100 
    }else if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){
        console.log('ERRO: É obrigatório a entrada de valores entre 0 e 100!')
        status = false
    }
    return status

    
}


// função para calcular a média
function calculo (valor1, valor2, valor3, valor4) {
    let status = true
    let resultado
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4
    

    if(!verificarDados (nota1, nota2, nota3, nota4)){
        status = false
    }else {
        resultado = Number(n1) + Number(n2) + Number(n3) + Number(n4) / 4
    }
    
    if (status == false){
        return false
    }else{
        return resultado
    }
}


function media (resultado){
    let situacao
    let status = true

    if(resultado >= 70){
        situacao = 'Aprovad'
    }else if(resultado < 50){
        situacao = 'Reprovad'
    }else {
        situacao = 'Exame' 
    }
    return situacao
}

function exame (resultado, notaExame){ 
    let notaEx = notaExame
    let mediaNova

    mediaNova = media + notaEx / 2
    return mediaNova
}

function generoA(sexoAluno){
    let sexoA = sexoAluno
    

    switch (sexoA.toUpperCase()) {
        case 'FEMININO':
            sexoA = 'a'    
            break;
        case 'MASCULINO':
            sexoA = 'o'
    }  
    return sexoA      
}

function geberoP(sexoProf){
    let sexoP = sexoProf

    switch (sexoP.toUpperCase()){
        case 'MASCULINO':
            sexoP = 'o'
            break;
        case 'FEMININO':
            sexoP = 'a'
            break;
    }

    return sexoP
}

console.log(`Relatório d${sexoA} alun${sexoA}:
Nome: ${nomeA}
NOme d${sexoP} prof: ${nomeProf}
Média: ${resultado}
Nota exame: ${notaEx}
Média final: ${mediaNova}
Situação: ${situacao}`)
