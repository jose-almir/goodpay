const btnCalcular = document.getElementById("botao1");
const btnLimpar = document.getElementById("botao2")

btnCalcular.addEventListener("click", function(evento){
    evento.preventDefault()
    const valorA = parseInt(document.getElementById("valorA").value)
    const valorB = parseInt(document.getElementById("valorB").value)
    const valorC = parseInt(document.getElementById("valorC").value)

    let resultado2 = valorC * valorB / valorA

    document.getElementById('resultado').value = resultado2
    
})

btnLimpar.addEventListener("click", function(evento){
    evento.preventDefault()

    document.getElementById("resultado").value = ""
    document.getElementById('valorA').value = ""
    document.getElementById('valorB').value = ""
    document.getElementById('valorC').value = ""
})