// Arrays [], Spread (operador que espalha infos do array anterior e pode atribuir um novo array) e Métodos (estruturar informações)

const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

// Acessar infos num array
console.log(alunasGama[2]) 


// Operador spread (...)

const alunasXp = [...alunasGama, "Simara"]

console.log(alunasXp)


// Métodos de iteração

// map
alunasXp.map(aluna => console.log(aluna))

// Ao invés de:
//  for (let i = 0; i < alunasXp.length; i++)
//   console.log(alunasXp[i])



// filter
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(numerosPares)



// find 
const produtos = ["geladeira", "fogao", "cama", "mesa"]

const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)

const encontraMesa = produtos.find(produto => produto === "mesa")
console.log(encontraMesa)



//sort - ordenação 

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a)
console.log(numerosOrdenadosDecrescente)



//reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
},5)

console.log(soma) //75

