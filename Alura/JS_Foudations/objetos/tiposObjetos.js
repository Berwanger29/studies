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
    },
    {
        rua: 'Rua cliclano de tal',
        numero: 123,
        apartamento: true,
        complemento: 'perto da igrejinha'
    },
    {
        rua: 'Rua estranho de tal',
        numero: 123,
        apartamento: true,
        complemento: 'perto da igrejinha'
    },
]

console.log(cliente['endereco'][1])