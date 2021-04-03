function adicionarFilme(){
    var filme=document.getElementById("filme").value;
    var trailler=document.getElementById("trailler").value
    if (testeLink(filme)) {
        listaFilmes(filme,trailler)
    }
    else{
        alert("link invalido")
    }
}
function listaFilmes(filme,trailler) {
    var listaFilme = document.getElementById("listaFilmes");
    var novoFilme =`<img src =${filme}>`
    var novotrailler =`<iframe width="560" height="315" src="${trailler}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    listaFilme.innerHTML=listaFilme.innerHTML + novoFilme + novotrailler
}
function testeLink(filme) {
    if (filme.indexOf('.jpg')!=-1) {
        return true
    }
    else{
        return false
    }
}