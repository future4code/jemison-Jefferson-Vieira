/* Exercicio 18/04 Exercicio de interpretação de codigo

1.Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)



console.log('a. ', array)
a. 
 console.log('b. ', array)
b. 
console.log('c. ', array.length)
c. 11
console.log('d. ', array[i])
d. 3 
console.log('e. ', array)
e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('f. ', valor)
f. 9 */
/* 
2. 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

SUBI NUM ÔNIBUS EM MIRROCOS  28 */

/* Exercicios de escrita de codigo
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!


const emailDoUsuario = prompt(" digite seu email");A
const nomeDoUsuario = prompt("digite seu nome");
console.log("O e-mail " + emailDoUsuario + "foi cadastrado com sucesso. Seja bem-vinda(o),"+ nomeDoUsuario + "!" );
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario} !`);

 */
/* 2.2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
 Em seguida, siga os passos:
    
a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

a. let comidasPreferidas = ["pizza","churrasco","costela","risoto","guacamole"];
console.log(comidasPreferidas);
['pizza', 'churrasco', 'costela', 'risoto', 'guacamole']

b. console.log("Essas são as minhas comidas preferidas:");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
comsole.log(comidasPreferidas[4]);

c. let comidaUsuario = prompt("Qual é a sua comida preferida?");
"moqueca"
comidasPreferidas[1]= "moqueca"
let novaLista = comidasPreferidas;
console.log(novaLista); */

/* 3.
let listaDeTarefas
listaDeTarefas = []
listaDeTarefas = prompt("escreva 3 tarefas diarias separadas por virgula");
"limpeza","trabalho","estudo";
listaDeTarefas = ["limpeza","trabalho","estudo"];
(3) ['limpeza', 'trabalho', 'estudo']
prompt("escreva uma tarefa que já realizou");
"limpeza";
listaDeTarefas.splice(0,1);
listaDeTarefas;
(2) ['trabalho', 'estudo']
 */

/* DESAFIO

let frase 
1. frase = "minha vó traga meu jantar , sopa, uva , nozes, pão .";
frase = ["minha", "vó", "traga","meu","jantar","sopa","uva","nozes","pão"];

2.Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], 
faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array.

let array = ["banana","morango","abacaxi","laranja","ameixa"];
array[2];
"abacaxi";
array.length
(5)
 */














