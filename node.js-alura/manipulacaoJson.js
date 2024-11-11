//4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

const animais = require('./animais.json');

//console.log(animais);
//console.log('\n\n')

const strAnimais = JSON.stringify(animais);

//console.log('\n\n')

let arrayAnimais = strAnimais.slice(11,202);

//console.log(arrayAnimais);

const objanimais = JSON.parse(arrayAnimais);

//console.log(objanimais)

objanimais.push({
    id: 4,
    nome: 'Python',
    tipo: 'Réptil',
    habitat: 'Web'
  })

  objanimais[2].habitat = "Florianopolis";

  objanimais.splice(2,1); // reve o elemento do indice 2 do array

    //  console.log(objanimais)

  const objanimaisString = JSON.stringify(objanimais);
  console.log(objanimaisString);




