const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(lista) {

  return clientes.filter( (cadaCliente) => {

    return (

      cadaCliente.endereco.apartamento &&

      !cadaCliente.endereco.hasOwnProperty("complemento")
    );
  });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);



function filtrarCasa(lista) {

  return clientes.filter( (cadaCliente) =>{

    return(

      cadaCliente.endereco.apartamento ===false &&
      cadaCliente.endereco.hasOwnProperty("complemento")

    )
  })
}
console.log("- - - - - - - - - - - - - - - - - - ")

const clientesCasa = filtrarCasa(clientes)

console.log(clientesCasa)
