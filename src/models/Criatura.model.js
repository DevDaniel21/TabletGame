class criatura {
    constructor(id, nome, foto, descricao, evidencias) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.descricao = descricao;
        this.evidencias = evidencias;
    }
}

const criaturas = [
    new criatura( 0, 'Poltergeist', 'url(imgs/garota_esquisita.png)','Nenhuma descrição', 'EMF 5'),
    new criatura( 1, 'Demônio', 'url(https://preview.redd.it/lttyjbmko0z71.png?width=1920&format=png&auto=webp&s=f33c8309034a1a42d72dfeb707fc38054a8c2a72)', 'Nenhuma descrição', 'Luz UV'),
]
