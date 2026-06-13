// ANIMAÇÕES AO ROLAR A PÁGINA

const elementosOcultos = document.querySelectorAll(".hidden");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

elementosOcultos.forEach((elemento) => {

    observador.observe(elemento);

});


// BOTÃO VOLTAR AO TOPO

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "btnTopo";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.classList.add("mostrar");

    } else {

        botaoTopo.classList.remove("mostrar");

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// EFEITO DE DIGITAÇÃO NO TÍTULO PRINCIPAL

const titulo = document.querySelector(".hero h1");

if (titulo) {

    const textoOriginal = titulo.textContent;

    titulo.textContent = "";

    let indice = 0;

    function escrever() {

        if (indice < textoOriginal.length) {

            titulo.textContent += textoOriginal.charAt(indice);

            indice++;

            setTimeout(escrever, 70);

        }

    }

    escrever();
}

function mostrarMomento(periodo){

    const caixa = document.getElementById("momento");

    if(!caixa) return;

    const textos = {

        manha:
        "Carolina acorda cedo e sai para procurar papel, ferro e outros materiais que possam ser vendidos.",

        meio:
        "A preocupação principal é conseguir comida para os filhos e garantir o almoço.",

        tarde:
        "Depois de trabalhar, Carolina registra observações sobre a cidade e sobre a vida na favela.",

        noite:
        "Ao final do dia, escreve seus relatos e reflete sobre a pobreza, a desigualdade e seus sonhos."
    };

    caixa.textContent = textos[periodo];
}