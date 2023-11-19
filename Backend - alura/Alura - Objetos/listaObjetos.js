const cliente = {
    nome: "Mari",
    idade: 13,
    email: "mari@email.com",
    telefone: ["8989-900", "8839-0900"]
}

   cliente.enderecos = [
    {
        logradouro: "Rua Agenor de Campos",
        numero: "423",
        principal: true,
        cidade: "São Paulo"
    }
]

//agora temos um array, com uma posicao, no indice 0

cliente.enderecos.push(
    {
        logradouro: "Av. Cristaleira gelada",
        numero: "22",
        principal: false,
        cidade: "Maringá"
    }
)

console.log(cliente.enderecos)


const listaApenasPrincipal = cliente.enderecos.filter( (endereco) => endereco.principal === true ) 
//filter devolve uma nova lista, nao um objeto. Ele retornara uma lista com um objeto.
console.log(listaApenasPrincipal)