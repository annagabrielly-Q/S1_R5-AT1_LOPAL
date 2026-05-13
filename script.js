let final = 9;
let soma = 0;
let numeros;
let contador = 0;

while (final != 0) {

   contador++;

   do {
      numeros = Number(prompt("digite o número"));
   } while (isNaN(numeros));
   soma = soma + numeros;
   final = numeros;

}
alert("quantidade dos números é " + (contador - 1) + " a soma total de todos os números é " + soma + " e a média vai ser " + soma / (contador - 1))