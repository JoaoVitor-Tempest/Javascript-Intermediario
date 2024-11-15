var p = document.getElementsByTagName('p');
// todos os elementos da página que
// são da tag <p> são retornados
// se tiver só uma tag <p>, retornaria 1
// com duas, retornaria 2
// e assim vai

// p é um objeto

alert(p.length)

// manipular cada tag:

alert(p[0].innerHTML) // innerHTML retorna o conteúdo que tá dentro da tag
// innerHTML além de fazer a leitura
// podemos manipular o HTML

p[0].innerHTML = "mani js";

// Alterando o conteúdo de todos os parágrafos:
for (var i = 0; i < p.length; i++) {
    p[i].innerHTML = "mani js" + i; // Corrigido: agora usa p[i] e não p[0]
}

// Corrigido: acesso a innerHTML de p[0] dentro do loop
for (var i = 0; i < 10; i++) {
    p[0].innerHTML = p[0].innerHTML + '- algo - '; // Corrigido o erro de sintaxe
}

// manipular através do id

var el = document.getElementById('box');
el.style.width = '100px';
el.style.height = '100px';
el.style.backgroundColor = 'red';
el.style.marginLeft = "200px"

// manipular através da classe

var elementos = document.getElementsByClassName('box'); // Corrigido: descomentado e ajustado
var el = elementos[0];

el.style.width = '100px';
el.style.height = '100px';
el.style.backgroundColor = 'green';
el.style.marginLeft = "200px"

// em loop (para todos):

for (var i = 0; i < elementos.length; i++) {
    var el = elementos[i];
    el.style.width = '100px';
    el.style.height = '100px';
    el.style.backgroundColor = 'green';
    el.style.marginLeft = "200px"
}
