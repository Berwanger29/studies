function soma(num1, num2) {
    return num1 + num2
}

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minhha idade é ${idade}`
}
nomeIdade(40, 'Vinicius')

function multiplica(num1 = 2, num2 = 2) {
    return num1 * num2
}
console.log(multiplica(soma(3, 4)))