let imagenesCategoria = {};

function cargarGaleria(categoria) {
    const galeria = document.getElementById('galeria');
    galeria.innerHTML = '';

    const imagenes = imagenesCategoria[categoria];
    if (imagenes) {
        imagenes.forEach(src => {
            const itemGaleria = document.createElement('div');
            itemGaleria.classList.add('item_galeria'); //agrega una nueva clase dentro de div
            const img = document.createElement('img'); //inserta una img
            img.src = src;
            img.alt = 'Imagen';
            itemGaleria.appendChild(img);
            galeria.appendChild(itemGaleria);
        });
    } else {
        galeria.innerHTML = ''
           
    }
    toggleMenu()
}

// cargar las imágenes JSON
fetch('dashboard.json')
    .then(response => response.json())
    .then(data => {
        imagenesCategoria = data;
        cargarGaleria(''); 
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

// función para cambiar el menu en celular
function toggleMenu() {
    const navEnlaces = document.querySelector('.nav_enlaces');
    navEnlaces.classList.toggle('open');
}
