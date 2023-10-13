// const userlogin = (pessoa) => {

//     let array = []

//     for(i = 0; i < 90000; i++) {
        
//         array.push(i)
//     }

//     return `${pessoa} logou com sucesso`
// }

// console.log(userlogin("Audrey"))




const acesso = nome => `${nome} logou com sucesso no sistema!`

const userlogin = nome => {

    let array = []

    for(i = 0; i< 90; i++){

        array.push(i)
    }

    return acesso(nome)
}




console.log(userlogin("Audrita"))

let nome = "Audrey";
let comunicacao = " Olá, sra nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome));

let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))


let frase= "Mergulhando em tecnologia."
console.log(frase.slice(3,11)) // Mergulhando

let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens)


let login = "   audrey@emailteste.com     ui ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); 