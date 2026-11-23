document.querySelector("#formulario").addEventListener("submit",
e => {
  e.preventDefault();
  const limite = Number(document.querySelector("#limite").value),
  tipo = document.querySelector("#tipo").value,
  saida = document.querySelector("#resultado");
  if (!Number.isInteger(limite) || limite<1 || limite>100) {
    saida.textContent = "Escolha um limite inteiro entre 1 e 100.";
    return
  }
  let valores = Array.from({
    length:limite
  },
  (_,
  i) => i + 1);
  if (tipo === "pares")valores = valores.filter(n => n % 2 === 0);
  if (tipo === "impares")valores = valores.filter(n => n % 2 !== 0);
  if (tipo === "multiplos")valores = valores.filter(n => n % 5 === 0);
  if (tipo === "quadrados")valores = valores.filter(n => Number.isInteger(Math.sqrt(n)));
  if (tipo === "volta")valores.reverse();
  saida.textContent = valores.join(" · ") || "Nenhum valor para este padrão."
});
document.querySelector("#formulario").requestSubmit()



