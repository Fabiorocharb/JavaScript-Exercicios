function Excecao(mensagem) {
  this.message = mensagem;
  this.name = "Excecao";
}

function NaoNumeroException(valor) {
  this.message = "É necessário informar um número";
  this.name = "NaoNumeroException";
}

function dividir(a, b) {
  if (typeof a !== "number") {
    throw new NaoNumeroException();
  } else if (typeof b !== "number") {
    throw new NaoNumeroException();
  } else if (b === 0) {
    throw new Excecao("O numero para divisão não pode ser zero!");
  }
  return a / b;
}

try {
  console.log(dividir(10, 2));
  console.log(dividir(50, "feijao"));
  console.log(dividir(100, 20));
  console.log(dividir(100, 0));
} catch (erro) {
  if (erro instanceof NaoNumeroException) {
    console.error(erro.message);
  } else if (erro instanceof Excecao) {
    console.log(erro.message);
  } 
}

console.log("Após o try catch"); 