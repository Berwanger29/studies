const cliente = {
    nome: 'Vinicius',
    idade: 23,
    email: 'email@email.com',
    telefones: [
        '111234-1234',
        '111234-1234',
    ]
}

// cliente.endereco = [
//     {
//         rua: 'Rua fulano de tal',
//         numero: 123,
//         apartamento: true,
//         complemento: 'perto da igrejinha'
//     }
// ]

const chavesDoObjeto = Object.keys(cliente)
console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes('endereco')) {
    console.error('Erro, É necessário ter um endereço cadastrado')
}