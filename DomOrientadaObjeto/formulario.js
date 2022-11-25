function pegarDados(evento) {
  evento.preventDefault();

  const formulario = document.querySelector("form");
  const dados = {};

  [...formulario.querySelectorAll("input")].forEach((tag) => {
    console.log(tag);
    dados[tag.name] = tag.value;
  });
  console.log(dados);

  const form = new FormData(formulario);
  console.log(form.get("nome"));
  console.log(form.forEach((valor, chave) =>
  {
    console.log(valor,chave);
  })
  );
}
