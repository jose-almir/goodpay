function jurosSimples(){
    let resultadoHTML = document.querySelector('resposta')

    let quanto = parseFloat(document.querySelector('.porcentagem').value);
    let deValor = parseFloat(document.querySelector('.deValor').value);
   
    quanto /= 100

    let resultado = quanto * deValor
    

    document.querySelector('#resposta').value = resultado
}

function jurosSimples2(){
    let resultadoHTML = document.querySelector('resposta')

    let deValor1 = parseFloat(document.querySelector('.deValor1').value);
    let deValor2 = parseFloat(document.querySelector('.deValor2').value);
   
    

    let resultado = deValor1 / deValor2
    

    document.querySelector('#resposta2').value = resultado * 100
}