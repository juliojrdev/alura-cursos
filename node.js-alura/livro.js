const livro = {
    titulo: 'Harry Potter e a Pedra de Bimbau',
    autor: 'Glória Perez e Walcir Carrasco',
    genero: 'Fricção'
}

let anoAtual = new Date().getFullYear();

livro.mostrarDetalhes = {

};


livro.mostrarDetalhes.anoPublicacao = 1967;
livro.mostrarDetalhes.idadePublicacao = anoAtual - livro.mostrarDetalhes.anoPublicacao;

console.log(livro['autor']);
console.log(livro['genero']);

livro.avaliacao = '';

console.log(livro);

livro.avaliacao = 'iasoid asoidajsodiajsd oaisjdoiasjd oasidjosai djoasidjas odijasoida sjd';

console.log(livro);

livro.genero = 'Aventura';

console.log(livro);

delete livro.avaliacao;

console.log(livro);
