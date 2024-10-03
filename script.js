//Estrutura de Rpetição For
for (let i = 0; i < 10; i++) {
    console.log(i)
}
//While

let f = 0;
while (f > 10) {
    console.log(w)
    f++;
}

//do while
let w = 0;

do {
    console.log(w);
    w++;
}
while (w < 20)

//função

function Ola(nome) {
    // string literal ou template string ${} chama a variável
    console.log(`Seja Bem Vindo a ${nome}`)
    alert(`seja bem vindo a ${nome}`)
    document.write(`seja bem vindo a ${nome}`)
}

//Executando a função Ola passando o valor
Ola("Fiap")

//Arrow Function 

const hello = () => (console.log("Função arrow function"))

hello()

//Array = [], Objeto= {} e métodos =()

let jogadores = [
    { nome: "Huginho", idade: 17 },
    { nome: "Zezinho", idade: 18 },
    { nome: "Luizinho", idade: 19 }
]

let listarJogadores = jogadores.map(function (item) {
    //return item.nome;
    return item.idade;

})
console.log(listarJogadores)