const notas = [10, 9.5, 8, 7, 6]

const novasNotas = notas.map((e) => {

    return e + 1 >= 10 ? 10 : e + 1
})

console.log(novasNotas)