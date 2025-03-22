class agente {
    constructor(id, nome, foto, descricao) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.descricao = descricao;
    }
}

class emblema {
    constructor(id, nome, foto, descricao) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.descricao = descricao;
    }
}

const agentes = [
    new agente(0, 'Daniel', 'url(imgs/daniel.png)', 'Nenhuma decrição.'),
]

const emblemas = [
    new emblema(0, 'Emblema(2024)', 'url(imgs/emblema.png)', 'Nenhuma descrição'),
    new emblema(1, 'Emblema(2025)', 'url(imgs/emblema_novo.png)', 'Nenhuma descrição'),
]