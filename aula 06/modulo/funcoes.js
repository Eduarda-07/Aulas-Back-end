/*************************************************************
 * objetivo: Trabalhar com ARRAY e JSON
 * data: 25/09/24
 * versão: 1.0
 * autor: Eduarda de Jesus
 *************************************************************/

/*********************************************
 * [] -> ARRAY (lista)
 * {} -> JSON (forma de organização de dados)
 *********************************************/

const comandosBasicos = function (){
    //primeira forma de criar array
    
    let listaDeNomes = ['José', 'Maria', 'João', 'André']

    //imprime o objeto array
     
    console.log(listaDeNomes)

    //imprime o objeto array em formato de tabela, mostrando os indices
    console.table(listaDeNomes)

    //imprime o conteudo de um indices
    console.log(listaDeNomes[1])

    // typeof verifica o tipo de dados 
    console.log(typeof(listaDeNomes))

   // segunda forma de criar objeto do tipo array
    let listaDeClientes = []
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'

    console.log(listaDeClientes)

    //terceira forma de criar objeto do tipo array
    let listaDeProdutos = []
    listaDeProdutos.push('Teclado')
    listaDeProdutos.push('Monitor')
    listaDeProdutos.push('Gabinete')
    listaDeProdutos.push('Mouse', 'Placa mãe', 'Memoria', 'HD', 'Caixa de som')

    console.table(listaDeProdutos)

    //adicionar item no topo 
    listaDeProdutos.unshift('Impresora')
    console.table(listaDeProdutos)

    //apagar o ultimo item da lista
    listaDeProdutos.pop()
    console.table(listaDeProdutos)

    //apagar item do topo da lista
    listaDeProdutos.shift()
    console.table(listaDeProdutos)

    //apagar item de qualquer posição posição
    //(3 - indice- , 2 - remover os dois proximos itens a partir do indice 3- )
    listaDeProdutos.splice(3,2)
    console.table(listaDeProdutos)

    console.log(listaDeProdutos.length)
}

const percorrerArray = function (){
    let nomeDeAlunos = [ 'Ana Maria',
                         'José da Silva',
                         'Antonio Carlos',
                         'Carlos André',
                         'Ricardo da Silva',
                         'Luiz Henrique',
                         'Renata da Silva',
                         'João Ântonio',
                         'Wilson de Souza']
    let contador = 0

    //nomeDeAlunos.length -> retorna a quantidade de elementos dentro da Array
    console.log('Exemplo do while')
    while(contador < nomeDeAlunos.length){
        // console.log(nomeDeAlunos[5])
        console.log(nomeDeAlunos[contador])
        contador += 1
    }

    console.log('Exemplo do FOR')
    for(let contador = 0; contador < nomeDeAlunos.length; contador ++){
        console.log(nomeDeAlunos[contador])
    }

    console.log('Exemplo do ForEach')
    nomeDeAlunos.forEach(function(item){
        console.log(item)
    })
    
}

const filtrarProduto = function(nomeproduto){
    let produto = String(nomeproduto). toUpperCase()
    let status = false
    let listaDeProdutos = []
    listaDeProdutos.push ('Teclado',
                          'Mouse',
                          'Caixa de som',
                          'Impressora',
                          'Monitor',
                          'Gabinete',
                          'Memória',
                          'HD',
                          'SSD',
                          'Placa de vídeo',
                          'Placa mãe')
    
    /*listaDeProdutos.forEach(function(item){
        if(String(item).toUpperCase() == produto){
            status = true
             return status
        }
    })*/

    // includes() -> permite verificar se existe um conteudo dentro do array (retorna true ou false)
    // se vc quiser pesquisar por palavras chaves em vez do item exato
    /*listaDeProdutos.forEach(function(item){
        if(String(item).toUpperCase().includes(produto)){
            status = true
             return status
        }
    })*/
    
    
    // se vc quiser pesquisar por palavras chaves em vez do item exato
    listaDeProdutos.forEach(function(item){
        if(String(item).toUpperCase().indexOf(produto) == 0){
            status = true
        }
             
        
    })

   return status
   
}
//console.log(filtrarProduto('Placa'))



// primeira forma de criar 
// criando um objeto do tipo JSON
const conceitoJSON = function() {
    let listaDeClientes = []
    let nomes = listaDeClientes

    let cliente = {nome: 'José da Silva', telefone: 11978784545, email: 'jose@gmail.com'}

    // exibe todos os atributos do objeto JSON
    console.log(cliente)
    console.table(cliente)

    //exibe apenas um atributo do JSON 
    console.log(cliente.email)
    
    //segunda forma de criar
    let cliente2 = {}
    cliente2.nome = 'Maria da Silva'
    cliente2.telefone = 11940028922
    cliente2.email = 'maria@gmail.com'

    console.log(cliente2)

    // adiciona no array objetos do json
    listaDeClientes.push(cliente, cliente2)
    console.log(listaDeClientes)
    console.table(listaDeClientes)

    // exibe dados da array referente a um indice, e trazendo pelo atributo do json
    console.log(listaDeClientes[1].nome)

    // percorre o array de clientes e retorna somente o nome do clientes
    listaDeClientes.forEach(function(item){
       
        console.log(listaDeClientes.nome)
        
    })

}

