import usuarios from "./moduloDados.js";

let tbody1 = document.getElementById("tbody1")

for(let i = 0; i < usuarios.length; i++){
    let tr = document.createElement('tr')
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    td1.innerHTML = `${usuarios[i].id}`;
    td2.innerHTML = `${usuarios[i].nomeUsuario}`
    td3.innerHTML = `${usuarios[i].email}`
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody1.appendChild(tr);
}






