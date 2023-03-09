const salaJS = [7, 8, 9, 7, 8, 9, 7, 8, 9]
const salaJava = [6, 5, 7, 8, 6, 5, 9]
const salaPython = [7, 3.5, 8, 9.5]

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota
    }, 0)

    const media = somaDasNotas / notasDaSala.length
    console.log(media)
}

calculaMedia(salaJS)
calculaMedia(salaJava)
calculaMedia(salaPython)