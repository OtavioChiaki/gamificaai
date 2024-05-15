let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconX = document.getElementById("icone-x")

function abrirFecharMenu() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")

        iconX.style.display = "inline"

        iconeBarras.style.display = "none"

    } else {
        menu.classList.add("menu-fechado")

        iconX.style.display = "none"

        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconX.style.display = "inline"
    iconeBarras.style.display = "none"
}



let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {

    banner.classList.remove(slides[slideAtual])

    if (slideAtual < (numeroSlides - 1)) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {

    banner.classList.remove(slides[slideAtual])

if (slideAtual > 0) {
    slideAtual --
}
else {
    slideAtual  = numeroSlides -1
}

    banner.classList.add(slides[slideAtual])
}

const selecionarSlide = (indiceSlide) => {
slides.forEach(slide => banner.classList.remove (slide) )

slideAtual = indiceSlide

banner.classList.add (slides [indiceSlide])

}

let listaCases = [
{
        img: "https://unsplash.it/600/400?image=46",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias inovadoras"
},

{
        img: "https://unsplash.it/600/400?image=57",
        descricao: "Uma  empresa de consultoria  cria uma narrativa interativa de gamificação para seu programa tecnologico"
},

{
        img: "https://unsplash.it/600/400?image=44",
        descricao: "Uma  empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo"
},

{
        img: "https://unsplash.it/600/400?image=54",
        descricao: "Uma  empresa de saude promove o bem estar com a gamificação :)"
}
]

const renderizarCases = () => {
    let elementoLista = document.getElementById ("lista-cards")

    let template = ""

    listaCases.forEach ( cardCase => {
        template += `<div class="card">
        <img src="${cardCase.img} " alt="">
        <p>${cardCase.descricao} </p>
        <button>Ver mais</button>
    </div>`
    } )

    elementoLista.innerHTML = template
}