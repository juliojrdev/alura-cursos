const pessoa = {
    id: 1,
    nome: 'João Pedro',
    idade: 21
}

//const novaPessoa = {...pessoa};

//função para copiar objetos json par aoutra variavel sem alterar a orignal
const copiarObjetosJSON = (objeto) => {
    return JSON.parse(JSON.stringify(objeto));
};

const novaPessoa = copiarObjetosJSON(pessoa);

novaPessoa.nome = "Juliano Peterson";
novaPessoa.idade = 29;

console.log(pessoa);
console.log(novaPessoa);