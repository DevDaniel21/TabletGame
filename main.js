const home = document.getElementById('home');
const informacoes = document.getElementById('informacoes');

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
const evidencias = [
        document.getElementById('emf'),

];

function marcar(evidencia) {
        if (evidencia.style.color == "") {
                console.log("borda")
                evidencia.style.color = "whitesmoke";
                evidencia.style.border = "2px solid black";
                evidencia.style.borderRadius = "100%";
        } 
        else if (evidencia.style.border == "2px solid black") {
                console.log("linha")
                evidencia.style.border = "none";
                evidencia.style.borderRadius = "none";
                evidencia.style.textDecoration = "line-through red 2px";
        } 
        else if (evidencia.style.textDecoration != "") {
                console.log("cinza")
                evidencia.style.textDecoration = "";
                evidencia.style.color = "#929292";
        } 
        else if (evidencia.style.color != "") {
                console.log("normal")
                evidencia.style.color = "";
        }
}

// Fantasmas ---------------------------------------------------------