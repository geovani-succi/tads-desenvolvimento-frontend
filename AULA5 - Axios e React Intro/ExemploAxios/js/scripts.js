//Instalação
console.log(axios);

//Primeiro request
const obterUsuarios = async () => {
    try {
        const resposta = await axios.get("https://jsonplaceholder.typicode.com/users",
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        console.log(resposta.data)

        return resposta.data;

    } catch (error) {
        console.log(error)
    }
}

obterUsuarios();


//imprimindo dados na tela
const container = document.querySelector("#usuarios-container")

const printData = async () => {
    const dados = await obterUsuarios();

    console.log(dados)

    dados.forEach((usuario) => {
        const div = document.createElement("div")

        const nameElement = document.createElement("h2")

        nameElement.textContent = usuario.name;

        div.appendChild(nameElement);

        const emailElement = document.createElement("p")
        emailElement.textContent = usuario.email;

        div.appendChild(emailElement);

        container.appendChild(div);

    })
}

printData();

//Post
const form = document.querySelector("#post-form")
const tituloInput = document.querySelector("#titulo")
const corpo = document.querySelector("#corpo")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts", {
        body: {
            title: tituloInput.value, 
            body: corpo.value, 
            userId: 1
        }
    })
})