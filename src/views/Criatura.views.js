function gerarTela(numero) {
    if (numero == 2) {
        let criatura = criaturas[numero];
        informacao_selecionada.innerHTML = 
        `<figure class="informacao-foto" id="informacao-foto"></figure>
         <div class="informacao-descricao">
            <h2 id="informacao-titulo">${criatura.nome}<hr></h2>
            <p id="informacao-descricao">${criatura.descricao}</p>
         </div>`
        }
        else {
        criaturas.forEach(criatura => {
            informacoes.innerHTML += 
            `<article class="cards-informacao">
                <div class="card-foto"><img src=""></div>
                <h3 class="cards-informacao-titulo">${criatura.nome}</h3>
            </article>`
        })
    }
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

gerarTela(2)