const clientes = require("./clientes.json");

function encontrar(listaQueEuQuero, chave, valorDaChave) {

  return listaQueEuQuero.find((item) => item[chave].includes(valorDaChave));
}

const encontrado = encontrar(clientes, "nome", "Arwen");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado);
