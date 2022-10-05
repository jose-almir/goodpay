/**
 *   Formulas 
 * M = capital*(1 + taxaFixa)**periodoDeAplicacao
 * M = C + J
 * J = M - C
 * O incremento mensal vai ser adicionado ao valor do montante
 * 2 mes em diante vai sempre acrescentar o valor mensal ao montante = MONTANTE + MENSAL
 * Vamos ter o montante calulado sem o acrescimo mensal no primeiro mes e a partir do segundo mes teremos o acrescimo do valor mensal ao montante.
*/

function montante(evento){
    
    const resultadoHTML = document.querySelector('#resultado')
    let valorMensal = parseFloat(document.querySelector('.valorMensal').value);
    let capital = parseFloat(document.querySelector('.capital').value);
    let taxaFixa = parseFloat(document.querySelector('.taxaFixa').value);
    let periodoDeAplicacao = parseInt(document.querySelector('.periodoDeAplicacao').value);
    
    taxaFixa /= 100 

    let montante = capital * (Math.pow((1 + taxaFixa), periodoDeAplicacao));
    const juros = montante - capital
    console.log('Juros: '+ juros)
    
    let divMontante = document.createElement('div')
    divMontante.classList.add('montanteTotal')
    divMontante.innerText = `Montante mes ${0}: ${montante}`
    resultadoHTML.appendChild(divMontante)

    if(valorMensal > 0){
        for(let i = 0; i < periodoDeAplicacao; i++){
            Math.round('Montante:'+ montante)
            capital += valorMensal
            console.log(valorMensal, capital, montante)
            montante = capital * (Math.pow((1 + taxaFixa), periodoDeAplicacao));
            console.log(montante)
            
            divMontante = document.createElement('div')
            divMontante.classList.add('montanteTotal')
            divMontante.innerText = `Montante mes ${i + 1}: ${montante}`
            resultadoHTML.appendChild(divMontante)
        }
    } else {
        document.write('montante: ' + montante)
    }
   
}
