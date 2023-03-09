const cliente = {
    nome: 'Vinicius',
    idade: 23,
    email: 'email@email.com',
    telefones: [
        '111234-1234',
        '111234-1234',
    ]
}

cliente.endereco = [
    {
        rua: 'Rua fulano de tal',
        numero: 123,
        apartamento: true,
        complemento: 'perto da igrejinha'
    }
]

for (let chave in cliente) {
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor: ${cliente[chave]}`)
    }
}