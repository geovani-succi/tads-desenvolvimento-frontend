// Declaração de variáveis
const pi = 3.1415; // Valor imutável
let minhaIdade = 25; // Valor que pode mudar
minhaIdade = 26; // Reatribuição permitida
// Exibindo resultados no console
console.log(pi); // Saída: 3.1415
console.log(minhaIdade); // Saída: 26

//Função
function somarValores(a, b){
    return a + b;
}

let resultado = somarValores(10, 23);
console.log("Resultado da Soma = " + resultado);

//prompt
const age = prompt("Digite sua idade");
console.log(age);

//Alert
const nome = prompt("Digite seu nome");
alert("Olá " + nome);

//estruturas de condição if-else
// 1. Declaração da variável
const idade = 18;
// 2. Estrutura condicional if
if (idade >= 18) {
console.log("Maior de idade");
// Roda se verdadeiro
} else {
console.log("Menor de idade");
// Roda se falso
}
// Saída no console: Maior de idade

//Estrutura de repetição
// 1. Exemplo de loop while
let i = 0;
while (i < 3) {
console.log(`while: ${i}`);
i++;
}
// 2. Exemplo de loop do while
let j = 0;
do {
console.log(`do-while: ${j}`);
j++;
} while (j < 3);

//For
// 1. Exemplo clássico de loop for
for (let i = 0; i < 3; i++) {
console.log(`iteração: ${i}`);
}
// 2. Exemplo decrementando o contador
for (let j = 3; j > 0; j--) {
console.log(`contagem: ${j}`);
}

//Switch
// Exemplo de switch com dias da semana
const dia = 2;
switch (dia) {
case 1: console.log("Segunda"); break;
case 2: console.log("Terça"); break;
case 3: console.log("Quarta"); break;
default:
console.log("Outro dia");
}
// Saída no console: Terça

