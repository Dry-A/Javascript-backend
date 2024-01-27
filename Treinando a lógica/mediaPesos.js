const gados = [
  {
    codigo: 144550,
    peso_primeiro_ano: 47,
    peso_segundo_ano: 55,
    peso_terceiro_ano: 63,
    peso_quarto_ano: 59,
    peso_quinto_ano: 65,
  },
  {
    codigo: 245650,
    peso_primeiro_ano: 46,
    peso_segundo_ano: 48,
    peso_terceiro_ano: 51,
    peso_quarto_ano: 56,
    peso_quinto_ano: 60,
  },
  {
    codigo: 347250,
    peso_primeiro_ano: 45,
    peso_segundo_ano: 61,
    peso_terceiro_ano: 63,
    peso_quarto_ano: 59,
    peso_quinto_ano: 65,
  },
  {
    codigo: 442340,
    peso_primeiro_ano: 47,
    peso_segundo_ano: 55,
    peso_terceiro_ano: 51,
    peso_quarto_ano: 44,
    peso_quinto_ano: 65,
  },
  {
    codigo: 543200,
    peso_primeiro_ano: 32,
    peso_segundo_ano: 55,
    peso_terceiro_ano: 54,
    peso_quarto_ano: 50,
    peso_quinto_ano: 55,
  },
];

console.log(gados[1]);

function mediaUnitaria(gados) {
  let somaPeso =
    gados.peso_primeiro_ano +
    gados.peso_segundo_ano +
    gados.peso_terceiro_ano +
    gados.peso_quarto_ano +
    gados.peso_quinto_ano;

  let mediaPesoGado = somaPeso / 5;

  return mediaPesoGado;
}

console.log(mediaUnitaria(gados[1]));

function mediaPesoGeral(lista) {
  let somaPesos = 0;

  for (let i = 0; i < lista.length; i++) {
    somaPesos += mediaUnitaria(lista[i]);
  }

  const mediaGeral = somaPesos / gados.length;
  return mediaGeral;
}

console.log(mediaPesoGeral(gados));
