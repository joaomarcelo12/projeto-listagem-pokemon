const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const botaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro")

        botaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        body.classList.add("modo-escuro")

        botaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});

