const cliente = {
    nome: 'Vinicius',
    idade: 23,
    email: 'email@email.com',
    telefones: [
        '111234-1234',
        '221234-1234',
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

function ligaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

//ligaCliente(...cliente.telefones)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0]
}

console.log(encomenda)