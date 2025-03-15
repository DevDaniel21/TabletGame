const home = document.getElementById('home');
const informacoes = document.getElementById('informacoes');

function trocarPagina(paginaEscolhida) {
        home.style.display = "none";
        informacoes.style.display = "none";
    
        paginaEscolhida.style.display = "flex";
}