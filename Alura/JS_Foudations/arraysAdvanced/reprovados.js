const alunos = ['Vinicius', 'Bruno', 'Lucas', 'Gedeao']
const notas = [10, 9, 8, 7]

const reprovados = alunos.filter((aluno, indice)=>{
    return notas[indice] < 8
})

console.log(reprovados)