// Inserir nos HTML's essa tag e já deixa funcional
//<script src="js/popup-conexao.js"></script>

// Criando a section com o id que a função busca pra se localizar
document.write('<section id="toastToggle"></section>');

//Essa função vai montar o toast do bootstrap
function toggleOfflineToast(){

// O conteúdo da função offlineToggleToast é equivalente a isso aqui no HTML:
{/* <div class="toast-container position-fixed bottom-0 end-0 p-3">
<div id="liveToast" class="toast " role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
  <div class="toast-header text-bg-warning border-0 d-flex justify-content-center">
    <img src="https://www.svgrepo.com/show/206438/alert-danger.svg" class="rounded me-2" alt="Imagem de alerta" width="50px">
    <div>
    <strong class="me-auto"><h2>Aviso</h2></strong>
    </div>
  </div>
  <div class="toast-body text-bg-danger">
    Você está offline. Tente reconectar sua internet.
  </div>
</div>
</div> */}

const toastToggle = document.querySelector('#toastToggle');

const divToastContainer = document.createElement('div');
divToastContainer.classList.add('toast-container', 'position-fixed', 'bottom-0', 'end-0', 'p-3', 'zindex');
const divLiveToast = document.createElement('div');
divLiveToast.id = "liveToast";
divLiveToast.classList.add('toast');
divLiveToast.role = "alert";
divLiveToast.ariaLive = "assertive";
divLiveToast.ariaAtomic = "true";
divLiveToast.setAttribute('data-bs-autohide', false)

const divToastHeader = document.createElement('div');
divToastHeader.classList.add('toast-header', 'text-bg-warning', 'border-0', 'd-flex', 'justify-content-center');

const imgInternetAlert = document.createElement('img');
imgInternetAlert.src = "https://www.svgrepo.com/show/206438/alert-danger.svg";
imgInternetAlert.classList.add('rounded', 'me-2');
imgInternetAlert.alt = "Imagem de alerta";
imgInternetAlert.width = "50px";

const divToastAviso = document.createElement('div');

const strongAviso = document.createElement('strong');
strongAviso.classList.add('me-auto');

const h2AvisoInternet = document.createElement('h2');
h2AvisoInternet.innerText = 'Aviso'

const divToastBody = document.createElement('div');
divToastBody.classList.add('toast-body', 'text-bg-danger');
divToastBody.innerText = 'Você está offline. Tente reconectar sua internet.'

 // colocando cada tag filha em sua tag mãe

 strongAviso.appendChild(h2AvisoInternet);
 divToastAviso.appendChild(strongAviso);
 divToastHeader.append(imgInternetAlert, divToastAviso);
 divLiveToast.append(divToastHeader, divToastBody);
 divToastContainer.appendChild(divLiveToast);
 toastToggle.appendChild(divToastContainer);
}

// Ativando a função para gerar a section criada com bootstrap
toggleOfflineToast();

// eventos que ativam/desativam o toast
const toastLiveExample = document.getElementById('liveToast')

window.addEventListener('offline', () => {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
});

window.addEventListener('online', () => {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.hide();
});

//<script src="js/popup-conexao.js"></script>
//<!--Importação do pop-up internet-->