/*  objetivo: desenvolver uma função e uma API para cada requisição do projeto Whats
    data: 28/01/25
    versão: 1
    autora: Eduarda Silva
*/


var moduloContatos = require ('./contatos')
// console.log(moduloContatos)

const getDadosPessoais = function(numeroTelefone){
    let telefoe = Number(numeroTelefone)
    let dadosEcontrados = {}
    let status = false

    moduloContatos.contatos.whatsUsers.forEach(function(item){
        if(Number(item.number) == telefoe){
            status = true
            dadosEcontrados.id = item.id
            dadosEcontrados.criado_em = item.created_since
            dadosEcontrados.conta = item.account
        }
    })
    if(status == true){
        return dadosEcontrados
    }else{
        return status
    }
}
console.log(getDadosPessoais('11987876567'))