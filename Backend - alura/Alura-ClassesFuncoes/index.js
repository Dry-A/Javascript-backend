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

const javascript2 = new Livro("Primeiros passos com Javascript", "Codando hoje", 213)
javascript2.descreverTitulo()

console.log(typeof Livro)