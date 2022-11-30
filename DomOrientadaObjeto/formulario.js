function pegarDados(event) {
  event.preventDefault();

  const formulario = document.querySelector("form");
  const dados = {};

  [...formulario.querySelectorAll("input")].forEach((tag) => {
    dados[tag.name] = tag.value;
    sessionStorage.setItem(tag,name, dados[tag.name]);
  });
  console.log(sessionStorage);

  const form = new FormData(formulario);
  console.log(form.get("nome"));
  console.log(form.forEach((valor, chave) =>
  {
    console.log(valor,chave);
  })
  );
}
