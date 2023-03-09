const livros = require('./listaLivros')


function menorValor(arrProdutos, posInicial) {
    let maisBarato = posInicial
    for (let i = posInicial; i < arrProdutos.length; i++) {
        if (arrProdutos[i].preco < arrProdutos[maisBarato].preco) {
            maisBarato = i
        }
    }
    return maisBarato
}

module.exports = menorValor