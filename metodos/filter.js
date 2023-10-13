let roupas = [
  { produto: "Camisa", preco: 25, cor: "Amarelo" },
  { produto: "Calça", preco: 21, cor: "Azul" },
  { produto: "Saia", preco: 29, cor: "verde" },
  { produto: "Shorts", preco: 54, cor: "cinza" },
  { produto: "Camiseta", preco: 90, cor: "Preto" },
  { produto: "Baby Look", preco: 43, cor: "laranja" },
];


//com arrowfunction
let precoMaiorQue30 = roupas.filter((roupa) => {
  return roupa.preco >= 30;
});


//sem arrowfunction
function precoMaiorQue25(roupas) {
  return roupas.filter(function (roupa) {
    return roupa.preco > 25;
  });
}

console.log(precoMaiorQue30);
console.log(precoMaiorQue25(roupas));
