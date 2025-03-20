const referencias = [
    {nome: 'Itens', foto: '', referencia: 'itens'}, 
    {nome: 'Criaturas', foto: '', referencia:  'criaturas'}
]

function gerarTela(pagina, numero) {
    // ESPECIFICO
    if (pagina == 'criatura') {
        apagarTela(informacoes)
        informacao_selecionada.style.display = 'flex';
        informacao_selecionada.innerHTML = 
            `<figure class="informacao-foto" id="informacao-foto" style="background-image: ${criaturas[numero].foto}"></figure>
            <div class="informacao-descricao">
                <h2 id="informacao-titulo">${criaturas[numero].nome}<hr></h2>
                <p id="informacao-descricao">${criaturas[numero].descricao}</p>
            </div>`
    } 
    // ESPECIFICO 
    else if (pagina == 'item') {
        apagarTela(informacoes)
        informacao_selecionada.style.display = 'flex';
        informacao_selecionada.innerHTML = 
            `<figure class="informacao-foto" id="informacao-foto" style="background-image: ${itens[numero].foto}"></figure>
            <div class="informacao-descricao">
                <h2 id="informacao-titulo">${itens[numero].nome}<hr></h2>
                <p id="informacao-descricao">${itens[numero].descricao}</p>
            </div>`
    } 
    // GERAL
    else if (pagina == 'criaturas') {
        informacoes.innerHTML = ''
        criaturas.forEach(criatura => {
            informacoes.innerHTML += `
            <article class="cards-informacao" onclick="gerarTela('criatura', ${criatura.id})"><figure class="card-foto" style="background-image: ${criatura.foto}"></figure><h3 class="cards-informacao-titulo">${criatura.nome}</h3></article>`
        })
    } 
    // GERAL
    else if (pagina == 'itens') {
        informacoes.innerHTML = ''
        itens.forEach(item => {
            informacoes.innerHTML += `
            <article class="cards-informacao" onclick="gerarTela('item', ${item.id})"><figure class="card-foto" style="background-image: ${item.foto}"></figure><h3 class="cards-informacao-titulo">${item.nome}</h3></article>`
        })
    } 
    // TODAS AS INFORMAÇÕES
    else if (pagina == 'informacoes') {
        informacoes.innerHTML = ''
        referencias.forEach(referencial => {
            informacoes.innerHTML += `
            <article class="cards-informacao" onclick="gerarTela('${referencial.referencia}')"><figure class="card-foto" style="background-image: ${referencial.foto}"></figure><h3 class="cards-informacao-titulo">${referencial.nome}</h3></article>`
        })
    }
}

function apagarTela(tela) {
    tela.style.display = 'none'
}
