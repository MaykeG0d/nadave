const botao = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".conteudo");

for (let i = 0; i < botao.length; i++) {
    botao[i].onclick = function () {
        for (let j = 0; j < botao.length; j++) {
            botao[j].classList.remove("ativo");
            abas[j].classList.remove("ativo");
        }
        botao[i].classList.add("ativo");
        abas[i].classList.add("ativo");


    }
}

