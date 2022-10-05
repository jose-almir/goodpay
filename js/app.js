const textoBemVindo = document.getElementById('texto-cumprimentos')
let data = sessionStorage.getItem('usuario')


$('.btn-close').click(function (event) {
    $('#bemvindo').fadeOut();
    event.preventDefault();
});

$(document).ready(function () {
    let ls = sessionStorage.getItem("modal");
    if (!ls) {
        let usuarioLogado = JSON.parse(data)
        textoBemVindo.innerText = `Seja bem vindo(a) ${usuarioLogado.nomeUsuario}`
        $('#bemvindo').modal('show');
        
        console.log(usuarioLogado)

    }
})


$('#bemvindo').on('shown.bs.modal', function () {
    sessionStorage.setItem("modal", false);
});