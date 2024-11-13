var moduloFuncoes = require ('./modulo/funcoes.js')

var readline = require ('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome: '),function(nomeAluno){
    let nomeA = nomeAluno

    entradaDeDados.question('Digite o nome do professor: '), function(nomeProf){
        let nomeP = nomeProf

        entradaDeDados.question('Digite o sexo do aluno: '), function(sexoAluno){
            let sexoA = sexoAluno

            entradaDeDados.question('Digite o sexo do professor: '), sexoProf{
                let sexoP = sexoProf

                entradaDeDados.question('Digite a primeira nota: '), function(valor1){
                    let nota1 = valor1

                    entradaDeDados.question('Digite a primeira nota: '), function(valo2){
                        let nota2 = valor2

                        entradaDeDados.question('Digite a terceira nota: '), function(valor3){
                            let nota3 = valor3

                            entradaDeDados.question('Digite a quarta nota: '), function(valor4){
                                let nota4 = valor4

                                // let resultado = calculo()
                                // let situacao = media(resultado)
                                //  if(situacao == 'exame')
                                
                            }
                            
                        }
                            
                    }
                        
                }
                           
            }
        }
        
    }

}