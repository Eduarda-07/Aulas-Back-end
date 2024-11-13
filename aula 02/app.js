/**********************************************************************
 * objetivo: manipular entrada e saída de dados com interaçao do usiário
 * data: 31/07/24 
 * autor: Eduarda
 * versão: 1.0
 **********************************************************************/

// import da biblioteca que permite a interação de entrada de dados
     // pelo usuário no teminal
var readline = require('readline')

// cria um objeto de interfce de digitação para entrada de de dados pelo usuário no terminal 
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

// através do objeto entradaDeDados estammos utilizando o método question pra escrever
// uma mensagem para o usuário, e através da função de CALL BACK  do método question
// conseguimos obter o valor digitado pelo usuário
entradaDeDados.question ('digite seu nome: ', function (nome) {
    var nomeusuario = nome 
    //console.log ('o usuário é : ' + nome)

    entradaDeDados.question ('digite seu email: ', function (email){
        var emailusuario = email
        //console.log (`o email do usuário ${nome} é  ${email}`)

        entradaDeDados.question ('digite seu curso: ', function (curso) {
            var cursoruario = curso
            console.log (`o curso do usuario ${nome}, com email ${email} é ${curso} `)

            // fechar o objeto de entrada de dados no terminal
            entradaDeDados.close()
        })
    
    })

})

