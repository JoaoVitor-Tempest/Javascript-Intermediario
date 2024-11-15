//Template strings

//Se quisermos colocar um texto com quebra de linha?
//Usamos o acento grave, o acento da crase ` `


var conteudo = `

sdasds
dadasd

dasddasd
`;

// é colocado o acento da crase `` 

console.log(conteudo);



var nome = 'Isabelle'; //Como chamar variaveis no Template String
var conteudo = `
o nome é ${nome}`; //Colocamos o $ e abrimos e fechamos chaves {}, colodamos o nome da variavel dentro das chaves


console.log(conteudo);



        //Block scopes

{
    //fica limitado a só este scopo
    let sexo = "feminino"
    console.log(sexo);
}




        //Arrow functions

        
const testes = (par)=>{
        console.log(par);
}
testes(par);

// mesma coisa que:

//function testfucn (){
//                              
//}


        //Destructure


const contsarray = ['Isabelle', 'Sophia', 'Julia']
 
const [a,b,c] = contsarray
//const [a,b,...c] = contsarray
//se tivermos mais indices depois do ultimo indice
//colomaos três pontos ... antes da ultima letra da variavel

console.log(b)

//Colocamos cada indice do array em uma variavel



        //Rest e spread

//Spread


var garotas = [
        {
          nome: 'Laura'
        },
        {
          nome: 'Manuela'
        }
];

const objetinho = [...garotas,{
        nome: 'Fatima'
}]

console.log(objetinho);


//Rest


function testes (...numero){
        console.log(numero)
}

testes(1,2,3,4,5);
//faz os numeros serem um array



        //Promisses, Async e await

//Promisse me retorna uma função que eu criei, ela é resolvida ou rejeitada

function testes(){
        return new Promise ((resolve,reject)=>{

                const erro = false;
                //const erro = true;
        

        if(erro){
                reject('deu errado');
        }else{
                resolve('deu certo');
        }

        })
}

testes().then(function(res){
        alert(res);
}).catch(function(err){
     alert(err);   
})

