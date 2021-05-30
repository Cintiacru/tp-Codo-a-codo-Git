const formulario = document.querySelector('#formulario');
const usuario = formulario.usuario;
const clave = formulario.clave;

formulario.addEventListener('submit', validar);

function validar(e) {
    if ( usuario.value === "") {
        alert("debe completar el usuario");
        e.preventDefault();
    } else if ( !usuario.value.includes("@") ) {
        alert("el usuario debe contener un @");
        e.preventDefault();
    } else if ( clave.value === "" ) {
        alert("debe ingresar una clave");
        e.preventDefault();
    } else {
        alert('acceso correcto!');
    }
}