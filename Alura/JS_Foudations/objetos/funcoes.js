const cliente = {
    nome: 'Vinicius',
    idade: 23,
    email: 'email@email.com',
    telefones: ['11 12341234', '11 12341234'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente')
        } else {
            this.saldo -= valor
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(150)