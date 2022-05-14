// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

   return array.length
}
retornaTamanhoArray(array.length)
retornaTamanhoArray()
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  array.reverse()
  return array
}
retornaArrayInvertido(array)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a,b)=> a -b)
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
           numerosPares.push(array[i])
        }
    }
    return numerosPares;
}
retornaNumerosPares(numerosPares) 

 
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let novoArray = []
 for (let i = 0 ; i < array.length; i ++ ){
   if(array[i] % 2 === 0){
    novoArray.push(array[i]* array[i])

    
   }
 }
   return novoArray
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  // recebendo array de numeros 
  let maiorNumero =[]
  array.sort((a,b)=> a - b)
  maiorNumero = array[array.length-1]
  return maiorNumero
}

// EXERCÍCIO 07
//Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:
/* - `maiorNumero` → contém o maior número
- `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
- `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)
 */
  //⚠️   Obs: para os testes funcionarem, as propriedades do objeto devem possuir os exatos nomes acima

function retornaObjetoEntreDoisNumeros(num1, num2) { 
  if(num1 > num2 ){
    let maiorNumero = num1
  }
else if (num2 > num1){
  let maiorNumero = num2
}

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

  /* for (let i = 0 ; i < n.length; i ++ ){
    if(n[i] % 2 === 0) 
  }
 */
}
retornaNumerosPares(n[0,1,2])
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoB === ladoC ){
  return "equilatero"
} else if (ladoA === lado2 || ladoA === ladoC || ladoC === ladoB){
  return " isósceles"
}
else {
  return "escaleno"
}
}
calassi
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 //array com os segundo maior e primeiro maior 
 array.sort((a,b)=> a -b)
 const segundoEprimeiroMaiores = array.filter(numero,indice)
return segundoEprimeiroMaiores[0,1]
 
}
retornaSegundoMaiorESegundoMenor(array[array.length-1], array[0])
// EXERCÍCIO 11

function retornaChamadaDeFilme(filme) {
 return(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`)

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const anonimo = {
     ...pessoa,
     nome : "ANÔNIMO"
   }
   return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

  const podeEntrar = pessoas.filter((pessoa) =>
   pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
  return podeEntrar
}  
 

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
 const naoPodeEntrar = pessoas.filter((pessoa)=> 
 pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60)
return naoPodeEntrar
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
/* function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort (function(a, b) )
    if(a.nome < b.nome) {
      return -1;
    } else {
      return true;
    
   
}
} */
// EXERCÍCIO 15B
 function retornaArrayOrdenadoPorData(consultas) {
   
}