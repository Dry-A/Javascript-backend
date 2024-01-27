const alunos = [
  {
    nome: "Luma",
    nota_primeiro_semestre: 8,
    nota_segundo_semestre: 8.5,
    nota_terceiro_semestre: 8,
    nota_quarto_semestre: 7.5,
  },
  {
    nome: "Rafael",
    nota_primeiro_semestre: 10,
    nota_segundo_semestre: 8.5,
    nota_terceiro_semestre: 9,
    nota_quarto_semestre: 10,
  },
  {
    nome: "Julia",
    nota_primeiro_semestre: 9,
    nota_segundo_semestre: 6,
    nota_terceiro_semestre: 6.5,
    nota_quarto_semestre: 7,
  },
  {
    nome: "Lucas",
    nota_primeiro_semestre: 8,
    nota_segundo_semestre: 7,
    nota_terceiro_semestre: 5,
    nota_quarto_semestre: 9,
  },
];

const somaNotas =
  alunos[0].nota_primeiro_semestre +
  alunos[0].nota_segundo_semestre +
  alunos[0].nota_terceiro_semestre +
  alunos[0].nota_quarto_semestre;

console.log(somaNotas);

function calcularMediaAluno(aluno) {
  const somaNotas =
    aluno.nota_primeiro_semestre +
    aluno.nota_segundo_semestre +
    aluno.nota_terceiro_semestre +
    aluno.nota_quarto_semestre;

  const media = somaNotas / 4;
  return media;
}

console.log(calcularMediaAluno(alunos[0]));

function calcularMediaGeral(lista) {
  let somaMedias = 0;

  for (let i = 0; i < lista.length; i++) {
    somaMedias += calcularMediaAluno(lista[i]);
  }

  const mediaGeral = somaMedias / alunos.length;
  return mediaGeral;
}

console.log(calcularMediaGeral(alunos));
