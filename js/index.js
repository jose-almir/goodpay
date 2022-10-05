/**
 * Trouxe o array do arquivo moduloDados.js
 * para o index.js
 */

import usuarios from "./moduloDados.js";


const btnEntrar = document.getElementById("btnEntrar")

const alertaCaptcha = new bootstrap.Modal("#erroCaptcha");
const spanCaptcha = document.getElementById("captcha");

const captchaGerado = geradorNumeros();

spanCaptcha.innerText = `Resolva a Operação: ${captchaGerado.num1ENum2}`;

btnEntrar.addEventListener("click", () => {
  const inputLogin = document.getElementById("login").value;
  const inputSenha = document.getElementById("senha").value;

  const inputCaptcha = parseInt(document.getElementById("input-captcha").value);

  let usuarioValido;

  if (captchaGerado.resultado == inputCaptcha) {
    for (let usuario of usuarios) {
      if (usuario.nomeUsuario == inputLogin) {
        usuarioValido = usuario;
        if (inputSenha == usuarioValido.senha) {
          armazenarDados(usuarioValido)
        } else {
          /*modal de erro de senha precisa ser implementado
                    alertaLoginSenha.show()
                    break*/
        }
      } else {
        /*modal de erro de usuario precisa ser implementado
                alertaLoginUsuario.show()
                break**/
      }
    }
  } else {
    alertaCaptcha.show();
  }
});

//Função geradora de números para verificação de captcha
function geradorNumeros() {
  let num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 50);

  let captcha = {
    num1: num1,
    num2: num2,
    num1ENum2: num1 + " + " + num2 + " = ?",
    resultado: num1 + num2,
  };

  return captcha;
}

const btnRecuperar = document.getElementById('btnRecuperar')

btnRecuperar.addEventListener('click', () => {
    window.location.pathname = '/recuperacaoDeSenha.html'
})

// ------------------ Geolocation services ----------------------//

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    geolocalizacao()
    toast.show()
  })
}

function geolocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      document.getElementById("geolocation").innerHTML =
        "latitude =" +
        position.coords.latitude +
        "<br> longitude =" +
        position.coords.longitude;
    });
  } else {
    (error) => {
      if (error.code == error.PERMISSION_DENIED) {
        alert("permissão negada :-(");
      }
    };
  }
}

function armazenarDados(usuario) {
  sessionStorage.setItem('usuario', JSON.stringify(usuario))
  localStorage.setItem('usuario', JSON.stringify(usuario))
  window.location.replace("app.html")

}

function carregarDados() {
  const valorLogin = localStorage.getItem('usuario')
  let validLogin = JSON.parse(valorLogin)

  if (validLogin != null) {
      window.location.replace("app.html")
      console.log(usuarioLagado)
  }
  
}

carregarDados()
