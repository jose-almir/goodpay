let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = String(today.getFullYear());
console.log(today)

today = mm + "/" + dd + "/" + yyyy;

const btnLimpar = document.getElementById('limpar');   
const btn = document.getElementById('calcular');
const btnConfirmar = document.getElementById('btnConfirmar')   

const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]')

/*
btnConfirmar.addEventListener("click", () => {

    let dataIns = document.getElementById("login").value;
    let dataCorrect = dataIns.split('-').reverse().join('-');
    console.log(dataCorrect)

    let dataInserida = new Date(dataCorrect);
    console.log(dataInserida)
    let dd = String(dataInserida.getDate() +1).padStart(2, '0');
    let mm = String(dataInserida.getMonth() + 1).padStart(2, '0');
    let yyyy = String(dataInserida.getFullYear());
    console.log(dataInserida)

    dataInserida = mm + "-" + dd + "-" + yyyy;

    console.log(dataInserida)

    const data = new Date(dataInserida) - new Date(today)
    const dataDIa = data / 86400000

    console.log(dataDIa)

    document.getElementById('exampleModalLabel').textContent = '';

    let mensagem = document.createTextNode( `Faltam ${dataDIa} dias para o evento selecionado`)

    document.getElementById('exampleModalLabel').appendChild(mensagem)

    let Dias = document.querySelector('.Dias')

    if(Dias.style.display === 'block') {
        Dias.style.display = 'none';
    }else {
        Dias.style.display = 'block';

        limpar.addEventListener("click", () => {
            if(Dias.style.display === 'block'){
                Dias.style.display = 'none'
                document.getElementById('exampleModalLabel').removeChild(exampleModalLabel.firstChild)
            }
            
            
        }); 
    }
             
    });    */               

    calcular.addEventListener("click", () => {

        for(const radioButton of radioButtons){

            let dataCerta
            let evento

            if(radioButton.checked){
                evento = radioButton.textContent
                dataCerta = radioButton.value
                
                if(dataCerta === "dataInserida"){

                    let dataIns = document.getElementById("login").value;
                    let dataCorrect = dataIns.split('/').reverse().join('/');
                    console.log(dataCorrect)

                    let dataInserida = new Date(dataCorrect);
                    console.log(dataInserida)
                    let dd = String(dataInserida.getDate()).padStart(2, '0');
                    let mm = String(dataInserida.getMonth() + 1).padStart(2, '0');
                    let yyyy = String(dataInserida.getFullYear());
                    console.log(dataInserida)

                    dataInserida = mm + "/" + dd + "/" + yyyy;

                    console.log(dataInserida)

                    const data = new Date(dataInserida) - new Date(today)
                    const dataDIa = data / 86400000

                    console.log(dataDIa)

                    document.getElementById('exampleModalLabel').textContent = '';

                    let mensagem = document.createTextNode( `Faltam ${dataDIa} dias para o evento selecionado`)

                    document.getElementById('exampleModalLabel').appendChild(mensagem)

                    let Dias = document.querySelector('.Dias')

                    if(Dias.style.display === 'block') {
                        Dias.style.display = 'none';
                    }else {
                        Dias.style.display = 'block';

                        limpar.addEventListener("click", () => {
                            if(Dias.style.display === 'block'){
                                Dias.style.display = 'none'
                                document.getElementById('exampleModalLabel').removeChild(exampleModalLabel.firstChild)
                            }
                            
                            
                        }); 
                    }

                }else{

                    const data = new Date(dataCerta) - new Date(today)
                    const dataDIa = data / 86400000
    
                    document.getElementById('exampleModalLabel').textContent = '';
    
                    let mensagem = document.createTextNode( `Faltam ${dataDIa} dias para o evento selecionado`)
    
                    document.getElementById('exampleModalLabel').appendChild(mensagem)
    
                    let Dias = document.querySelector('.Dias')
    
                    if(Dias.style.display === 'block') {
                        Dias.style.display = 'none';
                    }else {
                        Dias.style.display = 'block';
    
                        limpar.addEventListener("click", () => {
                            if(Dias.style.display === 'block'){
                                Dias.style.display = 'none'
                                document.getElementById('exampleModalLabel').removeChild(exampleModalLabel.firstChild)
                            }
                            
                            
                        }); 
                    }
                        
                }
            }
        }
    });

                




























                