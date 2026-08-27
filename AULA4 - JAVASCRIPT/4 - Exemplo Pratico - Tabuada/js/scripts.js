// Pega os elementos da página
const btnGerar = document.getElementById("btnGerar");
const inputNumero = document.getElementById("numero");
const resultado = document.getElementById("resultado");

// Função que gera a tabuada usando um laço for
function gerarTabuada(numero) {
    resultado.innerHTML = ""; // Limpa o resultado anterior

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("li");
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        resultado.appendChild(item);
    }
}

// Evento de clique no botão
btnGerar.addEventListener("click", function () {
    const numero = Number(inputNumero.value);

    if (numero > 0) {
        gerarTabuada(numero);
    } else {
        alert("Digite um número válido!");
    }
});
