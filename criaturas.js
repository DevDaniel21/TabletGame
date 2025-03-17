class criatura {
    constructor(nome, tipo, descricao, evidencias) {
        this.nome = nome;
        this.tipo = tipo;
        this.descricao = descricao;
        this.evidencias = evidencias;
    }
}

const criaturas = [
    new criatura('Poltergeist', 'Sombrio', 'Fantasma que brinca com objetos', 'EMF 5'),
    new criatura('Demônio', 'Sombrio', 'descricao', 'evidencias'),
]

criaturas.forEach(criatura => {
    informacoes.innerHTML += '<article class="cards-informacao"><div class="card-foto"><img src=""></div><h3 class="cards-informacao-titulo">'+criatura.nome+'</h3></article>'
})

console.log(criaturas)
console.log(criaturas[0])