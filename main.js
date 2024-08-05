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



function multiplicarMensal() {
    // transforma em um valor numerico
    const valor = parseFloat(document.getElementById('inputValueM').value);


    let N = 0;

    if (valor <= 2259.20) {
        N = 0;
    } 
    else if (valor > 2259.20 && valor <= 2826.65) {
        N = 0.075;
    } 
    else if (valor > 2826.65 && valor <= 3751.05) {
        N = 0.15;
    } 
    else if (valor > 3751.05 && valor <= 4664.68) {
        N = 0.225; 
    }
    else if (valor > 4664.68) {
        N = 0.275;
    }

    // calcula e mostra
    const resultado = valor * N;
    document.getElementById('resultadoM').textContent = `Resultado: ${resultado.toFixed(2)}`; // Formatar resultado para 2 casas decimais
}




  

   


function multiplicarAnual() {
    // transforma em um valor numerico
    const valor = parseFloat(document.getElementById('inputValueA').value);

    let N = 0;

    if (valor <= 24511.92) {
        N = 0;
    } 
    else if (valor > 24511.93 && valor <= 33919.80) { 
        N = 0.075;
    } 
    else if (valor > 33919.80 && valor <= 45012.60) {
        N = 0.15;
    } 
    else if (valor > 45012.61 && valor <= 55976.16) {
        N = 0.225;
    } 
    else if (valor > 55976.16) {
        N = 0.275;
    }

    // calcula e mostra
    const resultado = valor * N;
    document.getElementById('resultadoA').textContent = `Resultado: ${resultado.toFixed(2)}`; // deixa com duas casas decimais
}
