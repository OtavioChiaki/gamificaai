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
        slideAtual--
    }
    else {
        slideAtual = numeroSlides - 1
    }

    banner.classList.add(slides[slideAtual])
}

const selecionarSlide = (indiceSlide) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])

}

let listaCases = [

]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    let template = ""

    listaCases.forEach(cardCase => {
        template += `<div class="card">
        <img src="${cardCase.img} " alt="">
        <p>${cardCase.descricao} </p>
        <button>Ver mais</button>
    </div>`
    })

    elementoLista.innerHTML = template
}

const caregarCases = () => {

    fetch("http://localhost:3000/cases")

        .then(resposta => resposta.json())

        .then((dados) => {
           listaCases = dados
           renderizarCases ()
        })

        .catch( erro => console.error(erro))
}

const solicitarOrcamento = () => {
    let valorNome = document.getElementById ("campo-nome").value
    let valorEmail = document.getElementById ("campo-email").value
    let valorDescricao = document.getElementById ("campo-descricao").value

    console.log (valorDescricao)
    console.log (valorEmail)
    console.log (valorNome)


    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao}


        fetch("http://127.0.0.1:3000/solicitacoes", {
            method:"post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosForm)
        })
     .then (resposta => console.log(resposta))   
     .catch(erro => console.error(erro))
    }