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
