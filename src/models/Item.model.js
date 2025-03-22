class item {
    constructor(id, nome, foto, descricao) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.descricao = descricao;
    }
}

const itens = [
    new item( 0, 'EMF', undefined, 'Nenhuma descrição.'),
    new item( 1, 'Isqueiro', undefined, 'Nenhuma descrição.'),
    new item( 2, 'Luz UV', undefined, 'Nenhuma descrição.'),
]