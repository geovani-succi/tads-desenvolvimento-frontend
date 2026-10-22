const primeiroNome: string = "João";
const segundoNome: string = "Silva";
const idade: number = 30;

const nomeCompleto: string = `${primeiroNome} ${segundoNome}`;

function exibirInformacoes(): void {
    console.log(`Nome completo: ${nomeCompleto}`);
    console.log(`Idade: ${idade}`);
}

exibirInformacoes();