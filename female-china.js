// Desafio - Aula dos Funcionarios Chineses

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
 
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) =>{

    return func.salario < funcAtual ? func : funcAtual

}

axios.get(url).then(response =>{

    const funcionarios = response.data    
    const  func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(func)
})

/*
Retorna:

{ id: 469,
  nome: 'Anet',
  sobrenome: 'Treweek',
  email: 'atreweekd0@histats.com',
  genero: 'F',
  cidade: 'Pengchang',
  pais: 'China',
  empresa: 'Yamia',
  salario: 17075.49 }
  
*/
