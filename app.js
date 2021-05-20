function clicar() {
    var valor = document.querySelector("#valor").value
    var distancia = document.querySelector("#distancia").value
    var hectar = 1111
    var conv = Number(valor) / Number(hectar)
    var res = Number(conv) * Number(distancia)
    var tela = document.querySelector("#resultado")
    tela.innerHTML ="R$ "+ res.toFixed(2)
    document.querySelector("#distancia").value=null
}