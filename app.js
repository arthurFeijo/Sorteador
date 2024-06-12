let lista = []

function render () {
    document.getElementById('listaItens').innerHTML = ''

    lista.forEach(function formarLista (item) {
        const div = document.createElement('div')
        const listaItens = document.getElementById('listaItens')

        div.innerText = item
        listaItens.appendChild(div)
    })
}

render()

function addItem () {
    let input = document.getElementById('input-item')
    let item = input.value

    if (item !== '') {
        lista.push(item)
        input.value = ''
        render()
    }
}

function limpar () {
    let espaçoResultado = document.getElementById('espaçoResultado')
    espaçoResultado.innerText = ''
    listaItens.innerHTML = ''
    
    lista.splice(0, lista.length)
}

function gerar () {
    let i = Math.floor(Math.random() * lista.length)
    let resultado = lista[i]
    if (typeof (resultado) != "undefined") {
        let espaçoResultado = document.getElementById('espaçoResultado')
        espaçoResultado.innerText = resultado
    }
}






//ENVIAR COM ENTER v
document.getElementById("input-item")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("add-button").click();
    }
});
//-------------------

/*function itemAleatorio () {
    let i = Math.floor(Math.random() * lista.length)
    let resultado = lista[i]
    if (typeof(resultado) != "undefined") {
        const div = document.createElement('div')
        div.className = 'main'
        div.innerText = resultado
        document.getElementById('espaçoResultado').appendChild(div)
    }
}*/