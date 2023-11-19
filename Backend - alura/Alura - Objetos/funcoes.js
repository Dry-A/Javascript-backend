const cliente = {
    nome: "Mari",
    idade: 13,
    email: "mari@email.com",
    telefone: ["98989-9003", "98839-0900"],
    saldo: 1000,
    atividade: "Empresário",

    efetuaPagamento: function(valor) {

        if (valor>this.saldo) {

            console.log("Saldo insuficiente")
        }else {

            this.saldo -= valor
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`)
        }
    },
    //aqui acaba meu "método efetua pagamento"

    emiteCarteirinhaMembro: function(idade) {

        if (this.idade >=18){

            console.log("Carteirinha emitida")

        }else{
            console.log(`A idade do cliente está abaixo da permitida. Idade atual ${this.idade}`)
        }
    },
    //aqui acaba emiteCarteirinhaMembro

    emiteCartaoVip: function(saldo) {

        if(this.saldo >= 500) {
            console.log("Cliente Vip - Cartão emitido")
        }else{
            console.log("Cliente tipo Default")
        }
    },

    pagaMeia: function(atividade) {

        if (this.atividade === "Estudante" || this.atividade === "Aposentado") {

            console.log(`Cliente é ${this.atividade}. Cobrar meia entrada`)
            
        }else{
            console.log("Cobrar ingresso valor inteiro")
        }
    }

}

//propriedades podem guardar funçoes

cliente.efetuaPagamento(100)
cliente.emiteCarteirinhaMembro()
cliente.emiteCartaoVip()
cliente.pagaMeia()