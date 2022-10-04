/**
 * Trouxe o array do arquivo moduloDados.js
 * para o index.js
 */
 import usuarios from "./moduloDados.js";

const btnEntrar = document.getElementById('btnEntrar')
const alertaLogin = new bootstrap.Modal('#alertaLogin')

btnEntrar.addEventListener('click', () => {
    const inputlogin = document.getElementById('login').value
    const inputSenha = document.getElementById('senha').value

    let usuarioValido

    for(let usuario of usuarios){
        if(usuario.nomeUsuario == inputlogin){
            usuarioValido = usuario
            break
        }else{
            alertaLogin.show()
        }
    }

    if(inputSenha == usuarioValido.senha){
        //encaminhado o usuário para outra página
        window.location.pathname = '/app,html'

    }else{
        alertaLogin.show()
    }
})