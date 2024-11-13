/*******************************************************************
 * objetivo: API para retornar dados de estados e cidades do Brasil
 * data: 30/10/24
 * versão: 1.0
 * autor: Eduarda de Jesus
 *******************************************************************/

/*
    Para criar uma API devemos instalar:
        ° express  -> npm install express --save (criar API)
        ° cors -> npm install cors --save (Serve para as permissões da API)
        ° body-parser -> npm install body-parser --save (Serve para a API receber dados na requisição)
 */

// import das bibliotecas
 const express = require('express')
 const cors = require('cors')
 const bodyParser = require('body-parser')

// inicia a utilização do express
 const app = express()

// response - significa a resposta da API
// require - significa a chegada de dados na API

app.use((request, response, next) =>{

    // permissão de onde virão as requisições na API
    // * - significa que está liberado para qualquer máquina
    // Caso queira coloque o IP da máquina que vai realizar as requisições
    response.header('Access-Control-Allow-Origin', '*')

    /* permissão de quais métodos do http a API irá responder:
        get - pegar dados da API 
        post - adicionar dados da API 
        put - alterar dados da API 
        delete - apagar dados da API  */
    response.header('Access-Control-Allow-Methods', '')

    app.use(cors())// aplica as configurações do header para o CORS

    next()

})

const estadosCidades = require('./modulo/funcoes')
//endpoint para retornar todos os dados
app.get('/v1/estados-cidades/lista-siglas', cors(), async function(request, response){
    
    //import das funções
    //let estadosCidades = require('./modulo/funcoes')

    // chama a função que retorna todos os estados
    let dados = estadosCidades.getListaDeEstados()

    // resposta da api com json e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar um estado'})
    }
    
})

//endpoint que retorna os dados de um estado filtrando pela sigla
app.get('/v1/estados-cidades/estado/:sigla', cors(), async function(request, response){

    //recebe o conteúdo da variável sigla que será enviada na URL da requisição peo modelo de paametro - params
    let uf = request.params.sigla

    //console.log(uf)

    // chama a função que irá receber a sigla e retornar os dados referente ao estado
    let dados = estadosCidades.getDadosEstados(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar um estado'})
    }
})

app.get('/v1/estados-cidades/capital/estado', cors(), async function(request, response){

    // recebe a variavel sigla através do modelo query string 
    let uf = request.query.sigla

    //console.log (uf)

    let dados = estadosCidades.getCapitalEstado(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar dados'})
    }
})

app.get('/v1/estados-cidades/regiao/estado', cors(), async function(request, response){

    // recebe a variavel sigla através do modelo query string 
    let uf = request.query.regiao

    let dados = estadosCidades.getEstadosRegiao(uf)

    

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar dados'})
    }
})

app.get('/v1/estados-cidades/capital/pais', cors(), async function(request, response){

    let dados = estadosCidades.getCapitaisPais()

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar um estado'})
    }
})

app.get('/v1/estados-cidades/cidades/', cors(), async function(request, response){

    let cidade = request.query.sigla

    let dados = estadosCidades.getCidades(cidade)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar um estado'})
    }
})

//executa a api e faz com que fique aguardando novas requisições
app.listen('8080', function(){
    console.log('API funcionando e aguardadndo requisições')
})
