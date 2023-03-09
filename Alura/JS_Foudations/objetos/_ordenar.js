const clientes = require('./muitosClientes.json')

function ordenar(lista, prop) {
    const resultado = lista.sort((a, b) => {
        if (a[prop] < b[prop]) {
            return -1
        } else if (a[prop] < b[prop]) {
            return 1
        }
        return 0
    })

    return resultado
}

const ordenadoNome = ordenar(clientes, "nome")
console.log(ordenadoNome)