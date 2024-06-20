document.addEventListener('DOMContentLoaded', function () {

    // Array de usuarios
    const usuarios = [
        { username: 'johana', password: '7777' },
        { username: 'imanol', password: '7777' },
        { username: 'joseba', password: '7777' }
    ];

    // Recuperamos el querystring
    const querystring = window.location.search;
    console.log(querystring);

    //  crear nuevo objeto a paritir del querystring
    const params = new URLSearchParams(querystring);

    // Recuperamos el valor del parámetro 'username'
    const username = params.get('username');

    // Recuperamos el valor del parámetro 'password'
    const password = params.get('password');


    // Verificar que el usuario y clave sean validos
    const usuarioValido = usuarios.find(user => user.username === username && user.password === password);

    if (usuarioValido) {
        // Datos correctos -
        window.location.href = './dashboard.html';
    } else {
        // Datos incorrectos, mostrar alerta
        alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
        window.location.href = '../index.html';
    }
});