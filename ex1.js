


/*** 1. Criar uma função que recebe nome e sobrenome, e retorna ambos concatenados.
 */

const person = {
    name: 'Gisele',
    lastname: 'Rosa'
}
function concatName(person){
    return `Olá, meu nome é ${person.name} ${person.lastname}.`
   
}
console.log(concatName(person));

