/* Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil,
 pode rodar no seu computador **para analisar e pensar sobre o resultado.**  */

 /* 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?  */
/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) */
/* No codigo a variavel valor recebe o valor de 0 
no for : comeca dando o valor de i = 0 ,
enquanto i for menor que 5 continua a repeticao ,
adicionando i + 1 
valor é  10 porque a variavel valor = valor +  i
*/
/* 2 a. Vai ser impresso no console  
  19
 21
 23
 25
 27
 30 */
/* b. Se eu quisesse acessar o indice de cada elemento eu usaria  */
/*   const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
  let numero1 = 0
for (let numero of lista) {
  if (numero >= lista.length) {
      numero1  ++
		console.log(numero1, numero)
	}
}   */

/* 3 */
/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

*
**
***
****
 */

/* EXERCICIOS DE ESCRITA DE CODIGO

1. */
/*   let qtdBichinhos = Number(prompt("Quantos bichinhos voçê tem ?"))
let qtdAtual = 0 
if(qtdBichinhos === 0){
    console.log( "Que pena! Você pode adotar um pet")}
 else {
 let nomesBichinhos =(prompt("Digite o nome deles"))
 nomesBichinhos = [nomesBichinhos]
 console.log(nomesBichinhos)


}  
 

/*   2. */ 
  /* let arrayOriginal =[25,32,63,54,55,67,88,19] 

 /* function exercicio2(){
    for(i of arrayOriginal){
        console.log(i)
        }
    } 
 exercicio2() 
 */ 

 
/*  b.  */
/* function exercicio2B(){
for(i of arrayOriginal){
    console.log(i/10)
}
}
exercicio2B() */

/* / c */
/*  let novoArray = []
 for(i of arrayOriginal){
    if ( i % 2 === 0) { 
     novoArray.push(i)
    }
} 
console.log(novoArray)  */  
/*  d. */
/*  i = 10
let numero =45
let exercicio2D = [`O elemento do índex ${i} é: ${numero}`]
    console.log(exercicio2D) 
 */
/*  e. 

const valorMaximo = 88
const valorMinimo = 19
for(let i of arrayOriginal){

} */
 