/* Gere uma lista de objetivos financeiros de acordo com o que o usuário preencher no form:

    Título do objetivo
    Dinheiro desejado
    Data para alcançar meta */

 

    let inputObjetivo = document.getElementById("objetivo")

    let inputDinheiro = document.getElementById("dinheiro")

    let inputMeta = document.getElementById("meta")

    let inputCapitalInicial = document.getElementById("capitalInicial")

    let btnEnviar = document.getElementById("btnEnviar")

   

    let objetivos = [
        {

        }
    ]

    

  objetivos.shift();

   function receberValor() {
    let objetivo = {
        objetivo:'',
        dinheiro:'',
        meta: '',
        capital:'',
    }

    objetivo.objetivo= inputObjetivo.value

    objetivo.dinheiro= inputDinheiro.value

    objetivo.meta= inputMeta.value
    
    objetivo.capital= inputCapitalInicial.value
    objetivos[objetivos.length] = objetivo
    
    


   }

   btnEnviar.addEventListener('click', function(evento){

        evento.preventDefault()

        receberValor()

        renderizarLista()
     
    })

    function renderizarLista(){

        const renderizarLista = document.getElementById("listaObjetivo")
        renderizarLista.innerHTML = ''
        
        
         for (let obj of objetivos){
            const divObjetivo = document.createElement('div')
            divObjetivo.classList.add('divprincipal','d-flex', 'input-group-text')
            

             renderizarLista.appendChild(divObjetivo)
                

            const lista = document.createElement('ul')
            divObjetivo.appendChild(lista)
            let itemLista = document.createElement('li')
            

                itemLista.innerText = obj.objetivo
                
                lista.appendChild(itemLista)
                itemLista.classList.add('objetivo')
                itemLista = document.createElement('li')
                
                itemLista.innerText = parseFloat(obj.dinheiro)
                
                lista.appendChild(itemLista)
                itemLista.classList.add('dinheiro')
                itemLista = document.createElement('li')

                itemLista.innerText = obj.meta.split('-').reverse().join('/')
               


                lista.appendChild(itemLista)
                itemLista.classList.add('meta')
                itemLista = document.createElement('li')

                itemLista.innerText = parseFloat(obj.capital)

                lista.appendChild(itemLista)
                itemLista.classList.add('capital')

         }

        }