// O que são objetos?

var objetos = {
    'nome': 'giih',     // isto seria um objeto
    'idade': 16,
    'ocupação': 'aluna'
};

// como chamamos um objeto?
// dessa forma:

// colocamos um alert e dentro das chaves
// colocamos o nome do array depois um ponto .
// e depois o tipo do objeto

alert(objetos.nome);

// "objetos" seria o nome do array, "nome" seria
// o tipo do objeto no alert retornaria 'Giih'

// e se fossem várias pessoas? Como faríamos?

// podemos juntar arrays com objetos

var objetos = [{
    'nome': 'amanda',     // isto seria um objeto
    'idade': 17,
    'ocupação': 'aluna'
},
{
    'nome': 'gabi',     // isto seria um objeto
    'idade': 18,
    'ocupação': 'aluna'
}];

// se dessemos um alert daria indefinido

// para chamar faríamos assim:

alert(objetos[0].nome);

// temos que definir o valor do array antes do ponto

// como instanciar objetos e criar interação entre eles.

// palavra "this", this significa "isso"

function Pessoa() {
    this.nome = "Vinicius"; // não podemos colocar var porque estamos trabalhando com orientação a objetos, tem que ser desse jeito
    // (chamamos isso de atributos)
}

// o this.nome é uma variável
// esse tipo de variável deixamos para
// esse objeto

var pessoa = new Pessoa(); // isso é instanciar um objeto
// esta linha diz que estamos criando um novo objeto chamado Pessoa
var pessoa2 = new Pessoa();

// podemos modificar os valores que temos dentro do objeto

pessoa.nome = "João";

console.log(pessoa2.nome);

// mesmo trocando para a outra variável/atributo, porque trocamos com o 
// outro objeto, e começa pelo valor padrão

// praticando orientação a objetos

function Pessoa () {
    this.nome = "Joao";
    this.idade = 19;
    this.printNome = function (numero) {
        console.log(numero);
    }
}

var pessoa = new Pessoa();
var pessoa2 = new Pessoa();

pessoa2.nome = 'giih';

// como fazemos para chamar a função dentro do objeto?
// desse jeito:

pessoa.printNome(pessoa2.nome);

function Pessoa () {
    this.nome = "Joao";
    this.idade = 19;
    this.printNome = function (numero) {
        console.log(numero);
    }
}

// instanciando de maneiras diferentes

function Animal (nome, peso) {
    if (nome === undefined) {
        nome = 'cachorro';
    }
    if (peso === undefined) {
        peso = '13kg';
    }
    
    this.nome = 'cachorro'; // corrigido para ponto e vírgula
    this.peso = "12kg";
}

// ao invés de instanciamos do jeito normal
// podemos instanciar desse jeito:

animal = new Animal('chorro'); // colocamos os atributos na instância
animal2 = new Animal('gato');

console.log(animal.nome);
console.log(animal2.nome);

function Animal (nome, peso) {
    this.nome = nome;
    this.peso = peso;
}

animal = new Animal('cachorro');
animal2 = new Animal('gato');

console.log(animal.nome);
console.log(animal2.peso);

// Como passar objeto como parâmetro da função

function Pessoa(){
    this.nome = "Guilherme";
    this.idade = 17;
    this.printNome = function (numero){
        console.log(numero);
    };
    this.returnAnimal = function(animal){
        return animal;
    }
}

function Animal(){
    this.nome = "gatinho";
}

var pessoa = new Pessoa();
var animal = new Animal();

console.log(pessoa.returnAnimal(animal)); // Corrigido para passar o objeto 'animal' corretamente

// classes orientadas a objetos

class Animal {
    constructor(nome){
        this.nome = "jacare";
    }

    printNome() {
        return this.nome; // na orientação a objetos chamamos isso de método
    }
}

// extends

class MeuPintinhoAmarelinho extends Animal {
    constructor(nome){
        super(nome); // invoca o construtor da classe-pai
    }
}

// temos a classe Animal e a classe MeuPintinhoAmarelinho
// o extends na orientação a objetos significa
// declara essa classe aqui (MeuPintinhoAmarelinho) e herda tudo que tem nessa classe aqui (Animal)

let meuPintinhoAmarelinho = new MeuPintinhoAmarelinho('tamanda bandera');

console.log(meuPintinhoAmarelinho.printNome());

// O que seria o constructor?
// Toda vez que instanciamos uma classe, ou seja, criá-la
// podemos passar algum parâmetro

var data = new Date();

// Dia do mês (getDate)
console.log(data.getDate());
// Dia da semana
console.log(data.getDay());
// Dia do ano
console.log(data.getFullYear());

// manipulando melhor as datas

var data = new Date('03/29/2024'); // usamos o padrão americano que começa pelo mês, data e ano, respectivamente
// (Data manipulada)
