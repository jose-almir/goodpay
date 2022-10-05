const formFGTS = document.getElementById("form-fgts");
let salBrut = 0;
let saldoAnt = 0;
let data1 = "";
let data2 = "";

formFGTS.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const salarioBrutoInput = document.querySelector("#floatingInputGrid1");
  salBrut = salarioBrutoInput.value;
  const saldoAnteriorInput = document.querySelector("#floatingInputGrid2");
  saldoAnt = saldoAnteriorInput.value;
  const dataInicialInput = document.querySelector("#floatingInputGrid3");
  data1 = dataInicialInput.value;
  const dataFinalInput = document.querySelector("#floatingInputGrid4");
  data2 = dataFinalInput.value;

  let dataInicial = new Date(data1);
  let dataFinal = new Date(data2);
  function getMonthDifference(dataInicial, dataFinal) {
    console.log(dataInicial, dataFinal);
    return (
      dataFinal.getMonth() -
      dataInicial.getMonth() +
      12 * (dataFinal.getFullYear() - dataInicial.getFullYear())
    );
  }

  console.log(getMonthDifference(dataInicial, dataFinal));


  const depositoMensal = salBrut * 0.08
  const valPago = depositoMensal * getMonthDifference(dataInicial, dataFinal)
  const totalFGTS = valPago + parseInt(saldoAnt)
  
console.log(totalFGTS)
const list = document.getElementById('teste-imprimir')
list.innerHTML +=`<div id="card-resultados" class="card mx-auto" style="width: 18rem;">
<div class="card-header mx-auto ">
  <strong> Resultados </strong>
</div>
<ul id="lista-resultados" class="list-group list-group-flush ">
  <li class="list-group-item">Total na conta: R$${totalFGTS}</li>
  <li class="list-group-item">Sua contribuição: R$${depositoMensal}</li>
  <li class="list-group-item">Total de contribuções: R$${valPago}</li>
</ul>
</div>
`

});

