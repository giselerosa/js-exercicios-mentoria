 /**
  * 3. Criar uma função que recebe um número e retorna se o número é par ou ímpar, e se é positivo, zero ou negativo.
  */

function typeNumber(number){

if ((number % 2) == 0 && number > 0 ) {
  return `Esse número é par e positivo`
} 
if ((number % 2) == 0 && number < 0 ) {
  return `Esse número é par e negativo`
} 
if (number % 2 != 0 && number > 0) {
  return `Esse número é impar e positivo`
}
if (number % 2 != 0 && number < 0) {
  return `Esse número é impar e negativo`
}
else {
    return `Esse número é o zero`
}
}
console.log(typeNumber(-2));
console.log(typeNumber(-1));
console.log(typeNumber(0));
console.log(typeNumber(1));
console.log(typeNumber(2));
console.log(typeNumber(3));
console.log(typeNumber(4));
