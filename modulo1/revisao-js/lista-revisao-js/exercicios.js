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

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}