const alunos = ["Joao", "Juliana", "Ana", "Caio"]
const medias = [10, 9, 8, 7]

const listaDeAlunosEMedias = [alunos, medias]

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        // const alunos = listaDeAlunosEMedias[0]
        // const medias = listaDeAlunosEMedias[1]
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno)
        const mediaAluno = medias[indice]

        console.log(`${aluno} tem média ${mediaAluno}`)
    } else {
        console.log('Aluno não cadastrado.')
    }
}

exibeNomeENota('Ana')