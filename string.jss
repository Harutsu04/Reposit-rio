function inverteString(str) {
  let novaStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    novaStr += str[i];
  }
  return novaStr;
}

// Exemplo de uso
let minhaString = "Olá, mundo!";
let minhaStringInvertida = inverteString(minhaString);
console.log(minhaStringInvertida); // "!odnum ,álO"
