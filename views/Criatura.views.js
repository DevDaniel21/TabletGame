function gerarTela() {
    criaturas.forEach(criatura => {
        informacoes.innerHTML += 
        `<article class="cards-informacao">
            <div class="card-foto"><img src=""></div>
            <h3 class="cards-informacao-titulo">${criatura.nome}</h3>
        </article>`
    })
}

function atualizarTela() {
    informacoes.innerHTML = ''
    criaturas.forEach(criatura => {
        informacoes.innerHTML += 
        `<article class="cards-informacao">
            <figure class="card-foto"><img src=""></figure>
            <h3 class="cards-informacao-titulo">${criatura.nome}</h3>
        </article>`
    })
}

gerarTela()