let abaSelecao = document.getElementById("abaSelecao")

let valueSelecao = 0

let ganhador = document.getElementById("ganhador")

let btnSelecao = document.getElementById("btnSelecao")

let resultadoSelecao = ''

let textModal = document.getElementById("textModal")

let staticBackdropLabel = document.getElementById("staticBackdropLabel")

btnSelecao.addEventListener("click", (e) => {

    valueSelecao = abaSelecao.options[abaSelecao.selectedIndex].value
    if (valueSelecao == 0) {
        textModal.innerText = `Apresente uma promoção valida`
        staticBackdropLabel.innerText = `ERRO`
    } else {
        let txtArea = document.getElementById("txtArea").value
        let txtExport = txtArea.split(`\n`);
        resultadoSelecao = txtExport[Math.floor(Math.random() * txtExport.length)]
        textModal.innerText = `${resultadoSelecao} você ganhou o sorteio da ${valueSelecao}`
        staticBackdropLabel.innerText = `Parabéns`
    }
})