var btnLog = document.querySelector('#btnLog');
var log = document.querySelector('.log');
var edad = document.querySelector('.edad');
var btnEdad = document.querySelector('#btnEdad');
var genero = document.querySelector('.genero');
var hombre = document.querySelector('#hombre');
var mujer = document.querySelector('#mujer');
var caja = document.querySelector('.caja');
var F1 = document.querySelector('#F1');
var F2 = document.querySelector('#F2');


var socket = io();

var datos = [];

var template = `<div class="chat">
                    <div id="tabla">
                        
                    </div>
                    <form>
                        <input type="text" id="msg"><span id="snd">Enviar</span>
                    </form>
                </div>`;


btnLog.addEventListener('click', () => {
    log.style.marginLeft = '-150%';
    edad.style.top = "0";
    edad.style.left = "35%";
    datos.push(F1.value);
});

btnEdad.addEventListener('click', () => {
    edad.style.transform = "scale(0)";
    edad.style.opacity = '0';
    genero.style.bottom = "0";
    datos.push(F2.value);
});

hombre.addEventListener('click', () => {
    genero.style.opacity = '0';
    datos.push('hombre');
    socket.emit('dataLog', datos);
    caja.removeChild(log);
    caja.removeChild(edad);
    caja.removeChild(genero);
    caja.innerHTML = template;
    var msg = document.querySelector('#msg');
    var enviar = document.querySelector('#snd');
    var tabla = document.querySelector('#tabla');

    enviar.addEventListener('click', () => {
        let jakinPuto = {
            name : datos[0],
            msge : msg.value
        };

        socket.emit('msg', jakinPuto);

        msg.value = '';

    });
});

mujer.addEventListener('click', () => {
    genero.style.opacity = '0';
    datos.push('mujer');
    socket.emit('dataLog', datos);
    caja.removeChild(log);
    caja.removeChild(edad);
    caja.removeChild(genero);
    caja.innerHTML = template;
    var msg = document.querySelector('#msg');
    var enviar = document.querySelector('#snd');
    var tabla = document.querySelector('#tabla');

    enviar.addEventListener('click', () => {
        let jakinPuto = {
            name : datos[0],
            msge : msg.value
        };

        socket.emit('msg', jakinPuto);

        msg.value = '';

    });
});

socket.on('msg', jakinPuto => {

    let fila = `<span>${jakinPuto.name} : ${jakinPuto.msge}<span><br><hr><br>`

    tabla.innerHTML += fila;
});