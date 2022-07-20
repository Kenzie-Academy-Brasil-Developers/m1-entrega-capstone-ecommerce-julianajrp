// ITENS E NOMEAÇÕES
const bodyPagina = document.body
const primeiraUL = document.getElementById('linha-1')
const segundaUL = document.getElementById('linha-2')
const ulMini = document.querySelector('.mini-card-carro')

let arrCarrinho = []
const data = [{
        id: 1,
        img: "../img/jaqueta.svg",
        nameItem: "Lightweight Jacket",
        description: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 2,
        img: "../img/gorro.svg",
        nameItem: "Black Hat",
        description: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Acessórios"],
    },
    {
        id: 3,
        img: "../img/mascara.svg",
        nameItem: "Mask",
        description: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        value: 40,
        addCart: "Adicionar ao carrinho",
        tag: ["Acessórios"],
    },
    {
        id: 4,
        img: "../img/camiseta_preta.svg",
        nameItem: "T-Shirt",
        description: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 5,
        img: "../img/camiseta_branca.svg",
        nameItem: "Black T-Shirt",
        description: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 6,
        img: "../img/moletom.svg",
        nameItem: "Champion Jacket",
        description: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
];
// CRIAÇAO DOS CARDS

function createCard(objeto, i) {

    let elementoListaLi = document.createElement('li')
    let elementoListaImg = document.createElement('img')
    let elementoListaMain = document.createElement('main')
    let elementoListah5Classifi = document.createElement('h5')
    let elementoListah3Titulo = document.createElement('h3')
    let elementoListah5Descr = document.createElement('h5')
    let elementoListaPreco = document.createElement('strong')
    let elementoListaAdc = document.createElement('h5')
    elementoListaAdc.setAttribute("id", objeto.id)

    elementoListaAdc.addEventListener('click', event => {
        arrCarrinho.push(objeto[i])
        gerarMiniCard(arrCarrinho, i)
        somaETotal(arrCarrinho)
        createFinal(arrCarrinho)
    })




    elementoListaLi.classList.add('card')
    elementoListaImg.classList.add('card-img')
    elementoListaMain.classList.add('card-desc')
    elementoListah5Classifi.classList.add('classification')
    elementoListah3Titulo.classList.add('titulo')
    elementoListah5Descr.classList.add('description')
    elementoListaPreco.classList.add('preco')
    elementoListaAdc.classList.add('adc-carro')

    elementoListaImg.src = objeto[i].img
    elementoListah5Classifi.textContent = objeto[i].tag
    elementoListah3Titulo.textContent = objeto[i].nameItem
    elementoListah5Descr.textContent = objeto[i].description
    elementoListaPreco.textContent = `R$ ${objeto[i].value},00`
    elementoListaAdc.textContent = objeto[i].addCart

    elementoListaMain.appendChild(elementoListah5Classifi)
    elementoListaMain.appendChild(elementoListah3Titulo)
    elementoListaMain.appendChild(elementoListah5Descr)
    elementoListaMain.appendChild(elementoListaPreco)
    elementoListaMain.appendChild(elementoListaAdc)

    elementoListaLi.appendChild(elementoListaImg)
    elementoListaLi.appendChild(elementoListaMain)

    return elementoListaLi

}
// criação card carrinho
function createMiniCard(objeto, i) {

    let elementoMiniListaLi = document.createElement('li')
    let elementoMiniListaImg = document.createElement('img')
    let elementoDivLista = document.createElement('div')
    let elementoMiniListah3Titulo = document.createElement('h3')
    let elementoMiniListaPreco = document.createElement('strong')
    let elementoMiniListaRemove = document.createElement('p')

    elementoMiniListaLi.classList.add('mini-card')
    elementoMiniListaImg.classList.add('img-mini')
    elementoDivLista.classList.add('mini-desc')
    elementoMiniListah3Titulo.classList.add('titulo-mini')
    elementoMiniListaPreco.classList.add('preco-mini')
    elementoMiniListaRemove.classList.add('remove')

    elementoMiniListaRemove.id = objeto.id

    elementoMiniListaImg.src = objeto.img
    elementoMiniListah3Titulo.textContent = objeto.nameItem
    elementoMiniListaPreco.textContent = `R$ ${objeto.value},00`
    elementoMiniListaRemove.textContent = 'Remover produto'

    elementoDivLista.appendChild(elementoMiniListah3Titulo)
    elementoDivLista.appendChild(elementoMiniListaPreco)
    elementoDivLista.appendChild(elementoMiniListaRemove)


    elementoMiniListaLi.appendChild(elementoMiniListaImg)
    elementoMiniListaLi.appendChild(elementoDivLista)

    return elementoMiniListaLi

}
//criação valor e total
function createFinal(arr) {
    let elementoNQuantidade = document.createElement('p')
    let elementoTotalValor = document.createElement('p')

    elementoNQuantidade.classList.add('total')
    elementoTotalValor.classList.add('total')

    elementoDiv1.appendChild(elementoNQuantidade)
    elementoDiv2.appendChild(elementoTotalValor)

    elementoDivTudo.appendChild(elementoDiv1)
    elementoDivTudo.appendChild(elementoDiv2)


    return elementoDivTudo
}


// EXIBIÇAO DOS CARDS
function exibirCard(objeto) {
    //limpando antes de listar
    primeiraUL.innerHTML = ''
    segundaUL.innerHTML = ''
        //
    for (let i = 0; i < objeto.length; i++) {
        if (objeto[i].id <= 3) {
            primeiraUL.appendChild(createCard(objeto, i))
        } else if (objeto[i].id >= 4 && objeto[i].id <= 6) {
            segundaUL.appendChild(createCard(objeto, i))
        }

    }
}


//appendChild precisa de um retorno
exibirCard(data)

function gerarMiniCard(arr) {
    let ulMini = document.querySelector('.mini-card-carro')
    ulMini.innerHTML = ''
    for (let j = 0; j < arr.length; j++) {
        let miniC = createMiniCard(arr[j])
        ulMini.appendChild(miniC)
    }


}


//FUNCIONALIDADES E BOTOES

//funcao-soma
function somaETotal(arr) {
    let soma = 0
    for (let k = 0; k < arr.length; k++) {
        soma += arr[k].value
    }
    const elementoTotalValor = document.getElementById('precoTotal')
    const elementoNQuantidade = document.getElementById('quantidadeProdutos')
    elementoNQuantidade.textContent = arr.length
    elementoTotalValor.textContent = soma

}

//evento removoer
ulMini.addEventListener('click', function(event) {
    const target = event.target
    if (target.tagName == 'P') {

        const id = target.id
        const index = arrCarrinho.findIndex(item => id == item.id)

        arrCarrinho.splice(index, 1)
        gerarMiniCard(arrCarrinho)
        somaETotal(arrCarrinho)
    }
})

//funcao pesquisa
let inputBusca = document.getElementsByClassName('barra-pesquisa')[0]
let btnBusca = document.getElementsByClassName('botao')[0]

btnBusca.addEventListener('click', function(event) {
        let resultadoBusca = []
        event.preventDefault()
        let busca = inputBusca.value

        for (let l = 0; l < data.length; l++) {
            let itemNome = data[l].nameItem
            let tagLista = data[l].tag[0]

            let itemNomee = itemNome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            let tagListaa = tagLista.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")

            let buscaa = busca.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            if (buscaa == itemNomee || buscaa == tagListaa) {
                resultadoBusca.push(data[l])

            }
        }
        exibirCard(resultadoBusca)
    })
    // funcao header
    // let acessorio = document.getElementById('acessorios')[0]
    // let camiseta = document.getElementById('camisetas')

// acessorio.addEventListener('click', function(event) {
//         let resultadoBusca = []
//         event.preventDefault()
//         for (let m = 0; m < data.length; m++) {

//             if (data[m].tag[0] == 'Acessórios') {
//                 resultadoBusca.push(data[m])
//             }
//         }
//     })
// calcado.addEventListener('click', function(event) {
//     let resultadoBusca = []
//     event.preventDefault()
//     for (let m = 0; m < data.length; m++) {

//         if (data[m].tag[0] == 'Calçados') {
//             resultadoBusca.push(data[m])
//         }
//     }
// })
// camiseta.addEventListener('click', function(event) {
//     let resultadoBusca = []
//     event.preventDefault()
//     for (let m = 0; m < data.length; m++) {

//         if (data[m].tag[0] == 'Camisetas') {
//             resultadoBusca.push(data[m])
//         }
//     }
// })