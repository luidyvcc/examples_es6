"use strict";

/*
    01.04 - Classes
*/
// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// class TodoList extends List {
//     constructor() {
//         super();
//         this.usuario = "Luidy";
//     }
//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }
// class Matematica {
//     static soma(a, b) {
//         return a + b;
//     }
// }
// // Testes:
// var MinhaLista = new TodoList();
// document.getElementById("novotodo").onclick = function() {
//     MinhaLista.add("Novo todo 2");
// };
// MinhaLista.mostraUsuario();
// console.log(Matematica.soma(1, 5));

/*
    01.05 - Const & Let
*/
//const a = 1;
//a = 2; // Gera um erro
// const b = { nome : "Marcos" };
// console.log(b.nome);
// b.nome = "José";
// console.log(b.nome);
// if (1) {
//     var y = 4;
//     let z = 4;
// }
// function teste() {
//     console.log(y); // funciona
//     console.log(z); // gera um erro
// }
// teste();

/*
    01.06 - Operações com array
*/
// const arr = [1, 3, 4, 5, 8, 9];
// const newArr = arr.map(function(item, index){
//     return item + index;
// });
// console.log(newArr);
// const sum = arr.reduce(function(total, next){
//     return total + next;
// });
// console.log(sum);
// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });
// console.log(filter);
// const find = arr.find(function(item){
//     return item == 3;
// });
// console.log(find);

/*
    01.07 - Arrow function
*/
// const arr = [1, 3, 4, 5, 6];
// // Exemplo 01
// const newArr = arr.map((item) => {
//     return item * 2;
// });
// console.log(newArr);
// // Exemplo 02
// const filter = arr.filter(item => {
//     return item % 2 === 0;
// });
// console.log(filter);
// // Exemplo 03
// const find = arr.find( item => item == 5 );
// console.log(find);
// // Exemplo 04 - Não recomendado
// const teste = (x) => x+500;
// console.log(teste(2));
// const teste2 = () => ({ nome: "Marcia" });
// console.log(teste2());

/*
    01.08 - Valores padrão
*/
// Exemplo 01
function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(soma(1));
console.log(soma()); // Exemplo 02 - Com arrow function

var soma2 = function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return a + b;
};

console.log(soma2(1));
console.log(soma2());
