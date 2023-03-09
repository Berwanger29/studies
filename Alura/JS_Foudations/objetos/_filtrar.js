const clientes = require('./muitosClientes.json')

function filtrarApartamentosSemComplemento(lista) {
    return lista.filter((item) => {
        return item.endereco.apartamento &&
            !item.endereco.hasOwnProperty('complemento')
    })
}


const filtrados = filtrarApartamentosSemComplemento(clientes)
console.log(filtrados)