/*************************************************************
 * objetivo: exercício para calculo de médias escolares, com a utilização de tratamento
 * de dados e conversão de dados com estruturas coondicionais
 * data: 07/08/24
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

//entrada de nome do aluno
entradadedados.question ('digite o nome do aluno: ', function (nome){
    // variável local que recebe o argumento da função
    let nomeAluno = nome

    // entrada do nome do curos
    entradadedados.question ('digite o nome do curso: ', function (curso){
        // variável local que recebe o argumento da função
        let nomeCurso = curso

        // entrada de dados da nota 1 do aluno
        entradadedados.question ('digite a primeira nota: ', function (valor1){
            // variável local que recebe o argumento da função
            let nota1 = valor1

            // entrada de dados da nota 2 do aluno
            entradadedados.question ('digite a segunda nota: ', function (valor2){
                // variável local que recebe o argumento da função
                let nota2 = valor2

                // entrada de dados da nota 3 do aluno
                entradadedados.question ('digite a terceira nota: ', function (valor3){
                    // variável local que recebe o argumento da função
                    let nota3 = valor3

                    // entrada de dados da nota 4 do aluno
                    entradadedados.question ('digite a quarta nota: ', function (valor4){
                        // variável local que recebe o argumento da função
                        let nota4 = valor4
                        let resultado 
                        let situacao 
                        /* operadores de comparação:
                            == verifica a igualdade entre dois valores
                            <= verifica se o valore é menor ou igual
                            >= verifica de o valor é maior ou igual
                            < verifica se o valor é menor
                            > verifica se o valor é maior
                            != verifica a diferença entre dois conteúdos
                            === verificar a igualdade entre dois conteúdos e os tipos de dados

                            ==! verificar a igualdade entre os conteúdos e tipos de dados
                            !== verificar conteúdos diferentes e tipos de dados iguais
                            !=! verificar conteúdos diferentes e tipos de daods diferentes
                         */

                        /* operadores lógicos:
                            E  &&  AND
                            OU  || OR
                            NÃO  !  NOT
                        */

                            // tratamento de entrada de dados vazio
                        if (nomeAluno == '' || nomeCurso == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                            console.log ('ERRO: É obrigatório o preenchimento de todas as entradas de dados')
                        }else{

                            /// Tratamento para validar se o conteúdo das variáveis
                            // possui alguma letra ou não
                            // isNan() -> função para verificar a ocorrencia de caracters não numericos
                            if (isNaN(nota1)== true || isNaN(nota2) == true || isNaN (nota3) == true || isNaN (nota4) == true){
                                console.log ('ERRO: É obrigatório a entrada de valores numéricos nas notas')
                            }else{
                            //tratamento de entrada de valores apenas entre 0 e 10
                                if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10){
                                    console.log('ERRO: É obrigatório a entrada de valores entre 0 e 10')
                                }else{
                                    resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                                    //console.log(resultado)
                                
                                    // validação da situação do alunos
                                    if( resultado >= 7){
                                        situacao = "APROVADO"
                                    }else{
                                        if( resultado >= 5 || resultado <= 6.9){
                                            situacao = "RECUPERAÇÃO"
                                        }else if (resultado < 5){
                                                situacao = "REPROVADO"
                                        }
                                    } // finaliza o processamento da situação do aluno

                                    // impressão do boletim do aluno
                                    console.log(`
                                    Boletim do aluno: \n  
                                    Nome do aluno:  ${nomeAluno} \n 
                                    Nome do curso:  ${nomeCurso} \n 
                                    Notas:  ${nota1} , ${nota2} , ${nota3} , ${nota4} \n 
                                    Média:  ${resultado.toFixed(1)} \n
                                    Situação:  ${situacao}
                                    `)
                                    
                                //toFixed -> indicar quantas casas decimais a média pode ter
                                // \n-> pular linha no console (usar `) 

                                        entradadedados.close()
                                }
                            }
                            
                        }
                    })
                })
            })
        })
    }) 
})