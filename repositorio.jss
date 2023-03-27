function fibonacci(limite) {
  let seq = [0, 1];
  while (seq[seq.length - 1] < limite) {
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  }
  return seq;
}

let num = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "));
let fib_seq = fibonacci(num);

if (fib_seq.includes(num)) {
  console.log(num + " pertence à sequência de Fibonacci.");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}



