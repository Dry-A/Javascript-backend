class Livro {

    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas

    }
    descreverTitulo(){

     console.log(`${ this.nome} é um livro da editra ${this.editora} e tem ${this.paginas} páginas`)   
    }
    
}

class LivroColecao extends Livro {
    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }
    descrevercolecao(){
        console.log(`O livro ${this.nome} faz parte da coleçao ${this.nomeColecao}`)
    }
}

const LogicaProgramacao = new LivroColecao("Logica de Programaçao", "Comece a Programar")
LogicaProgramacao.descrevercolecao()