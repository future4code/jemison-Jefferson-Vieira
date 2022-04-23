// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) { 
 return altura * largura 
  
  
  

}
console.log(calculaAreaRetangulo(3,5))



// EXERCÍCIO 02
function imprimeIdade(anoAtual, nascimento ) { 
  anoAtual = Number(prompt("Escreva o ano atual"))
  nascimento = Number(prompt("Escreva seu ano de nascimento"))
  

  return anoAtual - nascimento
  // implemente sua lógica aqui

}
imprimeIdade()
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  peso = Number(prompt("Escreva seu peso"))
  altura = Number(prompt("Escreva sua altura em metros"))
 
  
   imc = peso /(altura * altura )
  return imc
  // implemente sua lógica aqui

}
imc(80,1.80)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  nome = prompt("Escreva seu nome")
  idade = Number(prompt("Escreva sua idade"))
  email = prompt("Escreva seu e-mail")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cor1 = prompt("escreva uma cor")
  cor2 = prompt("escreva outra cor")
  cor3 = prompt( "escreva outra cor diferente das anteriores")
  coresFvaoritas = [cor1, cor2, cor3]
  console.log(coresFvaoritas)
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = prompt("escreva uma saudacao").toUpperCase()
  return string
  // implemente sua lógica aqui

}
retornaStringEmMaiuscula("Boa noite")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  custo / valorIngresso 
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}