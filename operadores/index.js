/* Exercicio 1.
Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
a. , false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
b. , false 
resultado = !resultado && (bool1 || bool2) 
true
console.log("c. ", resultado)
c. true

console.log("d. ", typeof resultado)
d. boolean 
 */


/* Exercicio 2.
Seu colega se aproxima de você falando que o código dele não funciona como devia.  
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!") 
let segundoNumero = prompt("Digite outro numero!") 
primeiroNumero = "4"
segundoNumero = "5"
const soma = primeiroNumero + segundoNumero

console.log(soma)
45


Exercicio 3.
Forma correta 

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero 
console.log(soma)
9 */


/* Exercícios de escrita de código
1.a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

a.
const idadeUsuario = Number(prompt("Qual é a sua idade ?"))
b. 
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo ?"))
c. 
console.log("Sua idade é maior que a do seu melhor amigo ?",idadeUsuario > idadeAmigo)
d. 
console.log(idadeUsuario - idadeAmigo)
 */

/* 2. Faça um programa que:
    
a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

a. const numeroPar = Number(prompt("Escreva um numero par"));
b. console.log(numeroPar % 2);
c. let resultado
resultado = numeroPar % 2
resultado = 0

d. resultado = numeroImpar % 2
resultado = 1  */


/* 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas

    let mesesDoAno
    let diasDoAno
    let horasDoAno
     mesesDoAno = Number(12);
     diasDoAno = Number(365);
    horasDoAno = mesesDoAno * diasDoAno * 24 

    

    a) let idadeUsuario = Number(prompt("Qual é a sua idade ?"));
    console.log(idadeUsuario * mesesDoAno );
    
    b) console.log(idadeUsuario * mesesDoAno * diasDoAno );

    c) console.log( idadeUsuario * horasDoAno ); */


/* 
    4. Faça um programa que pergunte ao usuário dois números. 
    Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true

    let primeiroNumero 
    let segundoNumero */

/* 
    primeiroNumero = Number(prompt("Escreva um numero maior que 7 e menor que 9 "));
    8
    segundoNumero = Number(prompt("Escreva um numero maior que 3 e menor que 5 "));
    4
   console.log(primeiroNumero > segundoNumero );
   true
   console.log(primeiroNumero === segundoNumero);
   false
   console.log(primeiroNumero % segundoNumero === 0 );
   true
   console.log(segundoNumero % primeiroNumero === 0);
   false */


 /*   Desafios

   1.Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura
    entre Graus Celsius(°C), Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:

    - Graus Fahrenheit(°F) para Kelvin(K)
    
    ```
    (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
    ```
    
- Graus Celsius(°C) para Graus Fahrenheit (°C)


a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

    a) let Kelvin 
       let fahrenheit
       let celsius 

    Number(kelvin = (fahrenheit - 32)*(5/9) + 273.15);
    Number(fahrenheit =(celsius)*(9/5) + 32);
    Number(celsius = Kelvin - 273,15);
    fahrenheit = 77 
    console.log(Kelvin = (fahrenheit - 32 ) *( 5 /9 ) + 273.15);
    298.15

    b) celsius = 80
   console.log( fahrenheit = (celsius)*(9 / 5) + 32 );
     176

    c) celsius = 30 
    console.log( fahrenheit = (celsius)*(9 / 5) + 32 );
    86;
    console.log(kelvin = celsius + 273,15);
    303,15

    d) celsius = prompt("Escreva a temperatura atual em graus celsius ");
    console.log(kelvin = celsius + 273,15); */
/* 
    DESAFIO 
    2. a) let quilowattHora 
    Number(quilowattHora) = 0,05;
    let consumoMes1
    consumoMes1 = quilowattHora * 280
    console.log("Valor a ser pago consumo 280kw/h, R$ ",consumoMes1);
    b) console.log("Valor a ser pago com desconto 280kw/h, 15% desconto R$", consumoMes1 -( (consumoMes1 * 15)/ 100 )); */


    3.
    a) let lb;
       let kg;
      kg = 1
       Number(kg = lb * 2,2)
       lb = 20
       console.log("20lb equivalem à ", Number(kg * lb) );
       c  

       















    



