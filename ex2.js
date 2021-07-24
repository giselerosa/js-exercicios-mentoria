


/*** 2. Criar uma função similar a função do exercício 1, porém que receba um terceiro argumento que determina se o retorno será no formato 'Nome Sobrenome" ou "Sobrenome, Nome".
 */

 const person = {
    name: 'Gisele',
    lastname: 'Rosa',
    tradicionalorder: true
}

const person2 = {
    name: 'Walmir',
    lastname: 'Filho',
    tradicionalorder: false
}
const person3 = {
    name: 'João',
    lastname: 'Silva',
    tradicionalorder: true
}
function checkOrderName(person){
    if (person.tradicionalorder){
    console.log(`Olá, meu nome é ${person.name} ${person.lastname}.`);
    } else {
    console.log(`Olá, meu nome é ${person.lastname}, ${person.name}.`);    
    }
}
checkOrderName(person);
checkOrderName(person2);
checkOrderName(person3);
