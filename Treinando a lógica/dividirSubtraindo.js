function dividirSubtraindo(pessoas, paes){
    i=0

    while(paes>=pessoas){

        paes-=pessoas
        i++
    }
    return {i, paes}
}

console.log("Resultado da divisão " + dividirSubtraindo(200,5))