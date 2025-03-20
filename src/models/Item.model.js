class item {
    constructor(id, nome, foto, descricao) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.descricao = descricao;
    }
}

const itens = [
    new item( 0, 'EMF', undefined, 'Usado para verificar atividade paranormal.'),
    new item( 1, 'Isqueiro', undefined, 'Usado para acender velas, riturais e iluminação.'),
    new item( 2, 'Luz UV', undefined, 'Usado para enxergar impressões digitais de fantasmas.'),
]