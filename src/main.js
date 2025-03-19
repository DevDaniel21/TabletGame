const home = document.getElementById('home');
const informacoes = document.getElementById('informacoes');
const informacao_selecionada = document.getElementById('informacao-selecionada')

function trocarPagina(paginaEscolhida) {
        home.style.display = "none";
        informacoes.style.display = "none";
    
        paginaEscolhida.style.display = "flex";
}
// Tela cheia----------------------------------------------------
const tela = document.documentElement;
const telaCheia = document.getElementById('telaCheia');
const sairTelaCheia = document.getElementById('sairTelaCheia');

function abrirTelaCheia() {
        if (tela.requestFullscreen) {
                tela.requestFullscreen();
                telaCheia.style.display = "none"
                sairTelaCheia.style.display = "flex"
                console.log("teste1")
        }
}
function fecharTelaCheia() {
        if (document.exitFullscreen) {
                document.exitFullscreen();
                sairTelaCheia.style.display = "none"
                telaCheia.style.display = "flex"
                console.log("teste2")
        }
}

// Evidencias------------------------------------------------------
function marcar(evidencia) {
        if (evidencia.style.color == "") {
                evidencia.style.color = "whitesmoke";
                evidencia.style.border = "2px solid black";
                evidencia.style.borderRadius = "100%";
        } 
        else if (evidencia.style.border == "2px solid black") {
                evidencia.style.border = "none";
                evidencia.style.borderRadius = "none";
                evidencia.style.textDecoration = "line-through red 2px";
        } 
        else if (evidencia.style.textDecoration != "") {
                evidencia.style.color = "";
                evidencia.style.textDecoration = "";
        } 
}

// Fantasmas ---------------------------------------------------------




// TESTES ------------------------------------------------------------
function testes() {
        home.style.display = 'none'
        informacoes.style.display = 'none'
}

testes()