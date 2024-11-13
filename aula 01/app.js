/*******************************************************************
 * Objetivo: conhecer os primeiros comandos do node.js
 * Data: 31/07/24
 * Autor: Eduarda
 * Versão: 1.0
 ********************************************************************/

//permite exibir uma mensagem no terminal
console.log('Exercício 01 - node.js')

/* criação de variáveis:
var -> permite criar variáveis do escopo global (método tradicional desde dec. 90)
let -> permite criar uma variável de escopo local (onde irá funcionar somente dentro daquele bloco)
const -> permite criar espaço em memória de conteúdos que não sofrem mudanças dutrante o projeto
*/

var nome = "josé"

// typeof -> permite identificar o tipo de dados de uma variável
     // ( string, number, boolean e object)

console.log (typeof (nome))

//concatenação de conteúdos 
console.log ('o conteúdo da variável é: ' + nome)


var valor1 = parseFloat('10.5')
var valor2 = '20.8'

/* paeseInt() -> permite converter uma string para número inteiro
   parseFloat() -> permite converter string para número real
   number -> permite converter uma string para numero real ou inteiro (atual)
*/

var resultado = parseFloat (valor1) + parseFloat (valor2)

// concatenação tradicioal
console.log ('o resultado da soma é: ' + resultado)

/* ou 
console.log (`o resultado da soma é: ${resiltado}`)
      (concatenação reduzida)
*/


