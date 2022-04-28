/* /* 1. 
Exercícios de interpretação de código
Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))

console.log(minhaFuncao(10))
a) O que vai ser impresso no console?
a. 10
   50
b.      
minhaFuncao(2);
10
minhaFuncao(10);
50

2.
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Essa funcao transforma todas as letras da frase recebida pelo usuario em
minusculas e determina se na frase contem a string "cenoura", retornando " true " ou "false";

b.i true 
  ii true
  iii false  */


 /* EXERCICIOS DE ESCRITA DE CODIGO 
 
 1.
 a. let sobreJeff() = function{console.log("Eu sou Jefferson, tenho 34 anos,moro no Rio de Janeiro e sou estudante.")}
 
 b. function infoUsuario (nome, idade ,cidade ,ocupacao) {
     let todasInfo = (`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${cidade} e sou ${ocupacao}`)

     return todasInfo


 }
infoUsuario("Jefferson",34,"Riodejaneiro","Barman") */
/* 'Eu sou Jefferson, tenho 34 anos, moro em Riodejaneiro e sou Barman' */

/* 2.
a.
 function numeros(numero1,numero2){
     numero1 = 10
     numero2 = 45
     let soma =numero1 + numero2
return soma  }
console.log(numeros())

 */


function numeros(num1,num2) {
  
    let resultado = num1 >= num2
    return resultado

    
}
console.log(numeros(4,5))
 
 
  
 function parOuNao(numero1)
 {
 numero1 = 45
 let resultado = (numero1 % 2) === 0 
 return resultado
}

parOuNao()
false 

/* d. */ 
 function estudandoFeriado(mensagem){  
 return`${mensagem.length} ${mensagem.toUpperCase() }`}
console.log(estudandoFeriado("estudando no feriado"))
 console.log(estudandoFeriado("andrea manda muito bem "))

/*  3. */ 
function operacoesMatematica(num1, num2){
   
    let soma = num1 + num2
    let subtracao = num1 - num2
    let multiplicacao = num1 * num2
    let divisao = num1 / num2
   return soma  
   return subtracao
   return divisao
   return multiplicacao */ */
}
    