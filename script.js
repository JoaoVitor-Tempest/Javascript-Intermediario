console.log("oi");
//coloca uma mensagem do console, aparece no console


alert("eae");
//aparece uma janela na aba dizendo o que está no alert


    /*   Variavéis   */ 

//var, let e const

//var = variavel global
//let = variavel do mesmo escopo
//const = variavel que não muda

   //estrutura

//variavel (var/cosnt/let) _ se coloca o nome da variavel = _ atribui o valor da varivel;


var nome = "Gui";
var nome = "jo"

//var pode ser substituido, se colocarmos um mesmo nome
//e atribuirmos um outro valor, vai ser sobrescrito

console.log(nome);

   // let

//variavel do mesmo escopo está entre chave {}
//se dermos um console.log, mas estiver fora das chaves,
//não dará certo

{
let idade = 15;
console.log(idade)
}


    //const

const nome = "Vitor";
const nome = "joao"; 
//mesmo colocando o mesmo nome da variavel, não mudou
console.log(nome);

    //outros tipos de variaveis 

var numero = 20; //varivel de numero
var nome = "Giih"; //variavel de texto, string, tem que estar entre aspas, simples ou duplas
var bol = true //variavel de valor booleano
//usada para comparar alguma coisa, pode ser true ou false

console.log(bol);
console.log(nome);
console.log(numero);

    //para juntar duas ou mais variaveis, utilizamos o simbolo +
    //ex: a+b
    //podemos colocar texto de forma manual dentro do console.log
    //podemos juntar variaveis também, com numeros e texto

//o código é lido de cima para baixo, então não podemos colocar
//um console.log em cima de uma variavel,
//se quisermos que essa varivel seja imprimida

    //array

//um aray é uma varivel que podemos armazenar varios valores

    //modelo
    //var, let, const _ = Colchetes[dentro do colchetes colocamos os valores separados por vírgula]

    var nomes = ["guilherme", "felipe", "joao",];

//como fazemos para acessar um array?

console.log(nomes[0]); //colocamos dentro das chaves colchetes e o numero que começa por 0, que é o indice
//não começa do 1, começa do 0

    //outra forma de declarar array

var nomes = new Array("joao,", 'felipe');

console.log(nomes[0]);

    //se eu quiser alterar o valor de um array, eu posso? Pode sim
    
   // declaramos o nome da variavel, o indice e mudamos o indide
    //ex: nomes[0] = 'viktor';

    console.log(nomes[0]); //array com a indice e mudada

    //é possivel adiciciodar itens em um array depois de ter
    //delcarado? Sim também

nomes.push("seu jo"); //push no inglês é de empurrar, ele empurra pra ultima posição do array

    console.log(nomes[4]);


    /* condições, if e o else */ 

//condições é quando queremos fazer alguma verificação no nosso código

var numero = 10;
var nome = "Yasmim";

//se quisermos verificar se o nome é válido, se é igual a Yasmim
//usamos o if, que do inglês por português seria o nosso "se"
//if é o ponto-chave principal pra inicia a verificação

if(nome == "Anna" /*aqui dentro das chaves vai a condição*/){
    //porque colocamos o ==, porque a gente está fazendo uma verificação
    // e não atribuindo algum valor

console.log('verdadeiro');
} else if(nome == "Yasmim"){
    console.log('entramos no else if') // else if seignifica senão se, 
       
}else{
    console.log("entramos no else")
}       

//tem que respeitar maiusculas e minusculas, Case-sensitive significa que caracteres em caixa alta e em caixa baixa são tratados de modo diferente

//por que ==? porque estamos fazendo uma verificação, e não atribuindo
//algum vamor

//else if, se não entrou no primeiro se/if, continua verificando quantas vezes necessárias
//até entrar na condição que é verdadeira


    //else

//se nada for verdade no if ou tanto no else if, ter algum lugar
//pra pegar o que que é o caso contrário

// o else não precisa de um if else pra existir
//se quisermos deixar so o else, podemos


    //comparar números

var numero = 10;
var nome = 'Vitor'

//>= maior ou igual
//>  maior
//<= menor oi igual
//<  menor

if(numero >= 10){
    console.log('o numero é menor ou igual a 10')
}

//se colocarmos maior(>) ou menor(<) que o valor 10 que é o atributo
//da variavel, não iria funcina pois o valos é 10
//se fosse outro numero, daria certo

    //diferente

    var numero = 10;
    var nome = 'Vitor';
    
if(nome == 'felipe'){
    console.log('entrou aqui');
}

//também existe o diferente -- != -- que é o contrario do igual -- == --

    //mais de uma verificação no if

//&&
//||

if(numero != 10 || nome == "Vitor"){
    console.log('dudu');
}

 /* 
    o && tem que fazer todas as verificações passsamrem
    enquanto o || uma já é suficiente
    se uma for verdadeira dentre as
    variaveis, vai entrar no bloco
*/


    //Funções

//são trechos de código que conseguimos
//chama-los a qualquer momento

                //Modelo
    //"Funtion" >> (nome da função)
    // Entre chaves colocamos o código até
    //até a função ser chamada

    //para chamara a função colocamos assim:
            //Modelo
    //nome da função >> ();

 
