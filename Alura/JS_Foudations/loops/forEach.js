const medias = [10, 6.5, 8, 7.5]

let somaMedias = 0

medias.forEach((e, i) => {
    somaMedias += e
    console.log(i)
})
console.log(somaMedias / medias.length)    