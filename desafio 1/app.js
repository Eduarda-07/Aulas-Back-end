/**********************************************************************
 * objetivo: realizar calculo de juros composto da empresa "VIVA MODAS"
 * data: 31/07/24 
 * autor: Eduarda
 * versão: 1.0
 **********************************************************************/

// import da biblioteca que permite a interação de entrada de dados
     // pelo usuário no teminal
     var readline = require('readline')

// cria um objeto de interfce de digitação para entrada de de dados pelo usuário no terminal 
var entradadosvalores = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

// através do objeto entradaDeDados estammos utilizando o método question pra escrever
// uma mensagem para o usuário, e através da função de CALL BACK  do método question
// conseguimos obter o valor digitado pelo usuário
entradadosvalores.question ('digite o capital inicial: ', function (p) {
    var capitalinicial = parseFloat (p)

    entradadosvalores.question ('digite a taxa de juros anual: ', function (r) {
        var taxaanual = parseFloat (r)
    
        entradadosvalores.question ('digite o número de vezes que o juros é composto por ano: ', function (n) {
            var jurosporano = parseFloat (n)

            entradadosvalores.question ('digite o tempo em anos:  ', function (t) {
                 var tempoemanos = parseFloat (t)

                 var resultado1 = (taxaanual) / 100
                 var resultado2 = (resultado1) / (jurosporano)
                 var resultado3 = (resultado2) + 1
                 var resultado4 = (jurosporano) * (tempoemanos)
                 var resultado5 = (resultado3) ** (resultado4)
                 var resultado6 = (capitalinicial) * (resultado5)

                 console.log ('o montante é: ' + resultado6)

                 entradadosvalores.close()
            })
        })
    })
})