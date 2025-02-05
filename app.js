// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById('listaAmigos');

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre != '') {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(nombre));
        lista.appendChild(li);
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor ingresa un nombre valido');
    }
}

function sortearAmigo() {
    document.getElementById('resultado').innerHTML =  `El amigo sorteado es: ${amigos[Math.floor(Math.random() * amigos.length)]}`;
    lista.innerHTML = '';
    amigos = [];
}