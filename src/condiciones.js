//seleccionar el elemento del formulario con el id y añadir evento
document.getElementById('loginForm').addEventListener('submit',
function(event) {

    //comprobar si la casilla de condiciones esta marcada
    if (!document.getElementById('condiciones').checked) {
        //si la casilla no esta marcada no se envia el formulario
        event.preventDefault();
        //mostar alerta para que el usuario acepte terminos y condiciones si quiere continuar
        alert('Debes aceptar los términos y condiciones para continuar.');
    }
})

