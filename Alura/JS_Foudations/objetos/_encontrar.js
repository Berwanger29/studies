const clientes = require('./muitosClientes.json')

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor))
}

const encontrado = encontrar(clientes, 'telefone', '5896279799')

console.log(encontrado)