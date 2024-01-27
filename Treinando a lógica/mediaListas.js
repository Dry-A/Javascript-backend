const dadosAlunos = `[

    {
        "nome": "Marcos", 
        "notas": [8, 9, 10, 6]
    },
    {
        "nome": "Pedro", 
        "notas": [7, 6, 8, 9]
    },
    {   
        "nome": "Mauricio",
        "notas": [9, 6, 5, 6]
    },
    {
        "nome": "Felipe", 
        "notas": [9, 7, 7, 10]
    },
    {
        "nome": "Fernanda",
        "notas": [8, 7, 8, 6]
    }

]`

function calculaMedia(aluno){

notas = aluno.notas
soma = 0

for(let i = 0; i < notas.length; i++){

    soma += notas[i]
}

media = soma / notas.length
return media

}


console.log(calculaMedia(dadosAlunos))