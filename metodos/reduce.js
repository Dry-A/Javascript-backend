const notas = [ 10, 7.8,9, 4.5, 8.5 ]

const somaNotas = notas.reduce((a, b) => a + b, 0); // Soma as notas

const media = somaNotas / notas.length; // Calcula a média


console.log(media)