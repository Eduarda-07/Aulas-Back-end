/**************************************************************************
 * objetivo: resolver o desafio 4, testando conhecimentos de array e json
 * data: 16/10/24
 * versão: 1.0
 * autor: Eduarda de Jesus
 **************************************************************************/

var moduloFuncoes = require ('./estados_cidades')
//console.log(moduloFuncoes)

const getListaDeEstados = function(){
    let status = false
    let siglas = {}
    let siglasEcontradas = []

   moduloFuncoes.listaDeEstados.estados.forEach(function(item){
        status = true
        siglasEcontradas.push(item.sigla)
        //console.log(siglasEcontradas)
    })
    siglas.uf = siglasEcontradas
    siglas.quantidade = siglasEcontradas.length

    if(status == true){
        return siglas
    }else{
        return status
    }
}

//console.log(getListaDeEstados())


const getDadosEstados = function (nomeEstado){
    let status = false
    let siglaEstado = String(nomeEstado).toUpperCase()
    let filtro = {}

    moduloFuncoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == siglaEstado){
            status = true
            filtro.uf = item.sigla 
            filtro.descricao = item.nome
            filtro.capital = item.capital
            filtro.regiao = item.regiao
            //console.log(filtro)
        }
     
    })
    if(status == true){
        return filtro
    }else{
        return status
    }

}
//console.log(getDadosEstados('ac'))


const getCapitalEstado = function (siglaEstados){
    let siglaEstado = String(siglaEstados).toUpperCase() 
    let filtro = {}
    let status = false

    moduloFuncoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == siglaEstado){
            status = true
            filtro.uf = item.sigla 
            filtro.descricao = item.nome
            filtro.capital = item.capital

        }
    })
    if(status == true){
        return filtro
    }else{
        return status
    }
}

//console.log(getCapitalEstado('sp'))
    
const getEstadosRegiao = function (nomeRegiao){
    let regiao = String(nomeRegiao).toUpperCase()
    let filtro = {}
    let estados = []
    let status = false
    

    moduloFuncoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.regiao).toUpperCase() == regiao){
            status = true
            filtro.regiao = item.regiao
            filtro.estados = estados
            
            let sigla = {}
            sigla.uf = item.sigla
            sigla.decricao = item.nome
            estados.push (sigla) 
           
            //console.log(filtro)
        }
    })

    if(status == true){
        return filtro
    }else{
        return status
    }
}
//console.log(getEstadosRegiao('sul'))

const getCapitaisPais = function (){
    let status = false
    let capitaisP = {}
    let listaCapitais = []
    capitaisP.capitais = listaCapitais

    moduloFuncoes.listaDeEstados.estados.forEach(function(item){
        
        //if para filtrar só o que eu quero, deixando de exibir os itens com undefined
        if(item.capital_pais != undefined){
            status = true
            let teste = {}
            teste.capital_atual = item.capital_pais.capital
            teste.uf = item.sigla
            teste.descricao = item.nome
            teste.capital = item.capital
            teste.capital_pais_ano_inicio = item.capital_pais.ano_inicio
            teste.capital_pais_ano_termino = item.capital_pais.ano_fim
            //teste.descricao = item.capital_pais
            listaCapitais.push(teste)
        }
    })
    if(status == true){
        return capitaisP
    }else{
        return status
    }
}
//console.log(getCapitaisPais())

const getCidades = function (siglaEstado){
    let estado = String(siglaEstado).toUpperCase()
    let cidades = {}
    let listaCidades = []
    let status = false

    moduloFuncoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == estado){
            status = true
            cidades.uf = item.sigla
            cidades.descricao = item.nome
            cidades.quantidade_cidades = item.cidades.length

        item.cidades.forEach(function(item){
            listaCidades.push(item.nome)
            cidades.cidades = listaCidades 
        })
            
        }

    })

    if(status == true){
        return cidades
    }else{
        return status
    }
}
//console.log(getCidades('ac'))

module.exports = {
    getListaDeEstados,
    getDadosEstados,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitaisPais,
    getCidades
}