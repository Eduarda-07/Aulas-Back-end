/* objetivo: desenvolver funções para uma futura api, para a escola Lion School
   data: 27/11/2024
   versão: 1.0
   autor: Eduarda de Jesus Silva*/

var moduloFuncoes1 = require ("./alunos")
// console.log(moduloFuncoes1)

var moduloCursos = require ('./cursos')
// console.log(moduloFuncoes2)

const listaDeCursos = function() {
    let cursosEncontrados = {}
    let cursos = []
    let status = false

   moduloCursos.cursos.forEach(function(item){
    status = true
    cursos.push(item)
   })
   cursosEncontrados.cursos = cursos

    if(status == true){
        return cursosEncontrados
    }else{
        return status
    }
}

// console.log(listaDeCursos())

const alunosMatriculados = function() {
    let status = false
    let alunos = []
    let alunosEncontrados = {}

    moduloFuncoes1.alunos.forEach(function(item){
        status = true
        alunos.push(item)
    })
    alunosEncontrados.alunos = alunos

    if(status == true){
        return alunosEncontrados
    }else{
        return status
    }
}

// console.log(alunosMatriculados())

const getAlunoMatricula = function(numeroMatricula){
    let status = false 
    let matricula = Number(numeroMatricula)
    let alunosEncontrados = {}

    moduloFuncoes1.alunos.forEach(function(item){
        if(Number(item.matricula) == matricula){
            status = true
            alunosEncontrados.aluno = item
        }
    })
    if(status == true){
        return alunosEncontrados
    }else{
        return status
    }
}

// console.log(getAlunoMatricula())

const getAlunosCursos = function (siglaCurso){
    let status = false
    let curso = String(siglaCurso).toUpperCase()
    let cursoAlunos = {}
    let alunosCurso = []

    moduloFuncoes1.alunos.forEach(function(item){
        if(String(item.curso.forEach).toUpperCase() == curso){
            status = true
            alunosCurso.push(item)
        }

        cursoAlunos.alunos = alunosCurso
    })
    if(status == true){
        return cursoAlunos
        
    }else{
        return status
    }
}

// console.log(getAlunosCursos('rds'))

const getAlunoStatus = function (alunoStatus){
    let status = false
    let statusA = String(alunoStatus).toUpperCase()
    let alunosS = {}
    let listaAlunos = []

    moduloFuncoes1.alunos.forEach(function(item){
        if(String(item.status).toUpperCase() == statusA){
            status = true

            listaAlunos.push(item)
        }

        alunosS.alunoStatus = listaAlunos
    })
    if(status == true){
        return alunosS
        
    }else{
        return status
    }
}

// console.log(getAlunoStatus('cursando'))

const getDisciplinaStatus = function (curso, disciplinaStatus){
    let status = false
    let nomeCurso = String(curso).toUpperCase()
    let cursoAlunos = {}
    let alunosCurso = []

    let statusD = String(disciplinaStatus).toUpperCase()
    let disciplinaS = {}
    let listaAlunos = []

    moduloFuncoes1.alunos.forEach(function(item1){
        if(String(item1.curso[0].sigla).toUpperCase() == curso){
            status = true
            alunosCurso.push(item1)
        }

        cursoAlunos.alunos = alunosCurso
    })

    moduloFuncoes1.alunos.forEach(function(item2){
        if(String(item2.curso[0].disciplinas[]).toUpperCase() == curso)
    })

    if(status == true){
        return alunosS
        
    }else{
        return status
    }
}
