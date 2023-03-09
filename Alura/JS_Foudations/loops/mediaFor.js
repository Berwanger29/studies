const medias = [10, 6.5, 8, 7.5]

let somaNotas = 0

for (let i = 0; i < medias.length; i++) {
    somaNotas += medias[i]
}

let media = somaNotas / medias.length
console.log(media)