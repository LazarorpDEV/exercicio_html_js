const form = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valorA = Number(document.getElementById("campoA").value);
  const valorB = Number(document.getElementById("campoB").value);

  if (valorB > valorA) {
    mensagem.textContent = "✅ Formulário válido!";
    mensagem.className = "sucesso";
  } else {
    mensagem.textContent = "❌ O número B deve ser maior que o número A.";
    mensagem.className = "erro";
  }
});