const cadastroProdutos = function(){
    let marca = []
    marca.push(
        {nome: 'Dell', telefone: '11912345678', emial:'dell.compras@gmail.com'},
        {nome: 'Microsoft', telefone: '11987654321', email: 'microsoft.compras@gmail.com'},
        {nome: 'LG', telefone: '11923456781', email: 'lg.compras@gmil.com'},
        {nome: 'Asus', telefone: '11923456782', email: 'asus.compras@gmil.com'}
    )
    
    let categorias = []
    categorias.push(
        {nome: 'Hardware'},
        {nome: 'Perifericos'},
        {nome: 'Smart home'},
        {nome: 'Games'},
        {nome: 'Computadores'},
        {nome: 'Escritorio'}
    )

    let cores = []
    cores.push(
        {nome: 'Preto', hexadecimal: '#00000'},
        {nome: 'Branco', hexadecimal: "#fffff"},
        {nome: 'Cinza', hexadecimal: '#999896'},
        {nome: 'Azul', hexadecimal:'#083fa6'}
    )

    let produtos = []
    produtos.push(
        {   nome: 'Mouse', 
            descricao: 'Mouse optico com fio', 
            preco: '80.50', 
            quantidade: 50, 
            marca: [
                marca[0]
                    ],
            categoria: [
                categorias[1],
                categorias[5]
            ],
            cor: cores
        },
        {   nome: 'Teclado',
            descricao: 'Teclado com foi RGB',
            preco: '200',
            quantidade: 35,
        marca: [
            marca[1]
            ],
        categoria: [
            categorias[1],
            categorias[2],
            categorias[3],
            categorias[5]
            ],
        cor: cores
        },
        {nome: 'Monitor',
        descricao: 'Monitor 21.5, Full HD',
        preco: '645.05',
        quantidade: 20,
        marca: [
            marca[0]
            ],
        categoria: [
            categorias[0],
            categorias[1],
            categorias[2],
            categorias[4],
            categorias[5]
            ],
        cor: [
            cores[0]
            ]
        },
        {   nome: 'Monitor',
            descricao: 'Monitor Gamer Alienware 25',
            preco: '2849.05',
            quantidade: 30,
            marca: [
            marca[0]
            ],
        categoria: [
            categorias[0],
            categorias[1],
            categorias[3],
            categorias[4],
            ],
        cor: [
            cores[0],
            cores[1],
            cores[2]
            ]  

        },
        {   nome: 'TV',
            descricao: 'Smart TV 50 polegadas',
            preco: '3417.10',
            quantidade: 60,
        marca: [
            marca[2]
            ],
        categoria: [
            categorias[2]
            ],
        cor: [
            cores[0],
            cores[1]
            ]}
    )
    //console.log(produtos)
    //console.log(produtos[0].marca[0].nome)
    //console.log(produtos)
    return produtos
}

const pesquisarProduto = function (nomeproduto){
    let nome = String(nomeproduto). toUpperCase()
    let listaDeProdutos = cadastroProdutos()
    let produtosEncontrados = []

    listaDeProdutos.forEach(function(item){
        if(String(item.nome).toUpperCase() == nome){
            produtosEncontrados.push(item)
        }
    })

    if (produtosEncontrados.length > 0) {
      return produtosEncontrados
    }else{
         return false
    }
}

const listarProdutos = function(nomeproduto){
    let status = false

    let nome =  String(nomeproduto).toUpperCase()

    let produtos = pesquisarProduto(nome)

    if(produtos != false){
        status = true
        produtos.forEach(function(item){
            console.log(`O nome do produto: ${item.nome}`)
            console.log(`Detalhes do produto: ${item.descricao}`)
            console.log(`Quantidade do produto: ${item.quantidade}`)
            console.log(`Preço do produto: ${item.preco}`)
            item.marca.forEach(function(itemMarca){
                console.log(`-- Marca: ${itemMarca.nome}`)
            })
            item.cor.forEach(function(itemCor){
                console.log(`-- Cor: ${itemCor.nome}`)
            })
            item.categoria.forEach(function(itemCategoria){
                console.log(`-- Categoria: ${itemCategoria.nome}`)
            })
        })
    }
    return status
}

//console.log(listarProdutos('teclado'))
console.log(pesquisarProduto('monitor'))
//pesquisarProduto()
//cadastroProdutos()
// conceitoJSON()
//console.log(filtrarProduto('Placa'))
//filtrarProduto()
//percorrerArray()
// comandosBasicos()