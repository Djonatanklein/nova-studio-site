// =========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =========================

const elementos = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("ativo");

                observador.unobserve(entrada.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {
    observador.observe(elemento);
});


// =========================
// MENU ATIVO
// =========================

const secoes = document.querySelectorAll("section[id]");

const linksMenu = document.querySelectorAll(
    'nav a[href^="#"]'
);


function atualizarMenu() {

    let secaoAtual = "inicio";

    const linhaReferencia = 180;


    secoes.forEach((secao) => {

        const posicao = secao.getBoundingClientRect();

        if (
            posicao.top <= linhaReferencia &&
            posicao.bottom > linhaReferencia
        ) {
            secaoAtual = secao.id;
        }

    });


    // Se chegou no final da página,
    // destaca Contato

    const chegouNoFinal =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;


    if (chegouNoFinal) {
        secaoAtual = "contato";
    }


    linksMenu.forEach((link) => {

        link.classList.remove("ativo-menu");

        if (
            link.getAttribute("href") ===
            `#${secaoAtual}`
        ) {
            link.classList.add("ativo-menu");
        }

    });
}


window.addEventListener(
    "scroll",
    atualizarMenu
);

window.addEventListener(
    "load",
    atualizarMenu
);

atualizarMenu();