function testes(){
    //executado quando chamar a função
    //o cídigo não será exexucato de imediato
    //ele vai ficar esperando até ser chamado
    console.log('chamando a função testes');
}

testes();

//nas funnções existem parametros que podemos definir

function nomes (nome,idade){
    console.log('o nome é '+nome)
    console.log('A idade é '+idade)
}

nomes('Guilherme',16)
nomes ('João',17)

// chamamos a função nomes e depopis definimos o nome
//colocando no parametro +nome
//e chamando a função colocando o nome no chamamento
//da função

function pegarNome(){
    return "Juaum" //função return 
                   // e assim que a funçar retornar alguma
                   //coisa, a função é terminada 
 console.log("Testi");
}

var  nomejo = pegarNome();

console.log(nomejo);


function pegarNome(parametro){
    if(parametro == 1){
        return "Juaum"
    } else {
        return "outro nome";
    }


}

var nome = pegarNome(1);
console.log(nome);



        //formas de declarar funções usando variaveis


var func = function(){
console.log('Função-variavel')
}
func();


        //declarar função e chama-la logo em seguida

(function(){
    console.log('oi, mundoooooooooo')
})();
 //se coloca a função dentro de 
 //e depois chama a função



 

        //Laços de repetição for, while e do

//um laço de repetiçãio é para executar uma
//mesma função várias vezes


var n = 0;
while(n < 10){
    console.log(n);
    n++
}


for (var i = 0; i < 10; i++){

console.log(i);
}



var n = 0;
do{
    console.log(n);
    n++;
}while(n < 10)


        //ForEach - outro laço de repetição

//servem pra interagir num array, ou em objetos


var arr = ['guilerme', 'felipe', 'joao'];


for ( var i = 0; i < arr.length; i++ ){
    console.log(arr[i])

}



arr.forEach(function(value,index){
console.log(value,index)
})


// Value, valor do array
// O index é a chave, é aquele número que começa do 0
//guilherme teria a chave 0, felipe teria a chave 1 e joao teria a chave 2







    //Exercicio com JavaSript

//prompt

//uma caixa de texto aparece no navegador esperando
//o usuario digitar alguma coisa
//a variavel vai receber o que se colocou no prompt

//dentro das chaves colocamos o que o
//usuario deve fazer na caixa de dialogo,
//em formato de string, texto, aquilo de entre aspas


var nome = prompt();
var idade = prompt();
var cidade = prompt();

console.log('o nome é '+nome)
console.log('a idade é '+idade)
console.log(' a ciade é '+cidade)


    //Exercicio cálculo de idade com prompt

//Lógica:
//Saber o ano que estamos
//Saber o ano que a pessoa nasceu


var anoNasciemnto = prompt("Coloque o ano do seu nascimento");

while(anoNasciemnto >= 2024){
   alert('por favor coloque seu ano de nascimento corretamente'); 
   anoNasciemnto = prompt('Coloque o ano do nascimento')
}

var anoAtual = prompt('qual o ano atual?');

var idadeFinal = anoAtual - anoNasciemnto;
alert('A idade final é '+idadeFinal);


        //Calculadora dinâmica

//Numero inicial
//tipo de operação 
//numero final


var numeroInicial = prompt('informe o primeiro numero');

var sinal = prompt('informe o tipo de operação') 

while(sinal != '-' && sinal != '+' && sinal != '/' && sinal != '*'){
    alert('informe um sinal válido');
    sinal = prompt('informe o tipo de operação');


}

var numeroFinal = prompt('informe o numero final');

//parseInt

//funções para converter um número para string
numeroInicial = parseInt(numeroInicial);
numeroFinal = parseInt(numeroFinal)
// se não executar esse comando, o texto será uma string
//ele chama a variavel e converte pra numero

var resultadoFinal = 0;

if(sinal == '+'){
    resultadoFinal = numeroInicial + numeroFinal
}else if(sinal == '-'){

    resultadoFinal = numeroInicial - numeroFinal


}else if(sinal == '/'){
    resultadoFinal = numeroInicial / numeroFinal


}else if(sinal == '*'){
    resultadoFinal = numeroInicial * numeroFinal
20}


alert('resultado é '+resultadoFinal);









        //Orientação a objetos com JavaScript



//O que são objetos?
//o objeto carrega todas as propriedades

var objetos = {
}


        //Funções e instâncias


//Como funciona para instanciar, pra criar objetos
//e começar a interação entre eles


function Pessoa(){
    this.nome = 'Guilherme'; //this.nome é uma váriavel pra o objeto em questão
}

var pessoa = new Pessoa(); //Essa linha diz que estamos criando um novo ojbeto chamado Pessoa

alert(pessoa.nome);


    //Funções em orientação a objetos





function Pessoa (){
    this.nome = "Joao";
    this.idade = 19;
    this.printNome = function(numero){
        alert(numero);
    }
}


var pessoa = new Pessoa();
var pessoa_2 = new Pessoa();

pessoa_2.nome = "giih";

pessoa.printNome(pessoa_2.nome);
