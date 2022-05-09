/* Exercicio de interpretacao de codigo  */
/*  a. 
o codigo pede como pergunta um numero ao usuario,
que retorna como number em uma variavel que na estrutura
condicional em que se o resto da divisao entre o numero 
pedido pelo usuario pelo numero 2 for zero , imprime 
uma mensagem "Passou no teste." senao imprime "Não passou no teste."

b. 
numeros em que o resto da divisao por 2 é igual a zero , numeros pares 
c. 
numeros em que o resto da divisao por 2 nao é igual a zero , numeros impares */

 /*2 
a. O codigo serve para imprimir no console a mensagem com a fruta escolhida,
juntamente com o valor de cada fruta 
b. 
O preço da fruta maça  é  R$ 2,21
c. 
O preço da fruta  Pêra  é  R$  5 */ 

/* 3.
a. 
A primeira linha esta pedindo para que o ususario escreva um numero
b. 
Vai imprimir a mensagem " Esse numero passou no teste " , se fosse -10 aparece um erro 
como se a variavel mensagem nao foi definida
c. 
a variavel mensagem foi criada dentro da estrutura condicional sem o modo switch e sem o break 
entao a execucao do codigo nao sai do bloco 
 */

/* Exercicio de escrita de codigo  */
/* 1
  const idadeUsusario = Number(prompt("Escreva sua idade "))
 if (idadeUsusario > 18 ){
 console.log("Você pode dirigir")}
   else {
 console.log("Você não pode dirigir.")
   } */
 /* 2 */
/* const turnoAlunos = prompt("Digite M para turno(matutino), V para turno (Vespertino) ou N (Noturno)").toUpperCase()

if  (turnoAlunos === "M"){
 console.log("Bom dia!")
} else if (turnoAlunos ==="V"){
    console.log("Boa Tarde!")
} else  (turnoAlunos === "N"); {
 console.log("Boa noite!")
};
 */
/* 3.
const horarioAlunos = prompt("Digite M para turno(matutino), V para turno (Vespertino) ou N (Noturno)").toUpperCase()
 switch(horarioAlunos){
     case "M":
     console.log("Bom dia!")
     break
     case "V":
     console.log("Boa tarde!")
     break
     case "N":
     console.log("Boa noite!")    
 }
 */
/* 4
const cinemaDeHoje = prompt("Iremos assistir filme de fantasia ? responda sim ou não ").toLowerCase()
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))
if (cinemaDeHoje === "sim" && precoIngresso < 15 ) {
    
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :( ")
}
 */

/* Desafio
1. 
const cinemaDeHoje = prompt("Iremos assistir filme de fantasia ? responda sim ou não ").toLowerCase()
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))
const lancheCinema = prompt("Qual lanchinho voçê vai comprar ?")
if (cinemaDeHoje === "sim" && precoIngresso < 15 ) {
    
    console.log(` Bom filme! e aproveite o seu ${lancheCinema}`)
} else {
    console.log("Escolha outro filme :( ")
}
 */
/* 
const nomeTorecedor = prompt("Escreva seu nome")
const publicoJogo = prompt("Para jogo local escreva DO , caso jogo intenacional escreva IN").toLowerCase()
const etapaJogo = prompt("Para semifinal escreva SF , caso decisao terceiro lugar escreva DT,caso final escreva FI").toLowerCase()
const categoria = Number(prompt("digite a categoria 1,2,3 ou 4 "))
const qtdIngressos = Number(prompt("Qual a quantidade de ingressos pra hoje ?"))
let valorTotal =

if (publicoJogo === "do" && etapaJogo "sf" && categoria === 1 )
{ valorTotal = ( 1320 * qtdIngressos) }
else if {( publicoJogo === "do" && etapaJogo "sf" && categoria === 2)
valorTotal =(880 * qtdIngressos)}
else if { (publicoJogo === "do" && etapaJogo "sf" && categoria === 3) valorTotal= (550 * qtdIngressos)}
else if {( publicoJogo === "do"&& etapaJogo "sf" && categoria === 4)valorTotal =(220* qtdIngressos)}
else if {(publicoJogo === "in" && etapaJogo)}
}
 */
