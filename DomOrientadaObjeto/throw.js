function Excecao(mensagem){
    this.message = mensagem;
    this.name = "Excecao";
}

function NaoNumeroException(valor) {
    this.message = "É necessário informar um número"
    this.name =  "NaoNumeroException"
}


function dividir(a, b) {
    if (typeof a !== "number") {
        throw new NaoNumeroException();
    } else if (typeof b !== "number") {
        throw new NaoNumeroException();
    } else if (b === 0) {
        throw new Excecao ("O numero para divisão não pode ser zero!");
    }
    return a / b;
}

console.log(dividir(10,2));
console.log(dividir(50, 5));
console.log(dividir(100,20));
console.log(dividir(100, 0));
