// Calculadora de Gorjeta
const valorConta = 100;
const percentualGorjeta = 15;

// Calculando o valor da gorjeta e o total a pagar
const valorGorjeta = valorConta * (percentualGorjeta / 100);
const totalPagar = valorConta + valorGorjeta;

// Exibindo os resultados
console.log(`Valor da Conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, Total a pagar: R$${totalPagar.toFixed(2)}`);