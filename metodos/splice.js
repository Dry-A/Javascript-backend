let meses = ["abril", "maio", "quarta", "segunda"];

let dias = meses.splice(2, 2, "agosto", "setembro");
//dias vai guardar os itens apagados

console.log("dias = " + dias);
console.log("meses = " + meses);
