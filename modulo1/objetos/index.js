/* Exercicio de interpretacao de codigo 

1. a.  O que vai ser impresso no console?
console.log(filme.elenco[0])
Matheus Nachtergaele,
console.log(filme.elenco[filme.elenco.length - 1])
Virginia Cavendish
console.log(filme.transmissoesHoje[2])
Globo 14h 

2.a) O que vai ser impresso no console?
console.log(cachorro)
{nome: 'Juca', idade: 3, raca: 'SRD'}
console.log(gato)
{nome: 'Juba', idade: 3, raca: 'SRD'}
console.log(tartaruga)
{nome: 'Jubo', idade: 3, raca: 'SRD'}

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
A sintaxe de 3 pontos copia todas as chaves do objeto fazendo alteracoes
quando damos valores as chaves ja predefinidas objeto

3.a) O que vai ser impresso no console?
console.log(minhaFuncao(pessoa, "backender"))
false
console.log(minhaFuncao(pessoa, "altura"))
undefined
b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
O objeto pessoa foi colocado como parametro dentro da funcao, 
porem nao foi definido nenhuma chave ou valor de "altura"

Exercicios de escrita de codigo 

a) Crie um objeto. Ele deve conter duas propriedades: nome (string)
 e apelidos (um array que sempre terá exatamente **três apelidos**). 
Depois, escreva uma função que recebe como entrada um objeto 
e imprime uma mensagem no modelo abaixo**:**/
/* 
const jogador = { 
 nome : "Romário",
 apelidos : ["baixola","baixinho","matador"]   
}
function entrevistaRomario(jogador)  {
return jogador
}
console.log(`Eu sou ,${jogador.nome}mas pode me chamar de : ${jogador.apelidos}`) 

b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome,
 mas com uma nova lista de três apelidos.
 Depois, chame a função feita no item anterior passando como argumento o novo objeto

 novosApelidos = { ...jogador, apelidos : ["marrento","rato de praia","boleiro"]}

 entrevistaRomario(novosApelidos) */


/*  2.
 const cliente1 ={
     nome :"José",
     idade: 25,
     profissao:"engenheiro",
 }
 const cliente2 ={
     nome : "Maria",
     idade: 26,
     profissao: "Médica"
 }
function dadosClientes(lista){ 
    listaDados = [lista.nome,lista.nome.length,lista.idade,lista.profissao,lista.profissao.length]


return listaDados

}
    dadosClientes(cliente1);
    dadosClientes(cliente2);
     */
/* 
    3.
    let carrinho =[];
    fruta1 ={
        nome:"banana",
        disponivel: true,
    }
    fruta2 ={
        nome: " abacate",
        disponivel: true,
    }
    fruta3 ={
        nome:"abacaxi",
        disponivel: false,
    }
 function sacolao(fruta){fruta.push(fruta1),fruta.push(fruta2),fruta.push(fruta3)
    return fruta


}

sacolao(carrinho)
 
 */

/* DESAFIOS */

/* 1  */
/* function usuario(){
    let nome = prompt("Escreva seu nome")
    let idade =Number(prompt("Escreva sua idade"))
    let profissao = prompt("escreva sua profissao") 
    
   let usuarioDados={ nome1 : nome,
    idade1 : idade,
    profissao1 : profissao,
   }
return usuarioDados };
usuario();
console.log(usuario())
 */
/* 2. */ 
/* 
function filmes(){
    let filmesNetflix={
        anoLancamento : 2015,
        nome: "A volta dos que não foram ",
    }
    let filmesHbo ={
        anoLancamento : 2015,
        nome : "A trança dos Carecas",

    }
    let lancadoPrimeiro = filmesNetflix.anoLancamento < filmesHbo.anoLancamento ;
    lancadoPrimeiro = false
    let lancadoMesmoAno = filmesNetflix.anoLancamento === filmesHbo.anoLancamento;
    lancadoMesmoAno = true 


    return filmes
}

console.log(filmes(lancadoPrimeiro))
 */
